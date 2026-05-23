import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";
import product4 from "@/assets/railmet-product-06.webp";
import result1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import result2 from "@/assets/railmet-banner-05.jpg.webp";
import weighting from '@/assets/weighting5.webp'
import weighting1 from '@/assets/weighting4.webp'

const PortableWeighingSystem = () => {
  const ProductDetails = {
    description1:
      "The Portable Weighing System is a small, lightweight, and transportable system developed to accurately measure wheel weight, axle weight, and total wagon weight on site. It does not require any site preparation or construction like a conventional weighbridge. This system can be easily transported to any site and set up within a matter of minutes. This system can be used in rail yards, maintenance yards, ports, etc.",
    description2:
      "In order to solve these challenges, Railmet has come up with a solution known as the Portable Weighing System.The system works by using precise load sensors that are placed on each wheel in order to get precise weight data in real-time. It can be quickly deployed without any civil work or permanent installation, making it ideal for flexible operations across multiple locations.",
    description3:
      "The use of the Portable Weighing System has several positive implications for the management of loads. On one hand, the ability to conduct weight measurements directly means that the loads are within the safe limits before the wagons are dispatched. This reduces the potential for damage to the tracks, equipment failures, and accidents due to improper load handling.",

    solutionsLists: [
      "Load Measuring Sensors / Pads",
      "Wheel & Axle Load Monitoring",
      "Real-Time Digital Display",
      "Load Imbalance Detection",
    ],
  };
  return (
    <div>
      <Header />
      <HeroBanner title={"Portable Weighing System"} />
      <HeadingSection heading={"Portable Weighing System"} />
      <ProductDetail
        description1={ProductDetails.description1}
        description2={ProductDetails.description2}
        description3={ProductDetails.description3}
        solutionLists={ProductDetails.solutionsLists}
        headingImg={weighting}
        result1={weighting1}
        result2={result2}
      />
      <Footer />
    </div>
  );
};
export default PortableWeighingSystem;
