import Image from "next/image";

const HeroCertificate = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#6B46C1] via-[#5b39a3] to-[#4A23A0] font-sans text-white">
      <div className="rounded-b-[100px]">
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-white/[.12] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-white/[.12] rounded-full z-0 pointer-events-none" />

        <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            <div className="lg:w-[45%] text-center lg:text-left">
              <p className="text-2xl text-white mb-6">
                Congratualtions!{" "}
                <b className="font-bold">Miriyala Uma Veerendranath</b> 🎉
              </p>
              <p className="text-2xl text-white mb-8">
                on achieving your Workshop Completion Certificate!
              </p>
              <a
                href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/images/MiriyalaUmaVeerendranath_-2.jpg?"
                download
                className="inline-block bg-[#F97316] text-white rounded-lg text-base font-bold shadow-md hover:bg-orange-600 transition-colors py-4 px-8"
              >
                Download Certificate
              </a>
            </div>

            <div className="lg:w-[55%] w-full max-w-2xl">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-2xl">
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
        </section>
      </div>
    </div>
  );
};

export default HeroCertificate;