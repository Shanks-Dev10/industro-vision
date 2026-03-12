import { Link } from "react-router-dom";

const HeadingSection = ({heading}) => {
  return (
    <section>
      <div className="pt-24 pb-5 max-w-full mx-auto 2xl:max-w-7xl px-4 md:px-5">
        <div className="flex items-center gap-2 pb-4">
          <Link
            to={"/"}
            className="text-[16px] font-semibold border border-[#DCE0E3] py-[4px] px-[15px] rounded-[20px]"
          >
            Machinery
          </Link>
          <Link
            to={"/"}
            className="text-[16px] font-semibold border border-[#DCE0E3] py-[4px] px-[15px] rounded-[20px]"
          >
            2015
          </Link>
        </div>
        <div>
          <h1 className="lg:text-[40px] text-[26px] font-semibold text-black">{heading}</h1>
        </div>
      </div>
    </section>
  );
};
export default HeadingSection;
