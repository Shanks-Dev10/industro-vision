import serviceImg from "@/assets/service_6.jpg";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";
import { ArrowRight, Building, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const ServiceDetails = () => {
  const services = [
    {
      serviceName: "Metal Engineering",
      link: "/service/asymmetric-load-measuring-system",
    },
    {
      serviceName: "Metal Engineering",
      link: "/",
    },
    {
      serviceName: "Metal Engineering",
      link: "/",
    },
    {
      serviceName: "Metal Engineering",
      link: "/",
    },
    {
      serviceName: "Metal Engineering",
      link: "/",
    },
  ];

  return (
    <section className="xl:max-w-7xl max-w-full px-4 md:px-8 mx-auto">
      <div>
        <img
          src={serviceImg}
          alt="serviceImg"
          className="w-full h-full rounded-xl "
        />
      </div>

      <div className="flex lg:flex-row flex-col gap-10 py-10 ">
        {/* Left Content */}
        <div className="lg:w-[70%] w-full">
          <div>
            <h4 className="text-[34px] text-black font-semibold mb-[15px]">
              Service description
            </h4>
            <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              sed officia mollitia eaque quas commodi aliquam magnam nesciunt
              aliquid ex id natus recusandae soluta velit distinctio ratione
              cupiditate illo quo.
            </p>
            <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              sed officia mollitia eaque quas commodi aliquam magnam nesciunt
              aliquid ex id natus recusandae soluta velit distinctio ratione
              cupiditate illo quo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 border-b-[1px] border-[#DCE0E3]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Building />
                <p className="text-[24px] font-bold text-black">
                  Quality & Reliable
                </p>
              </div>
              <div>
                <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
                  Smart design galvanizes people to think, interact, and succeed
                  for work, play and life.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Building />
                <p className="text-[24px] font-bold text-black">
                  Quality & Reliable
                </p>
              </div>
              <div>
                <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
                  Smart design galvanizes people to think, interact, and succeed
                  for work, play and life.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Building />
                <p className="text-[24px] font-bold text-black">
                  Quality & Reliable
                </p>
              </div>
              <div>
                <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
                  Smart design galvanizes people to think, interact, and succeed
                  for work, play and life.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Building />
                <p className="text-[24px] font-bold text-black">
                  Quality & Reliable
                </p>
              </div>
              <div>
                <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
                  Smart design galvanizes people to think, interact, and succeed
                  for work, play and life.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[34px] text-black font-semibold mb-[15px]">
              What’s included
            </h4>
            <p className="text-[#555555] text-[16px] leading-6 mb-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              sed officia mollitia eaque quas commodi aliquam magnam nesciunt
              aliquid ex id natus recusandae soluta velit distinctio ratione
              cupiditate illo quo.
            </p>
            <ul>
              <li className="text-[#555555] text-[16px]  my-4">
                <span className="text-black font-medium pr-3">✔</span>
                <span className="text-black font-bold">
                  In-Depth Consultations
                </span>
                to understand your project goals, lifestyle, and preferences.
              </li>
              <li className="text-[#555555] text-[16px] my-4">
                <span className="text-black font-medium pr-3">✔</span>
                <span className="text-black font-bold">
                  In-Depth Consultations
                </span>
                to understand your project goals, lifestyle, and preferences.
              </li>
              <li className="text-[#555555] text-[16px] my-4">
                <span className="text-black font-medium pr-3">✔</span>
                <span className="text-black font-bold">
                  In-Depth Consultations
                </span>
                to understand your project goals, lifestyle, and preferences.
              </li>
              <li className="text-[#555555] text-[16px] my-4">
                <span className="text-black font-medium pr-3">✔</span>
                <span className="text-black font-bold">
                  In-Depth Consultations
                </span>
                to understand your project goals, lifestyle, and preferences.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            <img
              src={product1}
              alt="product1"
              className="w-full xl:h-[300px] h-[250px] rounded-xl "
            />
            <img
              src={product2}
              alt="product2"
              className="w-full xl:h-[300px] h-[250px] rounded-xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-[30%] w-full self-start flex flex-col gap-8">
          <div className="xl:px-[40px] xl:py-[50px] p-[20px] bg-[#F2F5FB] rounded-xl ">
            <h4 className="text-[24px] text-black font-semibold mb-[15px]">
              More Services
            </h4>
            {services.map((s) => (
              <NavLink key={s.serviceName} to={s.link}>
                {({ isActive }) => (
                  <div
                    className={`p-[20px] rounded-lg group hover:bg-white ${
                      isActive
                        ? "bg-white border-transparent"
                        : " bg-transparent border-b-[1px]"
                    }`}
                  >
                    <div className="flex justify-between items-center text-[16px] font-bold">
                      {s.serviceName}

                      <span
                        className={`w-[30px] h-[30px] flex justify-center items-center rounded-full group-hover:bg-yellow-400 group-hover:border-transparent transition transform duration-300 ${
                          isActive
                            ? "bg-yellow-400 text-black"
                            : "bg-transparent border border-[#DCE0E3]"
                        }`}
                      >
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <div className="xl:px-[40px] xl:py-[50px] p-[20px] rounded-xl bg-[#0B2B3F] ">
            <div className="border-b-[1px] border-[#8C8C8C]">
              <h3 className="flex justify-between items-center text-[16px] font-bold text-white mb-[20px]">
                How Can We Help
              </h3>
              <p className="mb-[20px] text-[#8C8C8C]">
                If you need any helps, please feel free to contact us.
              </p>
            </div>
            <div className="pt-[20px]">
              <div className="flex gap-3 py-5">
                <div className="w-14 h-14 flex justify-center items-center bg-[#FBE87E] rounded-md">
                  <Phone size={26} />
                </div>
                <div >
                  <p className="text-[#8C8C8C] text-[14px] uppercase font-bold">
                    Call Us
                  </p>
                  <p className="text-[18px] font-semibold text-white pt-1">(180) - 800 668 75</p>
                </div>
              </div>
              <div className="flex gap-3 py-5">
                <div className="w-14 h-14 flex justify-center items-center bg-[#FBE87E] rounded-md">
                  <Mail size={26} />
                </div>
                <div >
                  <p className="text-[#8C8C8C] text-[14px] uppercase font-bold">
                    Email
                  </p>
                  <p className="text-[18px] font-semibold text-white pt-1">support@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceDetails;
