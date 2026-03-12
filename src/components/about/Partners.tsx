import { Marquee } from "@/components/ui/marquee"


const Partners = () => {
  const partners = ["sandtex", "studio45", "srbitz", "cameo"];
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-full mx-auto px-6">

        {/* Top Labels */}
        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400 mb-6 border-b-[1px] p-5">
          <span>Trusted partners and satisfied clients</span>
          <span>[ What clients say ]</span>
        </div>

        {/* Title + Description */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          <h2 className="text-7xl font-extrabold flex items-end gap-3">
            Partners
            <span className="w-3 h-3 bg-[#FBE87E]"></span>
          </h2>

          <div className="flex gap-6 max-w-md">
            <span className="w-[5px] bg-[#FBE87E]"></span>

            <p className="text-lg text-gray-600 leading-relaxed">
              We exist to help our clients and partners build their dreams.
            </p>
          </div>

        </div>

        {/* Partner Logos */}
        <Marquee pauseOnHover repeat={4} className="flex-1 ">
        <div className="grid grid-cols-2 md:grid-cols-4">

          {partners.map((name) => (
            <div
              key={name}
              className="flex mx-2 items-center justify-center w-[220px] h-28 rounded-full border border-gray-200 bg-white text-xl font-bold text-gray-800 hover:shadow-md transition"
            >
              {name}
            </div>
          ))}

        </div>
        </Marquee>

      </div>
    </section>
  );
};

export default Partners;