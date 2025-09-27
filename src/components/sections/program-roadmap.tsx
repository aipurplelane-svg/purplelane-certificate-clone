import Image from 'next/image';

const ProgramRoadmap = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] tracking-tight">
          About Visual & UI/UX Mastery
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[var(--color-text-dark)]/80">
          A Proven Program to mold you into a designer. Supported by Multiple Job Tracks & Personalized guidance for Securing placements.
        </p>
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="w-full max-w-3xl rounded-xl p-[2px] bg-gradient-to-r from-[#6B46C1]/40 to-[#a78bfa]/20">
            <div className="rounded-[10px] bg-white p-2 sm:p-3 shadow-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/svgs/roadmap-2.svg?"
                alt="A visual roadmap of the UI/UX Mastery program, showing steps from fundamentals to placement assistance."
                width={730}
                height={1600}
                className="h-auto w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRoadmap;