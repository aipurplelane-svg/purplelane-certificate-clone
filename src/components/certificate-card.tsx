"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Download, Share2, CheckCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShareDialog } from "./share-dialog";

export type CertificateMeta = {
  certId: string;
  recipient: string;
  course: string;
  completedAt: string; // ISO date string
  verifyUrl?: string;
};

interface CertificateCardProps {
  meta: CertificateMeta;
  className?: string;
}

export const CertificateCard = ({ meta, className }: CertificateCardProps) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const params = new URLSearchParams({ cert_id: meta.certId });
      const res = await fetch(`/api/download?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to download");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate-${meta.certId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section className={cn("bg-[var(--bg-900)] text-white relative", className)}>
      <div className="container mx-auto py-14 lg:py-20">
        <div
          className="rounded-2xl p-6 md:p-10 relative overflow-hidden ring-1 ring-white/10"
          style={{ background: "var(--hero-glow)" }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 ring-1 ring-white/15">
                <CheckCircle className="size-3 text-[var(--success)]" aria-hidden />
                Verified Achievement
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-tight font-[var(--font-hero-title)]">
                Congratulations, <span className="font-[var(--font-certificate-serif)] italic">{meta.recipient}</span>
              </h1>
              <p className="mt-3 text-[var(--muted-500)]">
                Completed: {meta.course} on {new Date(meta.completedAt).toLocaleDateString()} | ID: <strong className="select-all">{meta.certId}</strong>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        aria-label="Download certificate PDF"
                        onClick={handleDownload}
                        disabled={downloading}
                        className="text-black font-semibold shadow-[0_6px_30px_rgba(0,230,255,0.18)]"
                        style={{ background: "var(--neon-cyan)" }}
                      >
                        <Download className="mr-2 size-4" />
                        {downloading ? "Preparing…" : "Download PDF"}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Download as PDF</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button
                  aria-label="Share certificate"
                  variant="outline"
                  onClick={() => setShareOpen(true)}
                  className="border-2 text-white hover:text-white"
                  style={{ borderColor: "var(--neon-magenta)" }}
                >
                  <Share2 className="mr-2 size-4" /> Share
                </Button>

                {meta.verifyUrl && (
                  <a
                    href={meta.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)] rounded-md px-2 py-1"
                    aria-label="Open verification page"
                  >
                    <ShieldCheck className="size-4 text-[var(--success)]" aria-hidden />
                    Verify
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl p-1 bg-white/5 ring-1 ring-white/10">
                <div className="rounded-lg bg-[var(--paper-cream)] text-black p-4 md:p-6">
                  <h2 className="text-2xl md:text-3xl font-[var(--font-certificate-serif)]">{meta.recipient}</h2>
                  <p className="text-sm md:text-base">has successfully completed {meta.course} on {new Date(meta.completedAt).toLocaleDateString()}</p>
                  <p className="text-xs mt-2">Certificate ID: <span className="select-all">{meta.certId}</span></p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-[.035] bg-[linear-gradient(0deg,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:12px_12px]"></div>
            </div>
          </div>
        </div>
      </div>

      <ShareDialog
        open={shareOpen}
        onOpenChange={setShareOpen}
        certId={meta.certId}
        recipient={meta.recipient}
      />
    </section>
  );
};

export default CertificateCard;