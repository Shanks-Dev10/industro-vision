import metalCutting from "@/assets/metal-cutting.webp";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

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
    <section className="py-5  md:py-24 lg:py-24 bg-white">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col  mb-10 ">
          <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
            <span>Tailored solutions for industry growth</span>
            <span>[ our solutions ]</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
              Services
              <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#FBE87E]"></span>

                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Our team evaluates operational requirements, site conditions,
                  and data integration needs to design and implement advanced
                  railway weighing and automation solutions.
                </p>
              </div>
              <div className="flex md:items-center pl-0 md:pl-8">
                <button className="flex items-center justify-end w-fit gap-3 group bg-[#FBE87E] px-3 md:px-6 lg:px-6 py-3 rounded-full font-semibold hover:bg-[#0B2B3F] hover:text-white">
                  All Services
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full  border
                   group-hover:border-white bg-[#0B2B3F] text-white border-transparent"
                  >
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {serviceBox.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className=" bg-white border rounded-2xl  p-5 md:p-8 flex flex-col justify-between  shadow-xl group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 
  group-hover:bg-[#FBE87E] transition"
              >
                ⚙️
              </div>

              <h3 className="text-xl md:text-2xl  font-bold mb-6">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mb-8">{item.description}</p>

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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
