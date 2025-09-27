"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroCertificate = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-indigo to-purple-600 overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-teal/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-text-white mb-6 leading-tight">
            Congratulations! 🎉
            <br />
            <span className="text-accent-teal">Miriyala Uma Veerendranath</span>
          </h1>
          <p className="text-xl text-text-white/90 mb-8 font-medium">
            Certificate of Completion
            <br />
            AI Workshop
          </p>
          <Button 
            asChild
            className="bg-accent-teal hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all flex items-center space-x-2 mx-auto lg:mx-0"
          >
            <Link href="/download" className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Certificate</span>
            </Link>
          </Button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md w-full">
            <Image 
              src="/certificate.jpg" 
              alt="AI Workshop Certificate for Miriyala Uma Veerendranath" 
              width={400} 
              height={300}
              className="rounded-xl border-2 border-primary-indigo/20 w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCertificate;