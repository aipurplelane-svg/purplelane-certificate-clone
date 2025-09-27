import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer-dark text-text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-indigo/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Image src="/ccbp-logo-light.png" alt="CCBP" className="mb-4" width={150} height={50} />
            <p className="text-neutral-gray text-sm">NxtWave CCBP 4.0</p>
          </div>

          <div>
            <h5 className="font-semibold text-primary-indigo mb-4">Resources</h5>
            <ul className="space-y-2">
              <li><Link href="/workshop" className="text-neutral-gray hover:text-primary-indigo transition-colors text-sm">AI Workshop</Link></li>
              <li><Link href="/about" className="text-neutral-gray hover:text-primary-indigo transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-neutral-gray hover:text-primary-indigo transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-neutral-gray hover:text-primary-indigo transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/success-stories" className="text-neutral-gray hover:text-primary-indigo transition-colors text-sm">Student Reviews</Link></li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Link href="#" className="w-10 h-10 bg-primary-indigo/20 rounded-lg flex items-center justify-center hover:bg-accent-teal transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-primary-indigo/20 rounded-lg flex items-center justify-center hover:bg-accent-teal transition-colors">
              <Image src="/instagram-icon.png" alt="Instagram" className="h-5 w-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-primary-indigo/20 rounded-lg flex items-center justify-center hover:bg-accent-teal transition-colors">
              <Image src="/facebook-icon.png" alt="Facebook" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-gray/20 pt-6 text-center text-sm text-neutral-gray">
          &copy; 2025 CCBP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;