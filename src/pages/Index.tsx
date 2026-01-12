import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FormSection from "@/components/landing/FormSection";
import MethodologySection from "@/components/landing/MethodologySection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import BackToTop from "@/components/landing/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FormSection />
        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
