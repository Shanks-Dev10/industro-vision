const steps = [
  {
    num: "01",
    title: "Consultation & inspection:",
    desc: "Expert railway weighing consultation and inspection, ensuring accuracy, safety, and reliability.",
  },
  {
    num: "02",
    title: "Customized Plan:",
    desc: "Based on inspection findings, we deliver customized plans with transparent pricing and defined project timelines, ensuring smooth execution and verified results",
  },
  {
    num: "03",
    title: "Installation:",
    desc: "Precision-driven installation ensuring seamless integration, Maximum productivity, and Sustained railway dependability",
  },
  {
    num: "04",
    title: "Execution:",
    desc: "An advanced security framework designed to safeguard industrial control systems and critical operations.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-28 bg-[#0E3347] text-white relative">
      {/* dotted background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative max-w-full 2xl:max-w-screen-xl mx-auto p-0 md:px-6">
        {/* Top header */}
        <div className=" mb-20  p-5">
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center py-5 border-b-[1px] border-[#e0e4eb]">
            <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">
              WE GET IT RIGHT THE FIRST TIME
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">
              [ how we work ]
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 pt-6">
            <div>
              <h2 className="text:3xl md:text:5xl lg:text-7xl font-semibold gap-1 ">
                Work process
                <span className="w-1 h-1 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-[#FBE87E] inline-block"></span>
              </h2>
            </div>
            <div className="flex flex-col justify-center max-w-lg mx-auto">
              <div className="border-l-4 border-transparent md:border-[#FBE87E] p-0 md:pl-6 mb-6 text-gray-200">
                We start with expertise in your operational demanding
                situations, infrastructure setup, and performance desires to
                design a clever railway automation technology solution that
                seamlessly into your surroundings.
              </div>

              <div className="md:px-5 px-0">
                <button className="flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full w-fit font-semibold">
                  View All Members
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FBE87E]">
                    →
                  </span>
                </button>
              </div>
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

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>

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
