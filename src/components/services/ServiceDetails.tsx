import { ArrowRight, Building, Mail, Phone, Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const ServiceDetails = ({
  serviceImage,
  serviceDescription,
  descriptionPoints,
  whatInclude,
  productimg1,
  productimg2,
}) => {
  const services = [
    {
      name: "Asymmetric Load Measuring System",
      link: "/service/asymmetric-load-measuring-system",
    },
    {
      name: "Overload Control System",
      link: "/service/over-load-control-system",
    },
    { name: "KIMAX2 AIR", link: "/" },
    { name: "Asymmetric Load Measuring System", link: "/" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Top Image */}
      <img src={serviceImage} alt="service" className="w-full rounded-xl" />

      <div className="flex flex-col lg:flex-row gap-10 py-10">
        {/* LEFT SIDE */}
        <div className="lg:w-[70%]">
          {/* Description */}
          <h4 className="md:text-[34px] text-[22px] font-semibold mb-4">
            Service Description
          </h4>

          <p className="text-[#555] leading-7 mb-10">{serviceDescription}</p>

          {/* Feature Points */}
          <div className="grid md:grid-cols-2 gap-10 border-b pb-8">
            {descriptionPoints.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Building />
                  <h5 className="md:text-xl font-bold  text-[18px]">
                    {item.heading}
                  </h5>
                </div>

                <p className="text-[#555]">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Included Section */}
          <div className="py-10">
            <h4 className="md:text-[34px ] text-[22px] font-semibold mb-4">
              What's Included
            </h4>

            <p className="text-[#555] mb-6">{whatInclude.description}</p>

            <ul className="space-y-3">
              {whatInclude.lists.map((item, index) => (
                <li key={index} className="flex items-start  gap-3 text-[#555]">
                  <Check className="w-10 h-10 md:w-5 md:h-5 lg:w-6 lg:h-6 md:mt-1 mt-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-5">
            <img
              src={productimg1}
              alt="product"
              className="rounded-xl h-[250px] object-cover w-full"
            />
            <img
              src={productimg2}
              alt="product"
              className="rounded-xl h-[250px] object-cover w-full"
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:w-[30%] flex flex-col gap-8">
          {/* More Services */}
          <div className="bg-[#F2F5FB] py-8 px-5 rounded-xl">
            <h4 className="text-xl font-semibold mb-5">More Services</h4>

            {services.map((service) => (
              <NavLink key={service.name} to={service.link}>
                {({ isActive }) => (
                  <div
                    className={`p-4 rounded-lg flex justify-between items-center  mb-2 transition font-semibold group
                    ${isActive ? "bg-white" : "hover:bg-white border-b-[1px] border-yellow-50"}`}
                  >
                    {service.name}

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
                  href="tel:+919003253007"
                  target="_blank"
                  className="hover:underline-offset-1 hover:decoration-white"
                >
                  +91 90032 53007
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <span className="w-14 h-14 flex justify-center items-center bg-[#FBE87E] rounded-md">
                  <Mail size={22} color="black" />
                </span>
                <span>support@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
