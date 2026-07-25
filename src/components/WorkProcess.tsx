import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Site Review & Track Inspection",
    desc: " We evaluate railway track conditions, infrastructure setup, and operational requirements for accurate installation planning.",
  },
  {
    num: "02",
    title: "Sensor Installation & System Integration",
    desc: "Sensors are securely installed and aligned on the railway track to ensure accurate load measurement .",
  },
  {
    num: "03",
    title: "Calibration & Accuracy Testing",
    desc: "Each sensor is calibrated and tested to ensure precise load measurement, stable operation, and reliable performance.",
  },
  {
    num: "04",
    title: "Final Validation & Commissioning",
    desc: " The complete system undergoes final inspections and performance validation before successful deployment.",
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
          <div className="flex flex-col  mb-10 ">
            <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
              <h3 className="text-[#fff] text-[16px] font-semibold uppercase">
                WE GET IT RIGHT THE FIRST TIME
              </h3>

              <h4 className="text-[#fff] text-[16px] font-semibold uppercase animate-none md:animate-bounce">
                [ how we work ]
              </h4>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center mb-16  pb-5 pt-2">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
              Work process
            </h2>

            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-8">

                <p className="text-white-600 text-lg leading-relaxed text-center">
                  Our installation process begins with a comprehensive site
                  review and track inspection to evaluate operational and
                  infrastructure requirements. Sensors are precisely installed
                  on the railway track and seamlessly integrated with existing
                  monitoring systems. The complete setup then undergoes detailed
                  calibration and performance testing to ensure accurate
                  measurements, reliable operation, and enhanced railway safety.
                </p>
              </div>
              <div className="flex md:items-center pl-0 md:pl-8">
                <Link to={"/"}>
                  <button className="flex items-center justify-end w-fit gap-3 bg-[#FFFF] text-black px-3 md:px-6 lg:px-6 py-3 rounded-full font-semibold hover:bg-[#009999] hover:text-[#fff]">
                    View All Members
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border">
                      <ArrowRight size={16} className="hover:text-[#fff]" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2  lg:grid-cols-4 gap-16 lg:gap-6 xl:gap-16">
          {steps.map((step) => (
            <div key={step.num} className=" px-2">
              {/* number box */}
              <div className=" mb-6">
                <div className="flex justify-center items-end pb-2 w-28 h-28 bg-[#009999] rounded-md rounded-tr-[30px]">
                  <span className=" text-6xl font-extrabold text-[#fff]">
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
