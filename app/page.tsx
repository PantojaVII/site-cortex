import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrustedBySection from "@/components/TrustedBySection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";

import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import UserInfoModal from "@/components/UserInfoModal";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white px-6 md:pl-24 md:pr-24">
      <UserInfoModal />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <TrustedBySection />
        <FeaturesSection />
        <DemoSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
