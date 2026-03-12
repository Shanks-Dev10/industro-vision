import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";

const TruckOnboardScaleSystem = () => {
  const ProductDetails = {
    description1:
      "A truck is designed to carry heavy loads, and an overload can cause many problems in transportation activities. Trucks with overloaded and unevenly loaded goods apply pressure to the vehicle’s suspension system, causing damage to the vehicle and safety risks. Drivers are often in a difficult position in taking the right action because of the lack of facilities in detecting overload conditions in vehicles during transit. Drivers need a system to monitor the vehicle’s load conditions in real time.",
    description2:
      "To solve the issues of vehicle overloading and improper load distribution, Railmet has introduced the K2 Truck Onboard Scale System. It is an intelligent system designed to be mounted on the suspension system of the vehicle. It measures the pressure on the axles and calculates the load on the vehicle. It displays the weight of the load accurately and in real time through pressure sensors and a digital display. It keeps monitoring the load and alerts the driver if the weight crosses the safe limits.",
    description3:
      "The implementation of the K2 Truck Onboard Scale System has the result of enhancing the accuracy and efficiency in the management of the loads carried by the vehicles. This is because the transport operators can ensure that the vehicle is loaded within the required limit through the real-time monitoring and instant alerts that the system sends when the vehicle is overloaded. This has the result of eliminating problems that could be caused by overloading the vehicles, which could cause damage to the vehicles and negatively affect their safety of the vehicles. The system also has the result of improving the efficiency of the operations carried out by the fleet operators. ",

    solutionsLists: [
      "Suspension Pressure Sensors",
      "Axle Load Monitoring",
      "Digital Weight Display",
      "Overload Alert System",
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
      />
      <Footer />
    </div>
  );
};
export default TruckOnboardScaleSystem;
