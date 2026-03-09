import { Button } from "@/components/ui/button";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const members = [
  { name: "Esther Howard", role: "Chief Engineer", image: team1 },
  { name: "Marvin Jones", role: "Operations Director", image: team2 },
  { name: "Guy Hawkins", role: "Project Manager", image: team3 },
];

const TeamSection = () => {
  return (
    <section className="bg-primary dot-pattern py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">The Team</span>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl">
            The Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Our team brings together licensed engineers, skilled technicians, and industry experts working to achieve your goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-3xl bg-navy-light/50 backdrop-blur-sm">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-primary-foreground">{m.name}</h3>
                <p className="text-sm text-primary-foreground/60">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="gold-outline" size="lg" className="rounded-full px-8">
            View All Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
