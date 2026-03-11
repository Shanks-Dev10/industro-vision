import { Shield } from "lucide-react";

const HeadingSection = () => {
  return (
    <section className="py-[100px] lg:max-w-7xl md:max-w-full  px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex gap-7 border-transparent md:border-r-2 md:border-[#FBE87E] ">
          <div className="bg-[#F2F5FB] w-16 h-16 flex items-center justify-center rounded-lg ">
            <Shield size={48} />
          </div>
          <div>
            <h2 className="text-black text-[26px] lg:text-[40px] font-bold leading-[50px]">
              Asymmetric Load Measuring System
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[18px] leading-8 text-black max-w-[500px]">
            A service industry is a business that provides services or
            intangible product to customers, rather than manufacturing goods.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeadingSection;
