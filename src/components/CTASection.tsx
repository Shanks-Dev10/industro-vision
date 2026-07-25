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
import { Link } from "react-router-dom";

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
      <div className="max-w-full 2xl:max-w-screen-xl mx-auto md:px-6 px-2">
        {/* CTA Container */}
        <div
          className="relative overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat h-full  p-4 py-20" 
          style={{
            backgroundImage: `url(${ctaBg})`,
          }}
        >
           <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2434]/90 via-[#0B2434]/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center md:px-6 px-2">
            <div className="max-w-4xl text-center text-white">

              <h2 className="text-2xl md:text-5xl  font-bold leading-tight">
                Moving Railway Load Monitoring
                <span className="block text-[#00D6D6]">
                  Forward with Smart Automation.
                </span>
              </h2>

              <p className="mt-3 text-base md:text-lg text-white/80 md:max-w-2xl mx-auto leading-8">
                Pushing the boundaries of railway technology and automation to
                build safer, smarter, and more efficient rail operations.
              </p>

              <Link to="/contact">
                <button className="group mt-5 inline-flex items-center gap-4 rounded-full bg-[#009999] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#00B3B3]">
                  Let's Talk
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-all group-hover:bg-white group-hover:text-[#009999]">
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
};

export default CTASection;
