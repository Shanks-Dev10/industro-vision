import { ArrowRight } from "lucide-react";
import metalImg from "@/assets/metal-cutting.jpg";
import oilImg from "@/assets/oil-platform.jpg";
import greenImg from "@/assets/greenhouse.jpg";
import windImg from "@/assets/wind-turbines.jpg";

const services = [
  { title: "Metal Engineering", desc: "Precision metal fabrication and engineering for complex industrial applications.", image: metalImg },
  { title: "Oil & Gas Recovery", desc: "Advanced recovery and processing solutions for the petroleum industry.", image: oilImg },
  { title: "Agricultural Automation", desc: "Smart greenhouse and farming automation for higher yield and efficiency.", image: greenImg },
  { title: "Power & Energy", desc: "Sustainable energy solutions including wind, solar, and power grid infrastructure.", image: windImg },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">What We Offer</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Industry Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative h-[480px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-all duration-300 group-hover:from-primary/95" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-bold text-primary-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Find Out More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
