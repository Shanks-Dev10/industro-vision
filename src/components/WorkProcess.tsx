import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation & inspection:",
    desc: "Expert railway weighing consultation and inspection, ensuring accuracy, safety, and reliability.",
  },
  {
    num: "02",
    title: "Customized Plan:",
    desc: "Based on inspection findings, we deliver customized plans with transparent pricing and defined project timelines and verified results",
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

      <div className="relative max-w-full 2xl:max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Top header */}
        <div className="flex flex-col mb-20">
          <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b-[1px] pb-8">
            <span>WE GET IT RIGHT THE FIRST TIME</span>
            <span>[ how we work ]</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
              Work process
              <span className="w-2 h-2 bg-[#FBE87E] rounded-full"></span>
            </h2>

            <div className="flex flex-col gap-8">
             <div className="flex gap-8">
               <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#FBE87E]"></span>

              <p className="text-white-600 text-lg leading-relaxed max-w-md">
                We start with expertise in your operational demanding
                situations, infrastructure setup, and performance desires to
                design a clever railway automation technology solution that
                seamlessly into your surroundings.
              </p>
             </div>
              <div className="flex md:items-center pl-0 md:pl-8">
                <button className="flex items-center justify-end w-fit gap-3 bg-[#FFFF] text-black px-3 md:px-6 lg:px-6 py-3 rounded-full font-semibold hover:bg-[#FBE87E]">
                  View All Members
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FBE87E] text-black">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 items-center md:grid-cols-2  lg:grid-cols-4 gap-16 lg:gap-6 xl:gap-16">
          {steps.map((step) => (
            <div key={step.num} className=" px-2">
              {/* number box */}
              <div className="relative mb-6">
                <div className="flex justify-center items-end w-28 h-28 bg-[#FBE87E] rounded-md rounded-tr-[30px]">
                  <span className=" text-6xl font-extrabold text-black">
                    {step.num}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>

              <p className="text-sm text-gray-300 leading-relaxed text-start">
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
