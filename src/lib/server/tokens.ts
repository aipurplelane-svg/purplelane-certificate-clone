import crypto from "crypto";

// Simple HMAC token generation/verification with TTL
// Not used client-side. Server-only utilities.

const DEFAULT_TTL_SECONDS = 5 * 60; // 5 minutes

function getSecret() {
  const secret = process.env.DOWNLOAD_SIGNING_SECRET || process.env.NEXT_PUBLIC_FALLBACK_SECRET;
  // NEXT_PUBLIC_* is never read on server typically, but keeping fallback for demos
  return secret || "dev-insecure-secret-change-me";
}

export function sign(params: Record<string, string>, ttlSeconds = DEFAULT_TTL_SECONDS) {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const base = new URLSearchParams({ ...params, exp: String(exp) }).toString();
  const hmac = crypto.createHmac("sha256", getSecret()).update(base).digest("hex");
  const token = `${base}&sig=${hmac}`;
  return token;
}

export function verify(searchParams: URLSearchParams) {
  const providedSig = searchParams.get("sig");
  const expStr = searchParams.get("exp");
  if (!providedSig || !expStr) return { ok: false, reason: "missing_sig_or_exp" } as const;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) {
    return { ok: false, reason: "expired" } as const;
  }
  // Recompute signature over all params except sig
  const params = new URLSearchParams(searchParams);
  params.delete("sig");
  const base = params.toString();
  const expectedSig = crypto.createHmac("sha256", getSecret()).update(base).digest("hex");
  const ok = crypto.timingSafeEqual(Buffer.from(providedSig), Buffer.from(expectedSig));
  return ok ? ({ ok: true } as const) : ({ ok: false, reason: "invalid_sig" } as const);
}

export function requireOrDevBypass(hasValid: boolean) {
  if (hasValid) return true;
  if (process.env.NODE_ENV !== "production") return true; // dev bypass
  return false;
}