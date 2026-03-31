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
        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-800 mb-8 border-b-[1px] pb-8">
          <span>THE FACES BEHIND INDUSTRY</span>
          <span>[ MEET OUR EXPERTS ]</span>
        </div>

        {/* Title + Description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16  pb-5 pt-2">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
            The team
            <span className="w-2 h-2 bg-[#009999] rounded-full"></span>
          </h2>

          <div className="flex gap-8">
            <span className="hidden md:flex w-[10px] xl:w-[4px] bg-[#009999]"></span>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
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
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
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
