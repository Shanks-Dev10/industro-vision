const steps = [
  {
    num: "01",
    title: "Consultation & Inspection",
    desc: "Our mission is to empower clients by providing reliable, innovative, and cost-effective engineering services.",
  },
  {
    num: "02",
    title: "Customized Plan",
    desc: "Based on the inspection, we provide a tailored plan with clear pricing and timelines.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "A security framework tailored for smooth operations and project success.",
  },
  {
    num: "04",
    title: "Final Check & Support",
    desc: "We ensure everything meets our high standards before project delivery.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-28 bg-[#0E3347] text-white relative">

      {/* dotted background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative max-w-full mx-auto px-6">

        {/* Top header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 border-b-[1px] p-5">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">
              WE GET IT RIGHT THE FIRST TIME
            </p>

            <h2 className="text-7xl font-extrabold gap-1">
              Work process
              <span className="w-2 h-2 bg-[#FBE87E] inline-block"></span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border-l-4 border-[#FBE87E] pl-6 mb-6 text-gray-200">
              We start by understanding your needs and conducting a
              comprehensive solutions to assess.
            </div>

            <div className="px-5">
              <button className="flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full w-fit font-semibold">
                View All Members
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FBE87E]">
                  →
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {steps.map((step) => (
            <div key={step.num}>

              {/* number box */}
              <div className="relative mb-6">

                <div className="flex justify-center items-end w-28 h-28 bg-[#FBE87E] rounded-md rounded-tr-[30px]">

                  <span className=" text-6xl font-extrabold text-black">
                    {step.num}
                  </span>
                </div>

              </div>

              <h3 className="text-lg font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkProcess;