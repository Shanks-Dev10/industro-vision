import weldingImg from "@/assets/h2_img-1.webp";
import { ArrowRight, ShieldCheck, Cpu, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "Precision",
    desc: "Engineered",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "& Robust",
  },
  {
    icon: Cpu,
    title: "Smart",
    desc: "Automation",
  },
  {
    icon: BarChart3,
    title: "Future",
    desc: "Ready",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Shape */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-100 blur-[130px] opacity-30"></div>

      <div className="max-w-7xl mx-auto md:px-6 px-4">
        {/* Top */}
        <div className="flex justify-between items-center border-b pb-7">
          <span className="uppercase text-[#009999] font-semibold tracking-wider">
            Built to Power Railway Progress.
          </span>

          <span className="uppercase text-[#009999] font-semibold animate-none md:animate-bounce">
            [ Our Story ]
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 mt-10 mb-16">
          Who we are
        </h2>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-bold leading-tight text-slate-900">
              Transforming Rail Operations with{" "}
              <span className="text-[#009999]">
                Advanced Weighing Technology.
              </span>
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              We deliver intelligent railway weighing systems that improve
              operational efficiency, safety, automation and data-driven
              decision making.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-6 mt-10">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border p-4 hover:shadow-xl transition"
                >
                  <item.icon className="text-[#009999]" size={28} />

                  <div>
                    <h5 className="font-semibold">{item.title}</h5>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-5 mt-10">
              <Link to="/about">
                <button className="group flex items-center gap-4 rounded-full bg-[#009999] px-7 py-4 font-semibold text-white transition hover:bg-[#007f7f]">
                  Explore Now
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition group-hover:bg-white group-hover:text-[#009999]">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* CENTER IMAGE */}

          <div className="relative lg:col-span-6">

            <div className="rounded-[40px] bg-[#0E2438] p-6 md:p-10 text-white shadow-2xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/20 p-4">
                  <Cpu className="text-cyan-400" />
                </div>

                <span className="text-[#26D0CE] font-semibold">
                  Technology-Oriented
                </span>
              </div>

              <h3 className="text-4xl font-bold leading-tight">
                Driving the Future of Industrial Automation
              </h3>

              <div className="my-8 h-px bg-white/20"></div>

              {/* <p className="text-white/70 leading-8">
                We combine intelligent automation, precision engineering and
                industry expertise to create advanced railway weighing
                technologies trusted worldwide.
              </p> */}

              <div className="space-y-6 mt-10">
                <div>
                  <h5 className="font-semibold text-lg">Global Standards</h5>

                  <p className="text-white/60">
                    International quality compliance and proven reliability.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg">
                    AI-powered Monitoring
                  </h5>

                  <p className="text-white/60">
                    Real-time analytics for better operational decisions.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg">End-to-End Support</h5>

                  <p className="text-white/60">
                    Consultation, installation and lifetime maintenance.
                  </p>
                </div>
              </div>

              <Link to="/our-project">
                <button className="group mt-10 flex items-center gap-4 rounded-full border border-cyan-500 px-6 py-4 font-semibold transition hover:bg-[#009999]">
                  View Projects
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition ">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
