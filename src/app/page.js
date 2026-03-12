import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Services from "@/components/home/Services";
import SocialProof from "@/components/home/SocialProof";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff]  to-[#FFE7BC] relative overflow-hidden font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyChoose />
      <Services />
    </div>
  );
}
