import metalCutting from "@/assets/metal-cutting.webp";
import { ArrowRight, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ServicesSection = () => {
  const serviceBox = [
    {
      title: "ALMS (Asymmetric Load Measuring System)",
      description:
        "ALMS detects uneven wagon loads in real time, enabling safer, smarter railway operations. It ensures accurate load monitoring and improved rail safety. ",
      href: "/service/asymmetric-load-measuring-system",
    },
    {
      title: "OCLS (Overload Control System)",
      description:
        "OCLS (Overload Control System) detects overload and underload conditions through accurate load monitoring. It improves railway safety, operational efficiency, and intelligent load management.",
      href: "/service/over-load-control-system",
    },
    {
      title: "K2 (KIMAX2 AIR)",
      description:
        "We focus on intelligent air suspension load monitoring, precise axle weight calculation, and real-time overload alerts to ensure safer and more efficient railway operations.",
      href: "/service/k2-truck-onboard-scale-system",
    },
    {
      title: "Portable Weighing System",
      description:
        "The Portable Weighing System enables accurate wheel and axle weight measurement anywhere without fixed infrastructure. It provides real-time monitoring to detect overload and improve operational safety. ",
      href: "/service/portable-weighing-system-service",
    },
  ];

  return (
    <section className="py-5  md:py-24 lg:py-24 bg-white">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col  mb-10 ">
          <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-800 mb-8 border-b-[1px] pb-8">
            <span>Tailored solutions for Railway industry growth</span>
            <span>[ our solutions ]</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
              Services
              <span className="w-2 h-2 bg-[#009999] rounded-full"></span>
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#009999]"></span>

                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Railmet Technologies delivers precision railway weighing,
                  wagon load monitoring, and automation solutions for safer and
                  smarter rail operations.
                </p>
              </div>
              <div className="flex md:items-center pl-0 md:pl-8">
                <Link to={"/service"}>
                  <button className="flex items-center justify-end w-fit gap-3 group bg-[#009999] px-3 md:px-6 lg:px-6 py-3 rounded-full font-semibold text-[#fff]">
                    All Services
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full  
                   group-hover:border-white border text-white "
                    >
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </Link>
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
  group-hover:bg-[#009999] transition"
              >
                <Settings className="group-hover:text-[#fff]" />
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
    group-hover:bg-[#009999] group-hover:border-[#fff] transition"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:text-[#fff] transition"
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
