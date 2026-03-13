import valueQualityImg from "@/assets/value-quality.jpg";
import valueTeamworkImg from "@/assets/value-teamwork.jpg";
import valueSustainabilityImg from "@/assets/value-sustainability.jpg";
import valueInnovationImg from "@/assets/value-innovation.jpg";

const values = [
  {
    num: "01.",
    title: "AI-Powered Insights",
    text: "Intelligent analysis of wagon load data to ensure balanced and accurate rail operations.",
    image: valueQualityImg,
  },
  {
    num: "02.",
    title: "Load Precision",
    text: "High-accuracy technology that measures wagon weight and detects load imbalance.",
    image: valueTeamworkImg,
  },
  {
    num: "03.",
    title: "Railway Safety",
    text: "Protecting rail infrastructure and operations through accurate load monitoring.",
    image: valueSustainabilityImg,
  },
  {
    num: "04.",
    title: "Future-Ready Innovation",
    text: "Innovating smart systems that shape the future of wagon load management.",
    image: valueInnovationImg,
  },
];

const CoreValues = () => {
  return (
    <section className="py-5 md:py-24 lg:py-24 bg-[#F2F5FB]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Top labels */}

        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
          <span>Fueling progress powering the future</span>
          <span>[ Why Choose Us ]</span>
        </div>

        {/* Title Row */}

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold flex items-end">
              What We Stand For
              <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
            </h2>

            <div className="flex gap-8">
              <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#FBE87E]"></span>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Balancing rails with brainy tech driven by innovation and precision, we build smarter solutions for safer rail operations.
              </p>
            </div>

          </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white rounded-md rounded-tl-[50px] p-8 border border-gray-200"
            >

              {/* Top row */}
              <div className="flex justify-between items-start mb-8">

                <span className="text-sm text-gray-400 font-semibold">
                  {val.num}
                </span>

                <img
                  src={val.image}
                  alt={val.title}
                  className="w-[250px] h-[150px] object-cover rounded-lg"
                />

              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                <h3 className="text-2xl font-bold">
                  {val.title}
                </h3>

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