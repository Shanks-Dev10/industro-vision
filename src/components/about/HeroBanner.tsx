import aboutHeroImg from "@/assets/about-hero.jpg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative h-[420px] overflow-hidden">
        <img
          src={aboutHeroImg}
          alt="Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-2">
          <div data-aos="fade-up">
            <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">
              About Us
            </h1>
            <div className="my-4 flex items-center gap-2 text-sm text-primary-foreground/60">
              <Link to={"/"}>Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-secondary">About Us</span>
            </div>
          </div>
        </div>
      </section>
  );
};
export default HeroBanner;
