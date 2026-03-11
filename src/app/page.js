import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff]  to-[#fffbf2] relative overflow-hidden font-sans">
      <Navbar />
      <Hero />
    </div>
  );
}
