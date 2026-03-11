import Link from "next/link";
import Button from "../button/Button";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="assets/logo.png"
            alt="Leadsbridge Logo"
            className="h-10 object-contain"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
        <Link href="#" className="hover:text-primary transition-colors ">
          Services
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Contact
        </Link>
        <div>
          <Button>Book a Free Consultation</Button>
        </div>
      </div>
    </nav>
  );
}
