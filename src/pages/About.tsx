import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/about/HeroBanner";
import AboutCompany from "@/components/about/AboutCompany";
import OurCompany from "@/components/about/OurCompany";
import CoreValues from "@/components/about/CoreValues";
import TeamSection from "@/components/about/TeamSection";
import Testimonal from "@/components/about/Testimonals";
import Awards from "@/components/about/Awards";
import NewsLetter from "@/components/about/NewsLetter";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <AboutCompany />
      <OurCompany />
      <CoreValues />
      <TeamSection />
      <Testimonal />
      <Awards />
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
};

export default About;
