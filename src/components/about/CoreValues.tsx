import valueQualityImg from "@/assets/value-quality.jpg";
import valueTeamworkImg from "@/assets/value-teamwork.jpg";
import valueSustainabilityImg from "@/assets/value-sustainability.jpg";
import valueInnovationImg from "@/assets/value-innovation.jpg";
import { Lightbulb, Shield, Handshake, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality",
    image: valueQualityImg,
    text: "Product quality is the cornerstone of our commitment.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    image: valueTeamworkImg,
    text: "Collaboration and synergy drive innovation.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    image: valueSustainabilityImg,
    text: "We focus on minimizing environmental impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    image: valueInnovationImg,
    text: "We continuously develop cutting-edge industrial solutions.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-right">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Core Values
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              Fueling progress, shaping the future
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground" data-aos="fade-left">
            With a passion and a commitment to quality, we have been empowering
            industries and driving progress.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-md transition-shadow hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={val.image}
                  alt={val.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                  <val.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground">{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues