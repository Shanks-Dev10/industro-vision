import HeadingImg from "@/assets/about-hero.jpg";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";

const ProductDetail = ({
  description1,
  description2,
  description3,
  solutionLists,
}) => {
  return (
    <section>
      <div className="pb-24 pt-4 max-w-full mx-auto 2xl:max-w-7xl px-4 md:px-5 flex flex-col-reverse md:flex-row gap-8">
        {/* Left Content */}
        <div className="md:w-[75%] w-full">
          <div>
            <img
              src={HeadingImg}
              alt="img"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <div className="py-10 border-b-[1px] border-[#DCE0E3]">
              <h2 className="text-[30px] text-black font-semibold pb-2">
                01.The Challenge
              </h2>
              <div>
                <p className="text-[16px] text-[#555555] leading-[25px] py-1">
                  {description1}
                </p>
              </div>
            </div>

            <div className="py-10 border-b-[1px] border-[#DCE0E3]">
              <h2 className="text-[30px] text-black font-semibold pb-2">
                02.The Solution
              </h2>
              <div>
                <p className="text-[16px] text-[#555555] leading-[25px] py-1">
                  {description2}
                </p>
                <ul className="list-disc pl-5 py-1">
                  {solutionLists.map((item, index) => (
                    <li
                      key={index}
                      className="text-[16px] text-black font-medium leading-[25px] py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="py-10 border-b-[1px] border-[#DCE0E3]">
              <h2 className="text-[30px] text-black font-semibold pb-2">
                03.Result
              </h2>
              <div>
                <p className="text-[16px] text-[#555555] leading-[25px] py-1">
                  {description3}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5 py-5">
                <img
                  src={product1}
                  alt="product"
                  className="rounded-xl h-[250px] object-cover w-full"
                />
                <img
                  src={product2}
                  alt="product"
                  className="rounded-xl h-[250px] object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-[25%] w-full">
          <div className="flex flex-col gap-[30px]">
            <div className="pl-[30px]  border-l-[1px] border-[#DCE0E3] text-[#8C8C8C] text-[16px] font-medium">
              Date <br />
              <span className="text-black text-[18px] lg:text-[20px] font-semibold">
                {" "}
                27 August, 2024
              </span>
            </div>
            <div className="pl-[30px] border-l-[1px] border-[#DCE0E3] text-[#8C8C8C] text-[16px] font-medium">
              Client <br />
              <span className="text-black text-[18px] lg:text-[20px] font-semibold">
                {" "}
                Logistic Company
              </span>
            </div>
            <div className="pl-[30px] border-l-[1px] border-[#DCE0E3] text-[#8C8C8C] text-[16px] font-medium">
              Category <br />
              <span className="text-black text-[18px] lg:text-[20px] font-semibold">
                {" "}
                Commercial
              </span>
            </div>
            <div className="pl-[30px] border-l-[1px] border-[#DCE0E3] text-[#8C8C8C] text-[16px] font-medium">
              Location <br />
              <span className="text-black text-[18px] lg:text-[20px] font-semibold">
                {" "}
                New York, USA
              </span>
            </div>
            <div className="pl-[30px] border-l-[1px] border-[#DCE0E3] text-[#8C8C8C] text-[16px] font-medium">
              Value <br />
              <span className="text-black text-[18px] lg:text-[20px] font-semibold">
                {" "}
                $20 Million
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
