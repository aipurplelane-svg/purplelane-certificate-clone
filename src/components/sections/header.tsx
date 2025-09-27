"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-primary-indigo font-bold text-xl">CCBP Logo</Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-6">
            <Link href="/about" className="text-neutral-gray hover:text-primary-indigo transition-colors">About</Link>
            <Link href="/services" className="text-neutral-gray hover:text-primary-indigo transition-colors">Services</Link>
            <Link href="/contact" className="text-neutral-gray hover:text-primary-indigo transition-colors">Contact</Link>
          </nav>
          <Button className="bg-accent-teal hover:bg-teal-600 text-white px-6 py-2 rounded-md font-semibold">
            Request Callback
          </Button>
        </div>

        <Menu className="md:hidden text-primary-indigo h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;