import { ArrowRight, Users } from "lucide-react";
import TrackPhoto from "./TrackPhoto";
import aboutHeroImg from "@/assets/about-hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src={aboutHeroImg}
          alt="Industrial factory"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="relative h-full mx-auto flex max-w-7xl flex-col items-center justify-center  gap-10 px-5 py-4 md:flex-row md:items-center md:px-8 md:py-8">
        <div className="max-w-xl">
          <h1 className="font-display md:text-4xl font-bold leading-tight text-white text-2xl">
            Projects
            <br />
            <span className="text-brand-green">Successfully Delivered</span>,
            <br />
            Built for Safety.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">
            Explore our successfully completed projects across India. Each
            installation reflects our commitment to precision, reliability, and
            advancing railway safety.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors bg-green-700 hover:bg-brand-green-dark"
          >
            Talk to Our Experts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:ml-auto hidden md:flex">
          <div className="w-56 rounded-xl border border-white/15 bg-navy-900/60 p-6 text-center shadow-xl backdrop-blur-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-brand-green/40">
              <Users className="h-6 w-6 text-white" />
            </div>
            <p className="font-display text-3xl font-bold text-white">2+</p>
            <p className="mt-1 text-xs leading-snug text-gray-300">
              Projects Completed
              <br />
              Across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
