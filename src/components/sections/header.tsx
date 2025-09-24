"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 sm:h-20 w-full items-center bg-white px-4 sm:px-6 lg:px-8 py-2 sm:py-[10px] font-sans shadow-sm">
      <div className="mx-auto flex w-full max-w-[1210px] items-center justify-between">
        <Link href="https://purplelane.in/">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/icons/logoicon-1.png?"
            alt="PurpleLane Logo"
            width={44}
            height={44}
            className="h-9 w-9 sm:h-11 sm:w-11"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://bigin.zoho.in/crm/WebFormServeServlet?rid=80a83a497dcfe9575dbcf5410d6cf4a1073a2417e966cf2cb2c0ec59bbb8b7bdgid548dd866c5336094f365029ec72cbe95f12b07e9280bf3aee2a43f3070b97c34"
            className="block rounded-[10px] bg-[#ff6d34] px-3 py-2 sm:px-4 sm:py-[13px] text-sm sm:text-base font-bold text-white transition-colors hover:bg-[#ff7c48]"
          >
            Request a Call Back
          </a>
          <button type="button" aria-label="Open menu" className="block">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/svgs/menu-1.svg?"
              alt="Menu"
              width={44}
              height={44}
              className="h-9 w-9 sm:h-11 sm:w-11"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;