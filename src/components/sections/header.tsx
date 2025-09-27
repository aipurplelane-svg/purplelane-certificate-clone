"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 sm:h-20 w-full items-center bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 px-4 sm:px-6 lg:px-8 py-2 sm:py-[10px] font-sans shadow-sm border-b border-black/5">
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
            className="block rounded-xl bg-gradient-to-r from-[#ff6d34] to-[#fb923c] px-3 py-2 sm:px-4 sm:py-[13px] text-sm sm:text-base font-bold text-white shadow-sm ring-1 ring-black/5 hover:shadow-md hover:from-[#ff7c48] hover:to-[#fb9f50] active:scale-[0.98] transition-all"
          >
            Request a Call Back
          </a>
          <button type="button" aria-label="Open menu" className="block rounded-lg p-1.5 hover:bg-black/5 active:scale-95 transition">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6-purplelane-co-in/assets/svgs/menu-1.svg?"
              alt="Menu"
              width={44}
              height={44}
              className="h-7 w-7 sm:h-9 sm:w-9"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;