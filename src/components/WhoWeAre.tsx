import weldingImg from "@/assets/h2_img-1.webp";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Top Small Labels */}

        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
          <span>Fueling progress powering the future</span>
          <span>[ OUR STORY ]</span>
        </div>

        {/* Main Heading */}

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
            Who we are
            <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl  font-semibold  text-gray-900 mb-8">
              Transforming Rail Operations with Advanced Weighing Technology.
            </h3>

            <button className="group flex items-center gap-4 bg-[#FBE87E] px-6 py-3 rounded-full font-semibold  transition hover:bg-[#0B2B3F] hover:text-white">
              Explore now
              <span className="flex items-center justify-center group-hover:border group-hover:border-white  border border-transparent w-8 h-8 rounded-full bg-[#0B2B3F] text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl rounded-tr-[50px] md:h-[400px] h-full lg:h-full">
            <img
              src={weldingImg}
              alt="Welding"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card */}
          <div className="bg-[#0F2F45] text-white rounded-2xl rounded-tr-[90px] xl:p-10 p-5  relative h-full flex flex-col justify-between">
            <div>
              <p className="text-[#FBE87E] text-sm font-semibold mb-4">
                Technology-Oriented
              </p>

              <h3 className="xl:text-3xl text-2xl font-bold mb-6 leading-snug">
                Driving the Future of Industrial Automation Worldwide Setting
                Global Standards in Industrial Automation
              </h3>

              <div className="border-t border-white/20 mb-6"></div>

              <p className="text-sm text-white/80 leading-relaxed">
                Explore advanced solutions engineered for excellence in railway
                weighing and automation. We integrate intelligent generation
                with deep enterprise know-how to deliver precision without
                compromise.
              </p>
            </div>

            <button className="flex items-center gap-3 font-semibold mt-5 border w-fit p-3 rounded-[99px]">
              View Projects
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
