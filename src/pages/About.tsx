import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/about/HeroBanner";
import AboutCompany from "@/components/about/AboutCompany";
import CoreValues from "@/components/about/CoreValues";
import Partners from "@/components/about/Partners";
import Testimonal from "@/components/about/Testimonals";
import Awards from "@/components/about/Awards";
import NewsLetter from "@/components/about/NewsLetter";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <AboutCompany />
      <CoreValues />
      <Partners />
      <Testimonal />
      <Awards />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default About;
