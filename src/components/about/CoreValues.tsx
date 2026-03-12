import valueQualityImg from "@/assets/value-quality.jpg";
import valueTeamworkImg from "@/assets/value-teamwork.jpg";
import valueSustainabilityImg from "@/assets/value-sustainability.jpg";
import valueInnovationImg from "@/assets/value-innovation.jpg";

const values = [
  {
    num: "01.",
    title: "Quality",
    text: "Product quality is the cornerstone of our commitment, ensuring that every item meets rigorous standards.",
    image: valueQualityImg,
  },
  {
    num: "02.",
    title: "Teamwork",
    text: "Teamwork is the foundation of our success, where collaboration and synergy drive innovation and productivity.",
    image: valueTeamworkImg,
  },
  {
    num: "03.",
    title: "Sustainability",
    text: "Sustainability is at the core of our operations, guiding our commitment to minimize environmental impact.",
    image: valueSustainabilityImg,
  },
  {
    num: "04.",
    title: "Innovation",
    text: "Innovation drives our company forward, leading to the development of cutting-edge solutions.",
    image: valueInnovationImg,
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-[#F2F5FB]">
      <div className="max-w-full mx-auto px-6">

        {/* Top labels */}
        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400 mb-6 border-b-[1px] p-5">
          <span>Fueling progress powering the future</span>
          <span>[ Why Choose Us ]</span>
        </div>

        {/* Title Row */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          <h2 className="text-7xl font-extrabold flex items-end gap-3">
            Core values
            <span className="w-3 h-3 bg-[#FBE87E]"></span>
          </h2>

          <div className="flex gap-6 max-w-md">
            <span className="w-[7px] bg-[#FBE87E]"></span>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a passion and a commitment to quality, we have been
              empowering industries and driving progress.
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
              <div className="grid grid-cols-2 gap-6">

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