import Header from "@/components/sections/header";
import HeroCertificate from "@/components/sections/hero-certificate";
import KeyTopics from "@/components/sections/key-topics";
import ProgramRoadmap from "@/components/sections/program-roadmap";
import Footer from "@/components/sections/footer";
import MouPartners from "@/components/sections/mou-partners";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCertificate />
        <KeyTopics />
        <ProgramRoadmap />
        <MouPartners />
      </main>
      <Footer />
    </div>
  );
}