import aboutEngineerImg from "@/assets/about-engineer.jpg";
import { ArrowRight, MapPin, Users, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Calendar,
    label: "Years of Experience",
    value: "30",
    highlight: true,
  },
  { icon: MapPin, label: "Global Locations", value: "75", highlight: false },
  { icon: Users, label: "Total Employees", value: "1.2K", highlight: false },
  { icon: DollarSign, label: "Annual Revenue", value: "15B", highlight: false },
];

const AboutCompany = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          {/* Left - Image + Stats */}
          <div className="relative flex-1" data-aos="fade-right">
            <img
              src={aboutEngineerImg}
              alt="Engineer working with machinery"
              className="w-full rounded-3xl object-cover shadow-xl aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -right-4 grid grid-cols-2 gap-3 md:-right-12">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`rounded-2xl px-5 py-4 shadow-lg ${
                    stat.highlight
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-card-foreground"
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <stat.icon
                    className={`mb-1 h-5 w-5 ${stat.highlight ? "text-secondary-foreground" : "text-secondary"}`}
                  />
                  <p className="text-2xl font-extrabold">{stat.value}</p>
                  <p
                    className={`text-xs font-medium ${stat.highlight ? "text-secondary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 space-y-8 lg:pt-8" data-aos="fade-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
              About Us
            </span>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl leading-tight">
              Pushing the boundaries of technology and manufacturing to build a
              stronger, smarter tomorrow
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We combine innovative technology with deep industry expertise to
              deliver efficient and reliable engineering services that empower
              businesses worldwide.
            </p>
            <Button
              variant="gold"
              size="lg"
              className="rounded-full gap-2 px-8"
            >
              Request A Quote <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany