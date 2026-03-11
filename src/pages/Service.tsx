import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import servicesHero from "@/assets/services-hero.webp";
import metalImg from "@/assets/metal-cutting.webp";
import oilImg from "@/assets/oil-platform.webp";
import workProcessImg from "@/assets/work-process.webp"

const services = [
  {
    num: "01",
    title: "Metal Engineering",
    desc: "We focus on delivering high-quality designs, efficient project management, and cutting-edge industrial solutions.",
    image: metalImg,
  },
  {
    num: "02",
    title: "Oil & Gas Recovery",
    desc: "Our team ensures creative designs, precise planning, and superior technical expertise.",
    image: oilImg,
  },
  {
    num: "03",
    title: "Agricultural Automation",
    desc: "We provide innovative concepts, seamless execution, and outstanding project delivery.",
    image: metalImg,
  },
  {
    num: "04",
    title: "Power & Energy",
    desc: "Delivering smart solutions, reliable coordination, and exceptional engineering quality.",
    image: oilImg,
  },
  {
    num: "05",
    title: "Supply Chain & Logistics",
    desc: "We specialize in modern industrial operations, strategic management, and advanced logistics technology.",
    image: metalImg,
  },
  {
    num: "06",
    title: "Chemical Industry",
    desc: "We focus on innovative engineering solutions, efficient workflows, and groundbreaking industrial processes.",
    image: oilImg,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Consultation & Inspection",
    desc: "Our mission is to empower clients by providing reliable, innovative, and cost-effective engineering services.",
  },
  {
    num: "02",
    title: "Customized Plan & Execution",
    desc: "Based on the inspection, we provide a tailored plan with clear pricing and timelines.",
  },
  {
    num: "03",
    title: "Final Check & Support",
    desc: "After project completion, we perform a detailed quality check to ensure everything meets our high standards.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img src={servicesHero} alt="Services" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
          <div data-aos="fade-up">
            <div className="mb-4 flex items-center gap-2 text-sm text-primary-foreground/60">
              <span>Home Page</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-secondary">Services</span>
            </div>
            <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">Services</h1>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
              Industrial solutions designed for quality and trust
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((s, i) => (
              <div key={s.num}>
                <div
                  className="group flex flex-col items-center gap-6 py-8 md:flex-row md:gap-8 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 h-20 w-0 group-hover:w-40 shrink-0 rounded-2xl object-cover transition-all duration-500" loading="lazy"
                  />
                  <h3 className="shrink-0 text-xl font-bold text-foreground md:w-56">{s.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-sm font-bold text-muted-foreground transition-colors group-hover:border-secondary group-hover:text-secondary">
                    {s.num}
                  </div>
                </div>
                {i < services.length - 1 && <div className="h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-muted py-24 dot-pattern-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                We Get It Right The First Time
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">Work process</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed md:text-right">
              We start by understanding your needs and conducting a comprehensive solutions assessment.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Timeline */}
            <div className="space-y-0" data-aos="fade-right">
              {processSteps.map((step, i) => (
                <div key={step.num} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                      {step.num}
                    </div>
                    {i < processSteps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div data-aos="fade-left">
              <img
                src={workProcessImg}
                alt="Engineers working in factory"
                className="h-full max-h-[500px] w-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-2xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">Stay tuned for more updates</h2>
          <div className="mx-auto mt-8 flex max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-l-xl bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
            />
            <Button variant="gold" className="rounded-l-none rounded-r-xl px-6">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/50">
            By signing up, you agree to the Privacy Policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;