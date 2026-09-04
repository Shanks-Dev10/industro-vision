import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";
import product1 from "@/assets/corner force12.webp";
import result1 from '@/assets/corner force11.webp'
import result2 from '@/assets/corner force2.webp'

const CornerForceMeasurementSystem = () => {
  const ProductDetails = {
    description1:
      "Uneven force distribution across railway vehicle corners can affect proper balancing and make maintenance inspections more difficult. Operators need a fast and accurate way to measure force at every corner.",
    description2:
      "Railmet fCORN is a fully wireless 4-channel corner force measurement system designed for railway bogies, metro coaches, locomotives, and rail vehicles. It measures individual corner forces and displays Total Force, Left/Right Difference, Front/Rear Difference, and Diagonal Difference in real time on an industrial tablet.",
    description3:
      "fCORN enables accurate, real-time corner force measurement for quick force balancing, easier maintenance, and improved inspection efficiency.",

    solutionsLists: [
      "Accurate 4-corner force measurement",
      "Real-time force monitoring",
      "Easy force balancing",
      "Quick identification of force differences",
      'Cable-free wireless operation',
      'Efficient railway maintenance'
    ],
  };
  return (
    <div>
      <Header />
      <HeroBanner title={"Corner Force Measurement System"} />
      <HeadingSection heading={"Corner Force Measurement System"} />
      <ProductDetail
        description1={ProductDetails.description1}
        description2={ProductDetails.description2}
        description3={ProductDetails.description3}
        solutionLists={ProductDetails.solutionsLists}
        headingImg={product1}
        result1={result1}
        result2={result2}
      />
      <Footer />
    </div>
  );
};
export default CornerForceMeasurementSystem;
