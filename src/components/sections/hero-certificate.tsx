import Image from "next/image";
import { Download } from "lucide-react";

const HeroCertificate = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#6B46C1] via-[#5b39a3] to-[#4A23A0] font-sans text-white">
      <div className="rounded-b-[60px] sm:rounded-b-[100px]">
        <div className="absolute -top-20 -left-20 size-[220px] bg-white/10 rounded-full blur-3xl z-0 pointer-events-none hidden sm:block" />
        <div className="absolute -bottom-28 -right-28 size-[280px] bg-white/10 rounded-full blur-3xl z-0 pointer-events-none" />

        <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16">
            <div className="lg:w-[45%] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs sm:text-sm text-white/90 mb-3">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Certificate Awarded
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Congratulations! <span className="font-extrabold">Miriyala Uma Veerendranath</span> 🎉
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 md:mb-8 leading-snug">
                on achieving your Workshop Completion Certificate!
              </p>
              <a
                href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/images/MiriyalaUmaVeerendranath_-2.jpg?"
                download
                aria-label="Download certificate"
                className="inline-flex w-full xs:w-auto sm:w-auto items-center justify-center gap-2 bg-[#F97316] text-white rounded-lg text-sm sm:text-base font-bold shadow-md hover:bg-orange-600 active:scale-[0.99] transition-colors py-3 sm:py-4 px-6 sm:px-8 ring-1 ring-white/10"
              >
                <Download className="size-4 sm:size-5" />
                Download Certificate
              </a>
            </div>

            <div className="lg:w-[55%] w-full max-w-2xl">
              <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-white/40 to-white/10">
                <div className="bg-white/80 backdrop-blur-md p-2 sm:p-3 rounded-[10px] shadow-2xl">
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