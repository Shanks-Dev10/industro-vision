import metalCutting from "@/assets/metal-cutting.webp";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-5 md:py-24 lg:py-24 bg-white">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20  border-b-[1px] p-5">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Tailored solutions for industry growth
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-black flex items-end gap-3">
              Services
              <span className="w-3 h-3 bg-[#FBE87E]"></span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600 mb-6 border-l-[4px] p-4 border-[#FBE87E]">
              Our team evaluates operational requirements, site conditions, and data integration needs to design and implement advanced railway weighing and automation solutions.
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
                className="w-full h-[500px] lg:h-[550px] object-cover"
              />

              <div className="absolute left-5 md:left-10 lg:left-10 top-5 md:top-10 lg:top-10 bg-white rounded-2xl rounded-tr-[90px] p-2 md:p-8 ld:p-8 max-w-full md:max-w-sm lg:max-w-sm shadow-xl group cursor-pointer">

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition">
                  ⚙️
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                  ALMS <br /> (Asymmetric Load Measuring System)
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  We focus on intelligent wagon load monitoring, proactive imbalance detection, and safer railway operations through advanced weighing innovation.
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
                className="w-full h-[500px] lg:h-[550px] object-cover"
              />

              <div className="absolute left-5 md:left-10 lg:left-10 top-5 md:top-10 lg:top-10 bg-white rounded-2xl rounded-tr-[90px] p-2 md:p-8 ld:p-8 max-w-full md:max-w-sm lg:max-w-sm shadow-xl group cursor-pointer">

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition">
                  ⚙️
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                  OCLS <br /> (Overload Control System)
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  OCLS ensures precise load monitoring, intelligent analytics, and superior safety performance across every railway rake.
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
          {/* Service 3 */}
          <div className="sticky top-24 sticky top-[300px]">
            <div className="relative rounded-3xl overflow-hidden">

              <img
                src={metalCutting}
                alt="Metal Engineering"
                className="w-full h-[500px] lg:h-[550px] object-cover"
              />

              <div className="absolute left-5 md:left-10 lg:left-10 top-5 md:top-10 lg:top-10 bg-white rounded-2xl rounded-tr-[90px] p-2 md:p-8 ld:p-8 max-w-full md:max-w-sm lg:max-w-sm shadow-xl group cursor-pointer">

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition">
                  ⚙️
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                  K2 <br /> (KIMAX2 AIR)
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  We focus on real-time load monitoring, accurate axle weight measurement, and overload alerts to ensure safer and more efficient transport operations.                </p>

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
          {/* Service 4 */}
          <div className="sticky top-24 sticky top-[300px]">
            <div className="relative rounded-3xl overflow-hidden">

              <img
                src={metalCutting}
                alt="Metal Engineering"
                className="w-full h-[500px] lg:h-[550px] object-cover"
              />

              <div className="absolute left-5 md:left-10 lg:left-10 top-5 md:top-10 lg:top-10 bg-white rounded-2xl rounded-tr-[90px] p-2 md:p-8 ld:p-8 max-w-full md:max-w-sm lg:max-w-sm shadow-xl group cursor-pointer">

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition">
                  ⚙️
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                  ALMS <br /> (Asymmetric Load Measuring System)
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  Railmet is a railway technology company that provides advanced ALMS solutions to customers, delivering intelligent wagon load monitoring and real-time asymmetry detection for safer rail operations.
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