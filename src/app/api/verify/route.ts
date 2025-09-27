import { NextRequest } from "next/server";
import { verify as verifyToken, requireOrDevBypass } from "@/lib/server/tokens";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const certId = searchParams.get("cert_id");

  if (!certId) {
    return new Response(
      JSON.stringify({ error: "missing cert_id" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const tokenPresent = searchParams.get("sig") !== null && searchParams.get("exp") !== null;
  let allowed = false;
  if (tokenPresent) {
    const v = verifyToken(searchParams);
    allowed = v.ok;
  }
  if (!allowed) allowed = requireOrDevBypass(false);
  if (!allowed) {
    return new Response(
      JSON.stringify({ error: "unauthorized" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // Demo verification data. Replace with real lookup.
  const data = {
    cert_id: certId,
    valid: true,
    recipient: "{{RECIPIENT_NAME}}",
    course: "{{COURSE_TITLE}}",
    completed_at: "{{DATE}}",
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}