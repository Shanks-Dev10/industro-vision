import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSection from "@/components/ServicesSection";
import WorkProcess from "@/components/WorkProcess";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import OurPartners from "@/components/OurPartners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <ServicesSection />
      <WorkProcess />
      <ProjectsSection />
      <OurPartners/>
      <TestimonialsSection />
      <CTASection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
