import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/services/HeroSection";
import HeadingSection from "@/components/services/HeadingSection";
import ServiceDetails from "@/components/services/ServiceDetails";

import serviceImg from "@/assets/K2 -8.jpeg";
import product1 from "@/assets/K2 -7.jpeg";
import product2 from "@/assets/K2 -6.jpeg";

const serviceData = {
  title: "AUXILIUM ",

  heading: "AUXILIUM (PORTABLE STATIC WHEEL WEIGHING SYSTEM)",

  description:
    "RailMet AUXILIUM is a portable railway weighing solution designed to accurately measure wheel, axle, bogie, wagon, locomotive, and metro coach loads, supporting efficient vehicle weight assessment without permanent track modification.",

  serviceDescription:
    "Our Portable Static Wheel Weighing System is designed to provide accurate and efficient weighing of individual railway wheels and complete vehicle loads. AUXILIUM enables operators to assess wheel loads, axle loads, and load distribution across railway vehicles, helping identify imbalance conditions and support reliable maintenance and inspection.",

  image: serviceImg,

  points: [
    {
      heading: "Reliable & Quality",
      description:
        "Engineered with high-precision weighing technology and durable railway-grade components, the system delivers consistent and reliable measurements in demanding railway environments.",
    },
    {
      heading: "Licensed & Integrated",
      description:
        "Designed to integrate with existing railway inspection and weighing processes, with optional wireless connectivity for data collection, monitoring, reporting, and analysis.",
    },
    {
      heading: "Skilled Engineering",
      description:
        "Developed and implemented by experienced railway measurement engineers, ensuring accurate calibration, reliable data processing, and dependable long-term performance.",
    },
  ],

  whatIncludes: {
    description:
      "Our solution covers the complete implementation process, from technical assessment to weighing and data analysis, ensuring reliable railway load measurement.",
    lists: [
      "In-depth Technical Assessment to understand vehicle configuration, wheel arrangement, rail gauge, and weighing requirements.",
      "Customized System Design with suitable weighing pads, sensor configuration, and measurement architecture.",
      "Complete Installation & Setup for efficient deployment at the required weighing location.",
      "Accurate Wheel & Axle Weighing to measure individual wheel and axle loads.",
      "Bogie & Vehicle Load Measurement to assess load distribution across wagons, locomotives, and metro coaches.",
      "Load Balance Analysis & Reporting to identify variations and support maintenance and operational decisions.",
      "Optional Wireless Connectivity for convenient data transfer, centralized monitoring, and reporting.",
    ],
  },
  product1Img: product1,
  product2Img: product2,
};

const Auxilium = () => {
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

export default Auxilium;
