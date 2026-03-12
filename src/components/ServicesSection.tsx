import metalCutting from "@/assets/metal-cutting.webp";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const serviceBox = [
    {
      title: "ALMS (Asymmetric Load Measuring System)",
      description:
        "We focus on intelligent wagon load monitoring, proactive imbalance detection, and safer railway operations through advanced weighing innovation.",
      href: "/service/asymmetric-load-measuring-system",
    },
    {
      title: "OCLS (Overload Control System)",
      description:
        "OCLS ensures precise load monitoring, intelligent analytics, and superior safety performance across every railway rake.",
      href: "/service/over-load-control-system",
    },
    {
      title: "K2 (KIMAX2 AIR)",
      description:
        "We focus on real-time load monitoring, accurate axle weight measurement, and overload alerts to ensure safer and more efficient transport operations.",
      href: "/service/k2-truck-onboard-scale-system",
    },
    {
      title: "OCLS (Overload Control System)",
      description:
        "OCLS ensures precise load monitoring, intelligent analytics, and superior safety performance across every railway rake.",
      href: "#",
    },
  ];

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
              Our team evaluates operational requirements, site conditions, and
              data integration needs to design and implement advanced railway
              weighing and automation solutions.
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
        <div className="space-y-24 ">

          {/* Service Box */}
          {serviceBox.map((item, index) => (
            <Link to={item.href} className="relative rounded-3xl overflow-hidden flex items-center justify-start ">
              <img
                src={metalCutting}
                alt="Metal Engineering"
                className="w-full h-[500px] lg:h-[550px] object-cover"
              />

              <div className="absolute m-4  md:ml-[40px] bg-white rounded-2xl rounded-tr-[50px] p-5 md:p-8 ld:p-8 max-w-full md:max-w-sm lg:max-w-sm shadow-xl group cursor-pointer">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition"
                >
                  ⚙️
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                 {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  {item.description}
                </p>

                <div className="flex items-center justify-between border-t pt-5">
                  <span className="font-semibold text-sm">Find Out More</span>

                  {/* Arrow */}
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full border 
    group-hover:bg-[#FBE87E] group-hover:border-[#FBE87E] transition"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:text-black transition"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
