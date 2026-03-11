import metalCutting from "@/assets/metal-cutting.webp";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Tailored solutions for industry growth
            </p>

            <h2 className="text-6xl font-extrabold text-black flex items-end gap-3">
              Services
              <span className="w-3 h-3 bg-[#FBE87E]"></span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600 mb-6">
              Together, we identify the industrial data automation project's
              general scope and the components needed to produce.
            </p>

            <button className="flex items-center gap-3 bg-[#FBE87E] px-6 py-3 rounded-full font-semibold">
              All Services
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

        </div>

        {/* Services */}
        <div className="space-y-24 sticky top-[300px]">

          {/* Service 1 */}
          <div className="sticky top-24 sticky top-[300px]">
            <div className="relative rounded-3xl overflow-hidden">

              <img
                src={metalCutting}
                alt="Metal Engineering"
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute left-10 top-10 bg-white rounded-2xl rounded-tr-[90px] p-8 max-w-sm shadow-xl group cursor-pointer">

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition">
                  ⚙️
                </div>

                <h3 className="text-3xl font-bold mb-6">
                  Metal <br /> Engineering
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  We focus on delivering high-quality designs, efficient
                  project management, and cutting-edge solutions.
                </p>

                <div className="flex items-center justify-between border-t pt-5">

                  <span className="font-semibold text-sm">
                    Find Out More
                  </span>

                  {/* Arrow */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border 
    group-hover:bg-[#FBE87E] group-hover:border-[#FBE87E] transition">

                    <ArrowRight
                      size={16}
                      className="group-hover:text-black transition"
                    />

                  </span>

                </div>

              </div>

            </div>
          </div>

          {/* Service 2 */}
          <div className="sticky top-24 sticky top-[300px]">
            <div className="relative rounded-3xl overflow-hidden">

              <img
                src={metalCutting}
                alt="Metal Engineering"
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute left-10 top-10 bg-white rounded-2xl rounded-tr-[90px] p-8 max-w-sm shadow-xl group cursor-pointer">

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition">
                  ⚙️
                </div>

                <h3 className="text-3xl font-bold mb-6">
                  Metal <br /> Engineering
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  We focus on delivering high-quality designs, efficient
                  project management, and cutting-edge solutions.
                </p>

                <div className="flex items-center justify-between border-t pt-5">

                  <span className="font-semibold text-sm">
                    Find Out More
                  </span>

                  {/* Arrow */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border 
    group-hover:bg-[#FBE87E] group-hover:border-[#FBE87E] transition">

                    <ArrowRight
                      size={16}
                      className="group-hover:text-black transition"
                    />

                  </span>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;