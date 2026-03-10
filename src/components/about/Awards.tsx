import { Award } from "lucide-react";

const awards = [
  { year: "2019", title: "International Design Awards" },
  { year: "2021", title: "Excellence in Sustainability" },
  { year: "2024", title: "Community Impact Award" },
];

const Awards = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Awards
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            We are a developer invested in our customers' success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            and improving the communities we serve.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {awards.map((award, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-3xl bg-muted p-10 text-center shadow-sm transition-shadow hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <p className="mb-2 text-3xl font-extrabold text-foreground">
                {award.year}
              </p>
              <p className="text-muted-foreground">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Awards;
