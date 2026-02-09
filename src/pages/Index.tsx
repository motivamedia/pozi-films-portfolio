import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <Header />
        <HeroSection />
        <ClientLogos />
        <PortfolioSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
