import { Award } from "lucide-react";

const awards = [
  {
    year: "2019",
    title: "International Design Awards",
    desc: "Celebrates 15 years with a retrospective showcase of the company's most iconic projects and milestones.",
  },
  {
    year: "2021",
    title: "Excellence in Sustainability",
    desc: "Wins a prestigious national design award for an innovative mixed-use development project.",
  },
  {
    year: "2024",
    title: "Community Impact Award",
    desc: "Participates in a national expo, showcasing innovative concepts and gaining industry recognition.",
  },
];

const Awards = () => {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Top Labels */}

        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
          <span>Keeping good company</span>
          <span>[ Recognitions we got ]</span>
        </div>

        {/* Title Row */}

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
            Awards
            <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
          </h2>

          <div className="flex gap-8">
            <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#FBE87E]"></span>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              We are a developer invested in our customers’ success and
              improving the communities we serve.
            </p>
          </div>

        </div>

        {/* Award Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-[#EDEDED] rounded-md rounded-tl-[40px] p-8 border border-gray-200 relative"
            >

              {/* Top Row */}
              <div className="flex justify-between items-start mb-12">

                <span className="text-sm text-gray-500 font-semibold">
                  {award.year}
                </span>

                <Award className="w-10 h-10 text-gray-300" />

              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 mb-6"></div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">
                {award.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {award.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Awards;