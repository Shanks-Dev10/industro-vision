import ctaBg from "@/assets/cta-background.webp";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* CTA Container */}
        <div className="relative rounded-2xl overflow-hidden">

          {/* Background Image */}
          <img
            src={ctaBg}
            alt="Industrial Plant"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3347]/90 to-transparent"></div>

          {/* CTA Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-12 lg:px-20 text-white max-w-2xl">

            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Moving your industry manufacturing forward
            </h2>

            <p className="text-lg text-white/80 mb-10">
              Pushing the boundaries of technology and manufacturing to build a
              stronger, smarter tomorrow
            </p>

            {/* Button */}
            <button className="flex items-center gap-3 bg-[#FBE87E] text-black font-semibold px-6 py-3 rounded-full w-fit mb-20">
              Let’s Talk
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                <ArrowRight size={16} />
              </span>
            </button>

          </div>

          {/* Partner Strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm py-6 overflow-hidden">

            <div className="flex items-center gap-16 whitespace-nowrap animate-marquee px-12">

              <span className="text-xs uppercase tracking-widest text-white/60">
                Trusted partners and satisfied clients
              </span>

              <span className="text-lg font-semibold text-white/80">:ex</span>
              <span className="text-lg font-semibold text-white/80">studio45</span>
              <span className="text-lg font-semibold text-white/80">SRBITZ</span>
              <span className="text-lg font-semibold text-white/80">cameo</span>
              <span className="text-lg font-semibold text-white/80">DYNATECH</span>

              {/* Duplicate for smooth loop */}
              <span className="text-lg font-semibold text-white/80">:ex</span>
              <span className="text-lg font-semibold text-white/80">studio45</span>
              <span className="text-lg font-semibold text-white/80">SRBITZ</span>
              <span className="text-lg font-semibold text-white/80">cameo</span>
              <span className="text-lg font-semibold text-white/80">DYNATECH</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;