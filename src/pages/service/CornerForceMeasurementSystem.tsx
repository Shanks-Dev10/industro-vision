import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/services/HeroSection";
import HeadingSection from "@/components/services/HeadingSection";
import ServiceDetails from "@/components/services/ServiceDetails";

import serviceImg from "@/assets/corner force1.webp";
import product1 from "@/assets/corner force2.webp";
import product2 from "@/assets/corner force3.webp";

const serviceData = {
  title: "CORNER FORCE MEASUREMENT SYSTEM",

  heading: "CORN (CORNER FORCE MEASUREMENT SYSTEM)",

  description:
    "RailMet fCORN is an intelligent railway measurement solution designed to accurately measure corner forces on railway vehicles, enabling real-time monitoring of load distribution and vehicle balance for safer and more efficient operations.",

  serviceDescription:
    "Our Corner Force Measurement System is designed to identify uneven load distribution and variations in corner forces across railway vehicles. It provides accurate force measurements at individual wheel or corner points, helping operators detect imbalance conditions before they lead to operational or maintenance issues.",

  image: serviceImg,

  points: [
    {
      heading: "Reliable & Quality",
      description:
        "Engineered with high-precision force sensors and durable railway-grade components, the system delivers consistent and accurate measurements even in demanding railway environments.",
    },
    {
      heading: "Licensed & Integrated",
      description:
        "Designed to integrate seamlessly with existing railway inspection and monitoring processes, with optional connectivity for centralized data collection, reporting, and analysis.",
    },
    {
      heading: "Skilled Engineering",
      description:
        "Developed and implemented by experienced rail automation engineers, ensuring accurate sensor calibration, reliable data processing, and long-term system performance.",
    },
  ],

  whatIncludes: {
    description:
      "Our solution covers every stage of implementation, from technical assessment to real-time monitoring, ensuring accurate corner force measurement and reliable vehicle condition analysis.",
    lists: [
      "In-depth technical assessment to understand vehicle configuration, wheel arrangement, and measurement requirements.",
      "Customized System Design with optimized sensor placement and measurement architecture based on the vehicle configuration.",
      "Complete installation and integration with suitable railway inspection and measurement infrastructure.",
      "Real-Time Corner Force Monitoring to accurately measure and compare forces across individual corners of the vehicle.",
      "Load Balance & Imbalance Detection to identify uneven force distribution and potential vehicle-related issues.",
      "Data Analysis & Reporting: Detailed measurement results for maintenance assessment and operational decision-making.",
      "Optional System Connectivity for centralized data tracking, monitoring, and reporting.",
    ],
  },
  product1Img: product1,
  product2Img: product2,
};

const CornerForceMeasurementSystem = () => {
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

export default CornerForceMeasurementSystem;
