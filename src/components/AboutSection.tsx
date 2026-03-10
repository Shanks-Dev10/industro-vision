import { Button } from "@/components/ui/button";
import { Zap, Target, ArrowRight } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left - Image */}
        <div className="relative flex-1">
          <img
            src={factoryImg}
            alt="Industrial manufacturing factory"
            className="w-full rounded-3xl object-cover shadow-xl"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-primary px-6 py-4 shadow-lg">
            <p className="text-3xl font-extrabold text-secondary">30</p>
            <p className="text-sm font-medium text-primary-foreground">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 space-y-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            About Us
          </span>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Transforming Rail Operations with Advanced Weighing Technology
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore advanced solutions engineered for excellence in railway
            weighing and automation. We integrate intelligent generation with
            deep enterprise know-how to deliver precision without compromise
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Technology-Oriented
                </h3>
                <p className="text-sm text-muted-foreground">
                  Driving the Future of Industrial Automation Worldwide Setting
                  Global Standards in Industrial Automation
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Intelligent Railway Solutions for Operational Growth
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover Advanced weighing and automation solutions built for
                  demanding rail environments.
                </p>
              </div>
            </div>
          </div>

          <Button variant="gold" size="lg" className="rounded-full gap-2 px-8">
            Discover More <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
