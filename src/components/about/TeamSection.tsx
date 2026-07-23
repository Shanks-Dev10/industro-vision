import team1 from "@/assets/teams/team1.webp";
import team2 from "@/assets/teams/team2.webp";
import team3 from "@/assets/teams/team3.webp";
import team4 from "@/assets/teams/team4.webp";
import WholeTeam from "@/assets/teams/whole-team.webp";
import { url } from "inspector";
import { Plus } from "lucide-react";

const members = [
  { name: " Ravi Kumar G", role: "CEO", img: team1 },
  { name: "Gomathi", role: "General Manager", img: team2 },
  { name: "Anitha", role: "Technical Director", img: team3 },
  { name: "Krithika G", role: "QC In-Charge and Production", img: team4 },
];

const TeamSection = () => {
  return (
    <section className="py-5 md:py-28 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* Top Labels */}
        <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
          <h3 className="text-[#009999] text-[16px] font-semibold uppercase">
            THE FACES BEHIND INDUSTRY
          </h3>

          <h4 className="text-[#009999] text-[16px] font-semibold uppercase animate-none md:animate-bounce">
            [ MEET OUR EXPERTS ]
          </h4>
        </div>

        {/* Title + Description */}
        <div className="flex flex-col justify-center items-center gap-4 py-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center">
            The Team
          </h2>

          <div className="flex gap-8">
            {/* <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#009999]"></span> */}

            <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl text-center">
              We integrate hands-on understanding with clever planning to ensure
              each challenge runs easily, remains on track, and grants exactly
              what you imagined
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Name */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{m.name}</h3>
                <p className="text-sm text-white">{m.role}</p>
              </div>

              {/* Plus Icon */}
              {/* <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div> */}
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center py-10 relative" >
          <h3 className="text-lg font-bold absolute  top-10 left-11 z-10 text-black">
            OurTeam
          </h3>
          <img
            src={WholeTeam}
            alt="wholeteam"
            className="lg:w-[80%] w-full h-[500px] bg-cover object-cover "
          />
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;
