import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#18181b] text-white pt-16 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="max-w-sm">
          <div className="mb-6">
            <Image
              src="/assets/logo.png"
              alt="Fintrixx Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            FINTRIXX – Your Amazon Growth Partner Since 2016, we boost Amazon
            success with expert SEO, PPC, and growth strategies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6">Home</h3>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:text-gray-200  text-gray-400 text-sm hover:border-b hover:border-gray-400 w-fit pb-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-gray-200 hover:border-b w-fit hover:border-gray-400 text-sm"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-gray-200 hover:border-b w-fit hover:border-gray-400 text-sm"
              >
                Services
              </Link>
              <Link
                href="/why-choose-us"
                className="text-gray-400 hover:text-gray-200 hover:border-b w-fit hover:border-gray-400 text-sm"
              >
                Why Choose Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-gray-200 hover:border-b w-fit hover:border-gray-400 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6">Contact</h3>
            <div className="flex items-center gap-3 text-gray-200 text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>leadsbridgedemo@example.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">© 2025 Copyright Amazon</p>
        <div className="flex gap-8">
          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-white text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-conditions"
            className="text-gray-400 hover:text-white text-sm"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
