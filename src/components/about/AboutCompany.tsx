import aboutEngineerImg from "@/assets/about-engineer.jpg";
import { ArrowRight, MapPin, Users, DollarSign, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    title: "Wagon Balance Detection",
    value: "100%",
    desc: "AI-Powered Load Detection",
    bg: "bg-[#FBE87E]",
    text: "text-black",
  },
  {
    icon: MapPin,
    title: "Global Presence",
    value: "Worldwide",
    desc: "Rail technology across borders.",
    bg: "bg-white",
    text: "text-black",
  },
  {
    icon: Users,
    title: "Railmet Team",
    value: "Growing Strong",
    desc: "A committed team shaping the future of wagon load technology.",
    bg: "bg-white",
    text: "text-black",
  },
  {
    icon: DollarSign,
    title: "Annual Growth",
    value: "Scaling",
    desc: "Focused on expanding smart rail load technology solutions.",
    bg: "bg-[#0F2F45]",
    text: "text-white",
  },
];

const AboutCompany = () => {
  return (
    <section className="py-24 bg-[#FFFF]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          <div className="rounded-md rounded-tr-[100px] overflow-hidden mb-8">
            <img
              src={aboutEngineerImg}
              alt="Engineer"
              className="w-full h-[380px] object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold leading-tight mb-6">
            Pushing the boundaries of technology and manufacturing to build a
            stronger, smarter tomorrow
          </h2>

          <button className="flex items-center gap-3 bg-[#FBE87E] px-6 py-3 rounded-full font-semibold">
            Request A Quote
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
              <ArrowRight size={16} />
            </span>
          </button>

        </div>

        {/* RIGHT SIDE STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} ${stat.text} rounded-md rounded-tr-[90px] p-6 border border-gray-200 h-[320px] flex flex-col justify-between`}
            >

              <p className="text-[20px] font-extrabold">
                {stat.title}
              </p>

              <div className="flex items-center justify-between">
                <stat.icon className="w-7 h-7 opacity-80" />
                <span className="text-[25px] font-extrabold">
                  {stat.value}
                </span>
              </div>

              <div className="border-t border-black/10 pt-3 text-sm opacity-80">
                {stat.desc}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutCompany;