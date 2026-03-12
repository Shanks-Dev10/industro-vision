import { Shield } from "lucide-react";

const HeadingSection = ({heading,description}) => {
  return (
    <section className="py-[100px] 2xl:max-w-7xl max-w-full  px-4 md:px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex gap-7 border-transparent md:border-r-2 md:border-[#FBE87E] ">
          <div className="bg-[#F2F5FB] w-16 h-16 flex items-center justify-center rounded-lg ">
            <Shield size={48} />
          </div>
          <div>
            <h2 className="text-black text-[18px] leading-[30px] lg:text-[30px] font-bold md:leading-[50px]">
              {heading}
            </h2>
          </div>
        </div>
        <div>
          <p className="md:text-[18px] text-[16px] leading-8 text-black max-w-[500px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeadingSection;
