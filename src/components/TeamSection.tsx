import team1 from "@/assets/team-1.webp";
import team2 from "@/assets/team-2.webp";
import team3 from "@/assets/team-3.webp";
import team4 from "@/assets/team-4.webp";
import team5 from "@/assets/team-5.webp";
import { Plus } from "lucide-react";

const members = [
  { name: "Leslie Alexander", role: "Operations Manager", img: team1 },
  { name: "Robert Fox", role: "Construction Manager", img: team2 },
  { name: "Marvin Jones", role: "Executive Admin", img: team3 },
  { name: "Ralph Edwards", role: "Business Development", img: team4 },
  { name: "Guy Hawkins", role: "Chief Marketing", img: team5 },
];

const TeamSection = () => {
  return (
    <section className="py-5 md:py-28 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Top Labels */}
        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400 mb-6 border-b-[1px] pb-8">
          <span>THE FACES BEHIND INDUSTRY</span>
          <span>[ MEET OUR EXPERTS ]</span>
        </div>

        {/* Title + Description */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16  p-5">

          <h2 className="text-2xl md:text-5xl lg:text-7xl font-semibold flex items-end gap-3">
            The team
            <span className="w-2 h-2 md:w-3  lg:w-3  bg-[#FBE87E]"></span>
          </h2>

          <div className="flex gap-6">
            <span className="w-[4px] bg-[#FBE87E]"></span>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              We integrate hands-on understanding with clever planning to ensure each challenge runs easily, remains on track, and grants exactly what you imagined
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
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Name */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{m.name}</h3>
                <p className="text-sm text-[#FBE87E]">{m.role}</p>
              </div>

              {/* Plus Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamSection;