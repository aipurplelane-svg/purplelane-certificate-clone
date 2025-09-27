import Image from "next/image";
import { Download } from "lucide-react";

const HeroCertificate = () => {
  return (
    <div className="relative overflow-hidden bg-[#0A0B10] font-sans text-white">
      {/* Neon glow background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ backgroundImage: "var(--hero-glow)" }}
      />
      {/* Subtle scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "100% 2px",
        }}
      />

      <div className="rounded-b-[60px] sm:rounded-b-[100px]">
        {/* hero content */}
        <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16">
            <div className="lg:w-[45%] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,45,156,0.12)] ring-1 ring-[rgba(255,45,156,0.35)] text-xs sm:text-sm text-white/90 mb-3">
                <span className="size-1.5 rounded-full bg-[var(--neon-magenta)]" />
                Certified Achievement
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 leading-tight tracking-tight">
                <span className="text-white">Congratulations!</span>{" "}
                <span className="text-white/95 font-[inherit]" style={{ fontFamily: "var(--font-certificate-serif)" }}>
                  Miriyala Uma Veerendranath
                </span>{" "}
                🎉
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/85 mb-6 md:mb-8 leading-snug">
                on achieving your Workshop Completion Certificate!
              </p>
              <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/images/MiriyalaUmaVeerendranath_-2.jpg?"
                  download
                  aria-label="Download certificate"
                  className="inline-flex items-center justify-center gap-2 rounded-lg text-sm sm:text-base font-bold py-3 sm:py-4 px-6 sm:px-8 bg-[var(--neon-cyan)] text-[#071018] shadow-[0_0_30px_rgba(0,230,255,0.18)] hover:shadow-[0_0_42px_rgba(0,230,255,0.28)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[rgba(0,230,255,0.28)]"
                >
                  <Download className="size-4 sm:size-5" />
                  Download PDF
                </a>
                <button
                  aria-label="Share certificate"
                  className="inline-flex items-center justify-center gap-2 rounded-lg text-sm sm:text-base font-bold py-3 sm:py-4 px-6 sm:px-8 bg-transparent text-white ring-2 ring-[var(--neon-magenta)] hover:bg-[rgba(255,45,156,0.08)] transition-colors"
                >
                  Share
                </button>
              </div>
            </div>

            <div className="lg:w-[55%] w-full max-w-2xl">
              <div className="relative rounded-xl p-[2px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,230,255,0.35),rgba(122,0,255,0.25),rgba(255,45,156,0.35),rgba(0,230,255,0.35))]">
                <div className="bg-[var(--paper-cream)] p-2 sm:p-3 rounded-[10px] shadow-2xl">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/images/MiriyalaUmaVeerendranath_-2.jpg?"
                    alt="Certificate of completion for Miriyala Uma Veerendranath"
                    width={750}
                    height={530}
                    className="w-full h-auto rounded-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroCertificate;