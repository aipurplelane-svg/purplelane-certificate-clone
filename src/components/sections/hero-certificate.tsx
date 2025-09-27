import Link from "next/link";
import Image from "next/image";

const HeroCertificate = () => {
  return (
    <section id="workshop" className="hero-container text-white">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="mb-6 font-bold">Build Your Own Generative AI Model</h1>
          <div className="space-y-4 mb-8 text-xl">
            <p>FREE Hands-On Certified Workshop</p>
            <p>2 Hours • Hands-on Experience • All Branches</p>
            <p>No Coding Knowledge Required</p>
            <p className="text-2xl font-semibold text-teal-300">25th Aug, 2025 - 30th Sep, 2025</p>
            <p className="text-lg opacity-90">Limited Time Offer! ₹9999/ <span className="line-through">FREE</span></p>
          </div>
          <Link href="https://accounts.ccbp.in/register/ai-workshop" className="cta-button inline-block hover:bg-teal-600 transition">
            Book Your Seat Now →
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6/generated_images/professional-digital-certificate-for-com-a2c527d6-20250927151010.jpg?"
            alt="AI Workshop Certificate Mockup"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCertificate;