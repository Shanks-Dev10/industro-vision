import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/services/HeroSection";
import HeadingSection from "@/components/services/HeadingSection";
import ServiceDetails from "@/components/services/ServiceDetails";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";

import serviceImg from "@/assets/service_6.jpg";

const serviceData = {
  title: "K2 Truck Onboard Scale System",

  heading: "K2 Truck Onboard Scale System",

  description:
    "Railmet is a technology-driven company that provides advanced K2 System solutions, delivering real-time load monitoring and accurate axle weight measurement for safer and more efficient transport operations.",

  serviceDescription:
    "K2 System is an intelligent onboard weighing solution that measures suspension air pressure to calculate axle load and total weight in real time. Installed directly on the suspension system, it continuously monitors load conditions during operation without the need for external weighing systems.",

  image: serviceImg,

  points: [
    {
      heading: "Real-Time Weight Monitoring",
      description:
        "Accurate measurement of total load and axle weight with continuous real-time display.",
    },
    {
      heading: "Smart Pressure-Based Measurement",
      description:
        "Uses suspension air pressure to calculate load with high accuracy.",
    },
    {
      heading: "Easy Onboard Installation",
      description:
        "Simple setup without the need for external infrastructure or systems.",
    },
    {
      heading: "Overload Alert System",
      description:
        "Instant alerts to warn drivers and prevent overload-related risks.",
    },
  ],

  whatIncludes: {
    description:
      "The K2 System is designed to provide continuous onboard weight monitoring using suspension pressure data. It combines sensors, display units, and alert systems to ensure safe and efficient operations.",
    lists: [
      "Measure pressure changes in the suspension system to determine axle load.",
      "Displays real-time weight using a clear LED interface.",
      "Complete connection system for smooth data flow between components.",
      "Provides warning signals when load crosses safe limits.",
      "Ensures accurate weight measurement based on operating conditions.",
    ],
  },
  product1Img: product1,
  product2Img: product2,
};

const K2TruckOnboardScaleSystem = () => {
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

export default K2TruckOnboardScaleSystem;
