import ctaBg from "@/assets/cta-background.webp";
import { ArrowRight } from "lucide-react";
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

const CTASection = () => {
  return (
    <section className="py-5 md:py-28 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto px-6">
        {/* CTA Container */}
        <div className="relative rounded-t-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src={ctaBg}
            alt="Industrial Plant"
            className="w-full h-[750px] md:h-[600px] xl:h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3347]/90 to-transparent"></div>

          {/* CTA Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 lg:px-20 text-white max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Moving your industry manufacturing forward
            </h2>

            <p className="text-sm md:text-lg lg:text-lg text-white/80 mb-10">
              Pushing the boundaries of technology and manufacturing to build a
              stronger, smarter tomorrow
            </p>

            {/* Button */}
            <button className="flex items-center gap-3 bg-[#FBE87E] text-black font-semibold px-6 py-3 rounded-full w-fit mb-20 hover:bg-[#0B2B3F] hover:text-white">
              Let’s Talk
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B2B3F] text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* Partner Strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-white backdrop-blur-sm  overflow-hidden">
            <div className="flex md:flex-row flex-col items-center  gap-2 md:gap-16 px-4 md:px-12">
              <span className="text-sm font-semibold uppercase tracking-widest md:text-start text-center text-black">
                Trusted partners and satisfied clients
              </span>

              <Marquee pauseOnHover className="md:[--duration:50s] [--duration:30s]  flex-1 ">
                {partnersLoop.map((logo, index) => (
                  <div
                    key={index}
                    className="flex  items-center justify-center md:w-[220px] w-[180px] h-28 rounded-2xl transition"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
