import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/services/HeroSection";
import HeadingSection from "@/components/services/HeadingSection";
import ServiceDetails from "@/components/services/ServiceDetails";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";

import serviceImg from "@/assets/service_6.jpg";

const serviceData = {
  title: "Asymmetric Load Measuring System",

  heading: "ALMS (Asymmetric Load Measuring System)",

  description:
    "A service industry is a business that provides services or intangible product to customers, rather than manufacturing goods.",

  serviceDescription:
    "ALMS (Asymmetric Wagon Wheel Load Measuring System) is a dynamic, portable wheel weighing solution designed to measure wheel, axle, bogie, and full wagon weight in real time. It accurately detects lateral and longitudinal load asymmetry to prevent imbalance-related risks. With innovative clamp-on sensors, plug-and-play installation, and no rail cutting required, ALMS ensures quick deployment.",

  image: serviceImg,

  points: [
    {
      heading: "Precision Load Measurement",
      description:
        "Accurate wheel, axle, bogie, and full wagon weighing with real-time lateral and longitudinal asymmetry detection.",
    },
    {
      heading: "Smart & Autonomous System",
      description:
        "Self-calibration, continuous diagnostics, and intelligent proactive safety monitoring.",
    },
    {
      heading: "Portable Plug-and-Play Installation",
      description:
        "Clamp-on sensors with no rail cutting and installation within two hours.",
    },
    {
      heading: "IoT-Enabled Connectivity",
      description:
        "Cloud-based reporting, remote monitoring, and customizable software integration.",
    },
  ],

  whatIncludes: {
    description:
      "Advanced dynamic wheel load measurement is designed to detect real-time wagon imbalance and ensure safer railway operations. ALMS combines intelligent sensor technology, portable installation, and smart analytics to deliver accurate, high-speed load monitoring without requiring rail cutting or shutdowns.",
    lists: [
      "In-Motion Wheel, Axle & Bogie Measurement to capture the load data dynamically.",
      "Lateral & Longitudinal Asymmetry Detection to identify left-right and front-rear imbalance.",
      "Clamp-On Plug-and-Play Design for quick deployment, no shutdown, and on existing times in two hours.",
      "Autonomous Self-Calibration & Diagnostics for consistent accuracy and system health monitoring.",
      "IoT-Enabled Cloud Reporting with high-speed data connectivity and customizable software integration.",
      "Alarm & Safety Alerts to prevent overload risks, structural fatigue, and track damage.",
    ],
  },
  product1Img: product1,
  product2Img: product2,
};

const AsymmetricLoadMeasuringSystem = () => {
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

export default AsymmetricLoadMeasuringSystem;
