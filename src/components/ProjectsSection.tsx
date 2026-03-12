import { ArrowRight } from "lucide-react";
import wind from "@/assets/oil-platform.webp";
import construction from "@/assets/metal-cutting.webp";

const products = [
  {
    title: "ALMS(Asymmetric Load Measuring System)",
    category: "Environmental",
    year: "2015",
    image: wind,
  },
  {
    title: "OCLS (Overload Control System)",
    category: "Machinery",
    year: "2015",
    image: construction,
  },
  {
    title: "K2(KIMAX2 AIR)",
    category: "Energy",
    year: "2018",
    image: wind,
  },
  {
    title: "Industrial equipment optimization",
    category: "Production",
    year: "2020",
    image: construction,
  },
];

const stats = [
  { value: "30", label: "Years of experience" },
  { value: "75", label: "Global Locations" },
  { value: "1K", label: "Total Employee" },
  { value: "5B", label: "Annual Revenue" },
];

const ProductsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center pb-16 border-b mb-8">

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold flex items-end gap-3">
            Products
            <span className="w-2 h-2 md:w-3 h-3 lg:w-3 h-3 bg-[#FBE87E]"></span>
          </h2>

          <div className="flex items-start gap-6">
            <span className="w-[5px] h-20 bg-[#FBE87E]"></span>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Our work is a blend of innovative thinking and practical
              solutions, ensuring they are both unique and effective.
            </p>
          </div>

        </div>

        {/* Product Rows */}
        <div className="divide-y">

          {products.map((product, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-3 lg:grid-cols-[260px_1fr_200px_80px] items-center gap-10 py-10 cursor-pointer"
            >

              {/* Image */}
              <div className="rounded-xl overflow-hidden ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-28 object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold leading-snug group-hover:text-black transition">
                {product.title}
              </h3>

              {/* Tags */}
              <div className="flex gap-3">
                <span className="px-3 py-1 text-sm rounded-full border text-gray-700">
                  {product.category}
                </span>

                <span className="px-3 py-1 text-sm rounded-full border text-gray-700">
                  {product.year}
                </span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center items-center w-12 h-12 rounded-full border transition-all duration-300 group-hover:bg-[#FBE87E] group-hover:border-[#FBE87E]">

                <ArrowRight className="w-5 h-5 text-gray-700" />

              </div>

            </div>
          ))}

        </div>

        {/* Stats Inside Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 mt-16 border-t">

          {stats.map((stat, index) => (
            <div key={index}>

              <h3 className="text-7xl font-extrabold text-black">
                {stat.value}
              </h3>

              <p className="mt-3 text-lg font-semibold">
                {stat.label}
              </p>

              <div className="mt-6 border-b border-gray-300"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;