"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6/generated_images/modern-ccbp-nxtwave-logo%2c-indigo-and-t-fc856113-20250927151016.jpg?"
            alt="CCBP NxtWave Logo"
            width={150}
            height={50}
            className="hover:scale-105 transition-transform"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#workshop" className="text-gray-700 hover:text-indigo-600">Workshop</Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link href="#tools" className="text-gray-700 hover:text-indigo-600">Tools</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://accounts.ccbp.in/register/ai-workshop" className="cta-button hidden md:block">
            Book Your Seat Now
          </Link>
          <Menu className="md:hidden text-gray-700 cursor-pointer" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;