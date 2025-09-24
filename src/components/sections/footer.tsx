import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1A1B23] rounded-t-[60px] text-gray-400 font-['Open_Sans'] pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-5">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <Link href="/">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/images/logo-light-3.png?"
              width={160}
              height={40}
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/purplelane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/svgs/61f9082050036c1e74489a72_linkedin-3.svg?" width={24} height={24} alt="Linkedin" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/purplelane_edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/svgs/61f9082050036c47f3489a6c_instagram-4.svg?" width={24} height={24} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/PurpleLaneEdu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/svgs/61f9082050036c1772489a6b_facebook-5.svg?" width={24} height={24} alt="Facebook" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          <div>
            <h4 className="text-white text-base font-bold mb-4">Salur Branch</h4>
            <p className="text-sm leading-relaxed">19-184A, Dabbi Street, Salur, Andhra Pradesh 535591.</p>
            <p className="text-sm mt-4">Tel : +91 94936 43228</p>
          </div>
          <div>
            <h4 className="text-white text-base font-bold mb-4">Kakinada Branch</h4>
            <p className="text-sm leading-relaxed">3-17 49/A 1st Floor, Korrapati Street, Dairy Farm Rd, Kannayya Kapu Nagar, Kakinada, Andhra Pradesh 533005.</p>
            <p className="text-sm mt-4">Tel : +91 783 783 4303</p>
          </div>
          <div>
            <h4 className="text-white text-base font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/about.html" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog-categories/" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact.html" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">PurpleLane in News</Link></li>
              <li><Link href="/success-stories.html" className="text-sm hover:text-white transition-colors">Student Reviews</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-20 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 mt-4 sm:mt-0">
            <Link href="/privacypolicy.html" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service.html" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refundpolicy.html" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
          <p className="text-center sm:text-right">© 2023 Apostlesway Technologies Pvt Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;