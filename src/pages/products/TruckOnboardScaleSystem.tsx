import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";
import product3 from "@/assets/VRS241.webp";
import result1 from '@/assets/K2 -2.jpeg'
import result2 from '@/assets/K2 -3.jpeg'
const TruckOnboardScaleSystem = () => {
  const ProductDetails = {
    description1:
      "It is hard to measure the weight of a train coach or wagon unless the train stops, and external weighing machines are used. Traditional methods require specific infrastructure, such as a weighbridge, which takes a long time. There was no easy way to monitor the live conditions of the weight during operation. This made it hard to ensure safe conditions, appropriate weight distribution, and efficient transport management.",
    description2:
      "Railmet offers the K2 Air System, an intelligent onboard weighing solution that measures the weight of a coach by using air suspension pressure. The system connects to the air bags (air springs) of the coach and reads the pressure through sensors. Since air pressure increases with load, the system uses this data to calculate the total weight in real time. The readings from all suspension points are processed by a central controller and displayed on a digital indicator, providing accurate and continuous weight monitoring without stopping the train.",
    description3:
      "This ensures a high level of safety since there is optimal management of loads, which prevents overloading. There is also improved efficiency since there are streamlined processes, eliminating delays. There is precise weight information, which helps in informed decisions, ensuring optimal management of loads. This is very important in rail transport.",

    solutionsLists: [
      "Air Suspension Pressure Measurement",
      "Multi-Point Sensor Data Collection",
      "Central Weight Calculation Unit",
      "Digital Real-Time Weight Display",
    ],
  };
  return (
    <div>
      <Header />
      <HeroBanner title={"K2 Truck Onboard Scale System"} />
      <HeadingSection heading={"K2 Truck Onboard Scale System"} />
      <ProductDetail
        description1={ProductDetails.description1}
        description2={ProductDetails.description2}
        description3={ProductDetails.description3}
        solutionLists={ProductDetails.solutionsLists}
        headingImg={product3}
        result1={result1}
        result2={result2}
      />
      <Footer />
    </div>
  );
};
export default TruckOnboardScaleSystem;
