"use client";

import { useMemo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Linkedin, Share2, Twitter } from "lucide-react";

type ShareDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  certId: string;
  recipient: string;
};

export const ShareDialog = ({ open, onOpenChange, certId, recipient }: ShareDialogProps) => {
  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const url = new URL(window.location.href);
    url.searchParams.set("cert_id", certId);
    return url.toString();
  }, [certId]);

  const linkedInText = encodeURIComponent(
    `Proud to share my verified achievement! \\u2728 Certificate ID: ${certId} — ${recipient}`
  );
  const twitterText = encodeURIComponent(
    `My verified PurpleLane certificate (ID: ${certId})`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {}
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">Share certificate</DialogTitle>
          <DialogDescription className="text-[var(--muted-500)]">
            Copy a link or share to social. No personal data is included.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="share-link" className="text-white">Share link</Label>
            <div className="flex gap-2">
              <Input id="share-link" readOnly value={shareUrl} className="text-sm" />
              <Button type="button" onClick={handleCopy} variant="secondary">
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild className="bg-[#0A66C2] hover:bg-[#0a66c2]/90">
              <a
                aria-label="Share on LinkedIn"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&text=${linkedInText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>

            <Button asChild className="bg-black hover:bg-black/90 border border-white/15">
              <a
                aria-label="Share on Twitter"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${twitterText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </a>
            </Button>

            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <a href={`mailto:?subject=My%20PurpleLane%20Certificate&body=${encodeURIComponent(shareUrl)}`} aria-label="Share via email">
                <Share2 className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;