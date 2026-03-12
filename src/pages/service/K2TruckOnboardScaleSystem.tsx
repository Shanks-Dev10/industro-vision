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
    "Railmet providesreal-time onboard weighing systems through the K2 Truck Onboard Scale System. The system measures suspension pressure to calculate axle load and total weight in real time, helping operators monitor load conditions and prevent vehicle overloading for efficient transport operations.",

  serviceDescription:
    "The K2 Truck Onboard Scale System is a smart load monitoring solution designed to measure axle pressure and convert it into accurate weight readings. Installed directly on the suspension system, it continuously tracks the load on each axle and displays the total vehicle weight on a digital indicator.",

  image: serviceImg,

  points: [
    {
      heading: "Real-Time Weight Monitoring",
      description:
        "Displays the total load and axle weight instantly through a digital indicator, allowing drivers to monitor vehicle load conditions during operation.",
    },
    {
      heading: "Overload Warning System",
      description:
        "When the load crosses the limits, the LED indicators and alarms alert the driver. Which helps to prevent overloading. ",
    },
    {
      heading: "Suspension Pressure Monitoring",
      description:
        "Sensors measure suspension air pressure on both sides of the axle to calculate accurate load distribution across the vehicle.",
    },
    {
      heading: "Easy Installation & Calibration",
      description:
        "The system features a straightforward setup with sensors, wiring connections, and simple calibration to ensure reliable weight measurement.",
    },
  ],

  whatIncludes: {
    description:
      "The K2 Truck Onboard Scale System is designed to provide continuous onboard weight monitoring using suspension pressure data. The system includes sensors, display units, and alarm indicators to help drivers maintain safe load limits and improve transport efficiency.",
    lists: [
      " Sensors installed on the suspension system measure pressure changes to determine axle load.",
      "A 3-digit LED display shows the total vehicle weight or axle load in real time.",
      "Extension cables, connectors, and wiring components link sensors to the indicator unit.",
      "Visual indicators and alarm systems alert the driver when the load exceeds safe limits.",
      "Calibration configuration ensures accurate weight measurement based on vehicle load conditions.",
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
