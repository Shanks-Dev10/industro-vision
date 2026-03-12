import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/services/HeroSection";
import HeadingSection from "@/components/services/HeadingSection";
import ServiceDetails from "@/components/services/ServiceDetails";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";

import serviceImg from "@/assets/service_6.jpg";

const serviceData = {
  title: "Overload Control System",

  heading: "OCLS (Overload Control System)",

  description:
    "An overload control system is an intelligent rail automation solution that provides real-time weight monitoring and safety control to operators, eliminating the need for manual checks or traditional static weighing methods.",

  serviceDescription:
    "Our overload control solution is designed to eliminate the common challenges of wagon overloading and underloading in railway operations. It provides real-time weight monitoring of wagon wheels and ensures the load distribution across the entire rake.",

  image: serviceImg,

  points: [
    {
      heading: "Reliable & Quality ",
      description:
        "Engineered with high-quality weight sensors and durable rail-mounted components, the system delivers consistent and accurate performance even in heavy industrial environments.",
    },
    {
      heading: "Licensed & Integrated",
      description:
        "Designed to integrate seamlessly with existing railway tracks and operational systems, including optional connectivity with freight monitoring platforms for centralized reporting and control.",
    },
    {
      heading: "Skilled Engineering",
      description:
        "Developed and implemented by experienced rail automation experts, ensuring proper calibration, accurate data processing, and long-term operational stability.",
    },
  ],

  whatIncludes: {
    description:
      "Our solution covers every stage of implementation,  from technical assessment to live monitoring, ensuring precise load control, improved safety, and seamless rail operations.",
    lists: [
      "In-Depth Operational Assessment to understand your loading process, wagon configuration, and track conditions.",
      "Technical System Design with customized sensor placement and interlinked monitoring architecture.",
      "Complete Installation & Integration with existing rail infrastructure for smooth implementation.",
      "Real-Time Weight Monitoring Setup including overload, underload, and asymmetric load detection.",
      "Visual Alert & Reporting Configuration with Green / Yellow / Red indicators and detailed wagon-wise reports.",
      "Optional System Connectivity for centralized data tracking and operational transparency.",
    ],
  },
  product1Img: product1,
  product2Img: product2,
};

const OverloadControlSystem = () => {
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

export default OverloadControlSystem;
