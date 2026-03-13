import { Marquee } from "@/components/ui/marquee";
import AdithyaBirla from "@/assets/partners/adithyabirla.webp";
import Ambuja from "@/assets/partners/ambuja.webp";
import CaterPiller from "@/assets/partners/caterpiller.webp";
import Dalmia from "@/assets/partners/dalmia.webp";
import Hitachi from "@/assets/partners/hitachi.webp";
import IndianRailway from "@/assets/partners/indianrailway.webp";
import Jcb from "@/assets/partners/jcb.webp";
import Jsw from "@/assets/partners/jsw.webp";
import TataSteel from "@/assets/partners/tatasteel.webp";
import UltraTech from "@/assets/partners/ultratech.webp";
import Volvo from "@/assets/partners/volvo.webp";

const partners = [
  AdithyaBirla,
  Ambuja,
  CaterPiller,
  Dalmia,
  Hitachi,
  IndianRailway,
  Jcb,
  Jsw,
  TataSteel,
  UltraTech,
  Volvo,
];

const partnersLoop = [...partners, ...partners];

const OurPartners = () => {
  return (
    <section className="py-10 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">

        {/* Top Labels */}
        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400 mb-8 border-b pb-8">
          <span>THE FACES BEHIND INDUSTRY</span>
          <span>[ MEET OUR EXPERTS ]</span>
        </div>

        {/* Title + Description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 pb-5 pt-2">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
            Our Partners
            <span className="w-2 h-2 bg-[#FBE87E] rounded-full ml-2"></span>
          </h2>

          <div className="flex gap-8">
            <span className="hidden md:block w-[4px] bg-[#FBE87E]"></span>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              We integrate hands-on understanding with clever planning to ensure
              each challenge runs easily, remains on track, and grants exactly
              what you imagined.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <Marquee pauseOnHover className="md:[--duration:50s] [--duration:20s]">
          {partnersLoop.map((logo, index) => (
            <div
              key={index}
              className="flex mx-4 items-center justify-center md:w-[220px] w-[200px] h-28 rounded-2xl border bg-white hover:shadow-md transition"
            >
              <img
                src={logo}
                alt="partner logo"
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default OurPartners;