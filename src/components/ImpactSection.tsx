import { Globe, FolderCheck, TrendingUp } from "lucide-react";

const stats = [
  { icon: Globe, label: "Global Locations", value: "75" },
  { icon: FolderCheck, label: "Projects Done", value: "148" },
  { icon: TrendingUp, label: "Annual Revenue", value: "15B" },
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Our Impact</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">Our Impact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Together we identify industrial data automation opportunities and deliver solutions that improve production efficiency.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-10 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                <s.icon className="h-7 w-7 text-secondary" />
              </div>
              <p className="text-5xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
