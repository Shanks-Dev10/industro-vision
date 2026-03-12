import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingSection from "@/components/products/HeadingSection";
import HeroBanner from "@/components/products/HeroBanner";
import ProductDetail from "@/components/products/ProductDetail";

const OverloadControlSystemProduct = () => {
  const ProductDetails = {
    description1:
      "The challenge in the freight rail industry is accurate wagon loading. In many cases, the weight of the materials is estimated rather than being measured in real time. This leads to problems such as overloading and underloading. Overloading causes heavy penalty charges and puts strain on the rolling stock and the tracks. It also causes problems when the cargo is unevenly loaded because this leads to an unbalanced motion when the wagon is in motion. This slows down the loading process as the cargo has to be checked and rearranged accordingly.",
    description2:
      "To solve the issues of inaccurate wagon loading, Railmet offers a highly advanced monitoring system that monitors the weight of each wagon during the loading process. Using highly accurate sensors placed on the railway track, it provides accurate weight data in real-time and thus facilitates accurate loading of wagons.",
    description3:
      "The implementation of the system is beneficial in increasing the accuracy and efficiency in railway wagon loading operations. Industries can ensure proper load limits for every wagon in the rake by using real-time weight monitoring and instant alerts. This can help in avoiding any issues pertaining to overloading, damage to infrastructure, and ensure the safety of operations. Also, the system can help in increasing the efficiency of the process by avoiding repetitive checks and adjustments in the process. Thus, the organization can benefit from faster rake turnaround times, smoother dispatch operations, and an increase in productivity in rail freight handling.",

    solutionsLists: [
      "Overload detection",
      "Underload detection",
      "Asymmetric load identification",
      "Wagon-wise weight monitoring",
    ],
  };
  return (
    <div>
      <Header />
      <HeroBanner title={"Overload Control System"} />
      <HeadingSection heading={"OCLs (Overload Control System)"} />
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
export default OverloadControlSystemProduct;
