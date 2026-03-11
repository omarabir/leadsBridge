"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "../button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative z-50 py-4 sm:py-6 px-6 sm:px-10 max-w-7xl mx-auto border-b border-transparent md:border-none">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="assets/logo.png"
              alt="Leadsbridge Logo"
              className="h-8 sm:h-10 object-contain"
            />
          </Link>
        </div>

      
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-gray-700">
          <Link
            href="#"
            className="hover:text-primary transition-colors text-primary"
          >
            Services
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <div className="ml-4">
            <Button className="whitespace-nowrap">
              Book a Free Consultation
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-primary focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fffbf2] shadow-xl border-t border-orange-100 flex flex-col gap-2 font-semibold text-gray-700 z-50">
          <div className="flex flex-col px-6 py-6 pb-8">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors text-primary py-3 border-b border-orange-200"
            >
              Services
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-3 border-b border-orange-200"
            >
              About
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-3 mb-4"
            >
              Contact
            </Link>
            <div className="flex justify-center w-full mt-2">
              <Button className="w-full text-center">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
