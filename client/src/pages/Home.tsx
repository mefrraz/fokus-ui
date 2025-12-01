import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import CredibilitySection from "@/components/sections/CredibilitySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <CredibilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
