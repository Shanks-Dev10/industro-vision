import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-engineer.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-primary dot-pattern overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:pt-40">
        {/* Left */}
        <div className="flex-1 space-y-8">
          <span className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            Excellence in Every Aspect
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            Innovative metal solutions for{" "}
            <span className="text-secondary">industries</span>
          </h1>
          <Button variant="gold" size="lg" className="rounded-full gap-2 text-base px-8 py-6">
            Our Services <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Right */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-secondary/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Female industrial engineer with tablet in factory"
              className="relative z-10 w-full max-w-lg rounded-3xl object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
