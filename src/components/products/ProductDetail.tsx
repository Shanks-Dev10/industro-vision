import HeadingImg from "@/assets/about-hero.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";

const service = [
  {
    name: "ALMS (Asymmetric Load Measuring System)",
    href: "/product/asymmetric-load-measuring-system",
  },
  {
    name: "OCLs (Overload Control System)",
    href: "/product/overload-Control-System-product",
  },
  {
    name: "K2 Truck Onboard Scale System",
    href: "/product/truck-onboard-scale-system",
  },
  {
    name: "Portable Weighing System",
    href: "/product/portable-weighing-system",
  },
];

const ProductDetail = ({
  description1,
  description2,
  description3,
  solutionLists,
  headingImg,
  result1,
  result2
}) => {
  return (
    <section>
      <div className="pb-24 pt-4 max-w-full mx-auto 2xl:max-w-7xl px-4 md:px-5 flex flex-col md:flex-row gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[70%]">
          <div>
            <img
              src={headingImg}
              alt="img"
              className="w-full h-[400px] object-cover rounded-lg"
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
                  src={result1}
                  alt="product"
                  className="rounded-xl h-[250px] object-cover w-full"
                />
                <img
                  src={result2}
                  alt="product"
                  className="rounded-xl h-[250px] object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        {/* <div className="md:w-[25%] w-full">
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
        </div> */}

        <div className="lg:w-[30%] flex flex-col gap-8">
          {/* More Services */}
          <div className="bg-[#F2F5FB] py-8 px-5 rounded-xl">
            <h4 className="text-xl font-semibold mb-5">More Products</h4>

            {service.map((item) => (
              <NavLink key={item.name} to={item.href}>
                {({ isActive }) => (
                  <div
                    className={`p-4 rounded-lg flex justify-between items-center  mb-2 transition font-semibold group
                            ${isActive ? "bg-white" : "hover:bg-white border-b-[1px] border-yellow-50"}`}
                  >
                    {item.name}

                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full border group-hover:bg-[#F9C31F] ${isActive ? "bg-[#F9C31F]" : ""}`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Contact Card */}
          <div className="bg-[#0B2B3F] p-8 rounded-xl text-white">
            <h4 className="font-bold mb-3">How Can We Help</h4>

            <p className="text-gray-400 mb-6">
              If you need any help, please contact us.
            </p>

            <div className="space-y-5">
              <div className="flex gap-3 items-center">
                <span className="w-14 h-14 flex justify-center items-center bg-[#FBE87E]  rounded-md">
                  <Phone size={22} color="black" />
                </span>
                <a
                  href="tel:+918939821722"
                  target="_blank"
                  className="hover:underline-offset-1 hover:decoration-white"
                >
                  +91 89398 21722
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <span className="w-14 h-14 flex justify-center items-center bg-[#FBE87E] rounded-md">
                  <Mail size={22} color="black" />
                </span>
                <a href="mailto:railmet2021@gmail.com" target="_blank">
                  railmet2021@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
