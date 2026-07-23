import valueQualityImg from "@/assets/value-quality.jpg";
import valueTeamworkImg from "@/assets/value-teamwork.jpg";
import valueSustainabilityImg from "@/assets/value-sustainability.jpg";
import valueInnovationImg from "@/assets/value-innovation.jpg";

const values = [
  {
    num: "01.",
    title: "Railway Safety",
    text: "Protecting rail infrastructure and operations through accurate load monitoring.",
    image: valueQualityImg,
  },
  {
    num: "02.",
    title: "Smart load measurement",
    text: " Smart analysis of wagon load data to ensure accurate measurements and balanced rail operations.",
    image: valueTeamworkImg,
  },
  {
    num: "03.",
    title: "Load Precision",
    text: " Advanced weighing technology designed for precise wagon load measurement and imbalance detection.",
    image: valueSustainabilityImg,
  },
  {
    num: "04.",
    title: "Future-Ready Innovation",
    text: " Building intelligent railway solutions that enhance the future of wagon load monitoring and management.",
    image: valueInnovationImg,
  },
];

const CoreValues = () => {
  return (
    <section className="py-5 md:py-24 lg:py-24 bg-[#F2F5FB]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* Top labels */}

        <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
          <h3 className="text-[#009999] text-[16px] font-semibold uppercase">
            Fueling progress powering the future
          </h3>

          <h4 className="text-[#009999] text-[16px] font-semibold uppercase animate-none md:animate-bounce">
            [ Why Choose Us ]
          </h4>
        </div>

        {/* Title Row */}

        <div className="flex flex-col justify-center items-center gap-4 py-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center">
            What We Stand For
          </h2>

          <div className="flex gap-8">
            {/* <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#009999]"></span> */}

            <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl text-center">
              Balancing rails with intelligent technology, we drive innovation
              and precision to deliver smarter solutions for safer and more
              efficient rail operations.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200"
            >
              {/* Top row */}
              <div className="flex  items-start mb-8 gap-3 md:gap-28">
                {/* <span className="text-sm text-gray-400 font-semibold">
                  {val.num}
                </span> */}

                <img
                  src={val.image}
                  alt={val.title}
                  className="w-[300px] h-[150px] object-cover rounded-lg"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <h3 className="text-2xl font-bold">{val.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {val.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
