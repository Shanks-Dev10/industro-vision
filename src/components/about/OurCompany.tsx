import { Check } from "lucide-react";

const values = [
  {
    num: "01.",
    title: "Company Profile",
    text1:
      "Railmet Technology is a company that specializes in providing precise and advanced railway weighing and load monitoring solutions. With a strong focus on providing precise solutions, Railmet is revolutionizing the field of modern rail operations with regard to accuracy in load management and operations. Railmet provides specialized solutions such as the Asymmetric Asymmetric Load Measuring System (ALMS), Overload Control System (OCLS), and Portable Weighing System, among others, to provide better insights and efficient rail operations. These solutions are designed to provide real-time insights, identify any imbalance in the distribution of loads, and provide safe and efficient railway services.",
    text2:
      "Railmet Technology’s products are designed to be strong, durable, and user-friendly. Railmet Technology’s products are designed to withstand harsh conditions, such as high loads, vibrations, and harsh weather conditions.",
  },
  {
    num: "02.",
    title1: "Vision",
    text1:
      "To enable precision and safety in railway operations through intelligent weighing solutions.",
    title2: "Mission",
    mission: [
      "To make railway operations faster and safer.",
      "To enhance efficiency through intelligent load monitoring.",
      "To deliver reliable, zero-defect solutions.",
    ],
    icon: <Check size={18} />,
  },

  {
    num: "03.",
    title: "Values",
    valuetext: [
      "Precision in Every Rail Measurement",
      "Reliability in Every Operation",
      "Safety at Every Movement",
      "Customer-Centric Engineering",
      "Innovation for Modern Railways",
    ],
    icon: <Check size={18} />,
  },
];

const OurCompany = () => {
  return (
    <section className="py-5 md:py-24 lg:py-24 bg-[#FFFF]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* Top labels */}

        <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
          <h3 className="text-[#009999] text-[16px] font-semibold uppercase">
            Fueling progress powering the future
          </h3>

          <h4 className="text-[#009999] text-[16px] font-semibold uppercase animate-none md:animate-bounce">
            [ Our Company ]
          </h4>
        </div>

        {/* Title Row */}

        <div className="py-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold  text-center">
            Our Company
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-[#009999] rounded-xl  p-8 border border-gray-200">
              {/* Content */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-white">
                  {values[0].title}
                </h3>

                <p className="text-sm text-white leading-relaxed text-justify">
                  {values[0].text1}
                </p>
                <p className="text-sm text-white leading-relaxed text-justify">
                  {values[0].text2}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-md rounded-tl-[50px] p-8 border border-[#009999]">
              {/* Content */}
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold">{values[1].title1}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {values[1].text1}
                  </p>
                </div>
                <div className="py-2">
                  <h3 className="text-xl font-bold">{values[1].title2}</h3>
                  {values[1].mission.map((mission, index) => (
                    <div key={index} className="flex items-start gap-3 py-1">
                      <span className="mt-1 text-green-600">
                        {values[1].icon}
                      </span>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md rounded-tl-[50px] p-8 border border-[#009999]">
              {/* Content */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-bold">{values[2].title}</h3>

                <div className="text-sm text-gray-600 leading-relaxed">
                  {values[2].valuetext.map((valuetext, index) => (
                    <div key={index} className="flex items-start gap-3 py-1">
                      <span className="mt-1 text-green-600">
                        {values[2].icon}
                      </span>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {valuetext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
