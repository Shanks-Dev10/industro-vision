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
import IR from "@/assets/partners/Indian_Railways 2.webp";
import NCL from "@/assets/partners/ncl-logo.webp";

const partners = [IndianRailway, IR, NCL];

// const partnersLoop = [...partners, ...partners];

const OurPartners = () => {
  return (
    <section className="py-10 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* Top Labels */}
         <div className="flex flex-col  mb-10 ">
          <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-7">
            <h3 className="text-[#009999] text-[16px] font-semibold uppercase">
             THE FACES BEHIND INDUSTRY
            </h3>

            <h4 className="text-[#009999] text-[16px] font-semibold uppercase animate-none md:animate-bounce">
              [ MEET OUR EXPERTS ]
            </h4>
          </div>
        </div>

        {/* Title + Description */}
        <div className="flex flex-col gap-3 justify-center items-center  mb-16 pb-5 pt-2">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold flex items-end">
            Our Partners
          </h2>

          <div className="flex gap-8">

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center]">
              We integrate hands-on understanding with clever planning to ensure
              each challenge runs easily, remains on track, and grants exactly
              what you imagined.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        {/* <Marquee pauseOnHover className="md:[--duration:50s] [--duration:20s]">
          {partnersLoop.map((logo, index) => (
            <div
              key={index}
              className="flex mx-4 items-center justify-center md:w-[220px] w-[200px] h-28 rounded-2xl border bg-white hover:shadow-md transition"
            >
              <img
                src={logo}
                alt="partner logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </Marquee> */}

        <div className="flex md:flex-row flex-col items-center justify-center gap-4">
           {partners.map((logo, index) => (
            <div
              key={index}
              className="flex mx-4 items-center justify-center w-[220px]  h-28 rounded-2xl border bg-white hover:shadow-md transition"
            >
              <img
                src={logo}
                alt="partner logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
