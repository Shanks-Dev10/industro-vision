import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";
import product1 from "@/assets/K2 -2.jpeg";
import result1 from '@/assets/K2 -3.jpeg'
import result2 from '@/assets/K2 -4.jpeg'

const Auxilium = () => {
  const ProductDetails = {
    description1:
      "Railway operators need accurate weighing of wheels, axles, bogies, and wagons without permanent track modifications. Conventional weighing solutions can require track cutting, welding, or civil work, making installation time-consuming and costly.",
    description2:
      "Railmet AUXILIUM is a portable static rail weighing system designed for accurate weighing of individual wheels, axles, bogies, wagons, locomotives, and metro coaches. Its lightweight design enables fast 10–15 minute installation without track cutting or civil work, with optional wireless data transmission.",
    description3:
      "AUXILIUM provides accurate, portable, and flexible rail vehicle weighing while reducing setup time and eliminating the need for permanent track modifications.",

    solutionsLists: [
      "Accurate static wheel weighing",
      "Wheel, axle, bogie & wagon weighing",
      "Fast 10–15 minute installation",
      "No track cutting or civil work",
      'Portable & lightweight operation',
      'Battery-powered system',
      'Optional wireless data transmission',
      'Reduced weighing turnaround time'
    ],
  };
  return (
    <div>
      <Header />
      <HeroBanner title={"AUXILIUM "} />
      <HeadingSection heading={"AUXILIUM "} />
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
export default Auxilium;
