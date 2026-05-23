import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/services/HeroSection";
import HeadingSection from "@/components/services/HeadingSection";
import ServiceDetails from "@/components/services/ServiceDetails";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";
import weighting from '@/assets/weighting5.webp'
import weighting1 from '@/assets/weighting4.webp'

import serviceImg from "@/assets/service_6.jpg";

const serviceData = {
  title: "Portable Weighing System",

  heading: "Portable Weighing System",

  description:
    "Railmet is a technology-driven company delivering advanced portable weighing solutions that enable real-time load monitoring and precise wheel and axle weight measurement for safer and more efficient rail operations.",

  serviceDescription:
    "The Portable Weighing System is a small, lightweight, and transportable system developed to accurately measure wheel weight, axle weight, and total wagon weight on site.",

  image: weighting,

  points: [
    {
      heading: "Real-Time Load Monitoring",
      description:
        " Instant measurement of wheel, axle, and total weight",
    },
    {
      heading: "Portable & Quick Setup",
      description:
        "Easy to transport and install without infrastructure",
    },
    {
      heading: "High-Precision Measurement",
      description:
        "Accurate weight capture using advanced load sensors",
    },
    {
      heading: "Load Imbalance Detection",
      description:
        "Identifies overload, underload, and uneven distribution",
    },
  ],

  whatIncludes: {
    description:
      "The Portable Weighing System is designed for quick deployment and reliable performance with integrated components",
    lists: [
      "Placed under wheels to capture accurate weight data",
      "Shows real-time weight readings clearly",
      "Processes and converts sensor signals into usable data",
      "Ensures seamless connectivity between components",
      "Pre-calibrated system for accurate and consistent results",
    ],
  },
  product1Img: weighting1,
  product2Img: product2,
};

const PortableWeighingSustemService = () => {
  return (
    <>
      <Header />

      <HeroBanner title={serviceData.title} />

      <HeadingSection
        heading={serviceData.heading}
        description={serviceData.description}
      />

      <ServiceDetails
        serviceImage={serviceData.image}
        serviceDescription={serviceData.serviceDescription}
        descriptionPoints={serviceData.points}
        whatInclude={serviceData.whatIncludes}
        productimg1={serviceData.product1Img}
        productimg2={serviceData.product2Img}
      />

      <Footer />
    </>
  );
};

export default PortableWeighingSustemService;
