import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import HarshReality from "@/components/home/HelpAmazon";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import OurApproach from "@/components/home/OurApproach";
import Services from "@/components/home/Services";
import SocialProof from "@/components/home/SocialProof";
import WhyChoose from "@/components/home/WhyChoose";
import YourNeeds from "@/components/home/YourNeeds";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff]  to-[#FFE7BC] relative overflow-hidden font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyChoose />
      <Services />
      <OurApproach />
      <HarshReality />
      <YourNeeds />
      <ContactUs />
      <Footer />
    </div>
  );
}
