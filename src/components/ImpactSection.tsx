import { Globe, FolderCheck, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-secondary-foreground"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const stats = [
  { icon: Globe, label: "Global Locations", value: 75, suffix: "+" },
  { icon: FolderCheck, label: "Projects Done", value: 148, suffix: "+" },
  { icon: TrendingUp, label: "Annual Revenue", value: 158, suffix: "+" },
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Impact
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Our Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Together we identify industrial data automation opportunities and
            deliver solutions that improve production efficiency.
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
              <Counter end={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
