import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";

const AdvancedLoadMonitoringSystem = () => {
  const ProductDetails = {
    description1:
      "Trains carry heavy loads, and any imbalance can cause a significant issue to the railway system. Wagons carrying overloaded and unbalanced loads exert pressure on the railway track, which can cause damage to the track and pose safety hazards as well as raise the cost of track maintenance. The operators face difficulty in taking the required actions due to the lack of monitoring systems that can detect the overload conditions during train operation. The operators require a reliable system that can help them detect the unbalanced conditions in real time.",
    description2:
      "In order to overcome the problems of overloading and unevenly loaded wagons, Railmet has developed the Advanced Load Monitoring System (ALMS). ALMS is an intelligent railway monitoring system that is placed on the rail track and measures the wheel loads as the train passes over it. It provides accurate and real-time information on the wheel loads through its precision sensors and wheel detection technology. It provides accurate information on the wheel loads as the train passes over the track.",
    description3:
      "The implementation of Railmet’s Advanced Load Monitoring System (ALMS) increases railway safety and efficiency by providing accurate and timely wagon load monitoring results. Railway operators are alerted to overloaded or unevenly loaded wagons by detecting these wagons as they cross the railway tracks, thus acting in time to avoid any damage to the railway infrastructure. The implementation of ALMS reduces excessive stress on railway tracks, thus minimizing costs associated with maintaining and extending the lifespan of railway infrastructure.",

    solutionsLists: [
      "RailStrain Sensors",
      "WheelSense Detection",
      "Track Link Connectivity",
      "RailSight Monitoring Platform",
    ],
  };
  return (
    <div>
      <Header />
      <HeroBanner title={"Advanced Load Monitoring System"} />
      <HeadingSection heading={"ALMS (Advanced Load Monitoring System)"} />
      <ProductDetail
        description1={ProductDetails.description1}
        description2={ProductDetails.description2}
        description3={ProductDetails.description3}
        solutionLists={ProductDetails.solutionsLists}
      />
      <Footer />
    </div>
  );
};
export default AdvancedLoadMonitoringSystem;
