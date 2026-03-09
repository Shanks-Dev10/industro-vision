import { ArrowRight } from "lucide-react";
import projectWind from "@/assets/project-wind.jpg";
import projectAero from "@/assets/project-aerospace.jpg";

const projects = [
  {
    num: "01",
    title: "Revolutionizing renewable energy",
    category: "Renewable Energy",
    year: "2024",
    image: projectWind,
  },
  {
    num: "02",
    title: "Aerospace structural solutions",
    category: "Aerospace",
    year: "2023",
    image: projectAero,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Projects</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">Projects</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Our work blends innovation with practical engineering solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.num} className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer">
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                    {p.category}
                  </span>
                  <span className="text-xs text-primary-foreground/60">{p.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Project {p.num}
                </h3>
                <p className="mt-1 text-primary-foreground/80">{p.title}</p>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform group-hover:scale-110">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
