import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Cog, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

import servicesHero from "@/assets/services-hero.webp";
import metalImg from "@/assets/metal-cutting.webp";
import oilImg from "@/assets/oil-platform.webp";
import workProcessImg from "@/assets/work-process.webp";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Asymmetric Load Measuring System",
    desc: "We focus on intelligent wagon load monitoring, proactive imbalance detection, and safer railway operations through advanced weighing innovation.",
    image: metalImg,
    link: "/service/asymmetric-load-measuring-system",
  },
  {
    num: "02",
    title: "Overload Control System",
    desc: "OCLS ensures precise load monitoring, intelligent analytics, and superior safety performance across every railway rake.",
    image: oilImg,
    link: "/service/over-load-control-system",
  },
  {
    num: "03",
    title: "KIMAX2 AIR",
    desc: "We focus on real-time load monitoring, accurate axle weight measurement, and overload alerts to ensure safer and more efficient transport operations.",
    image: metalImg,
    link: "/service/asymmetric-load-measuring-system",
  },
  {
    num: "04",
    title: "Asymmetric Load Measuring System",
    desc: "Railmet is a railway technology company that provides advanced ALMS solutions to customers, delivering intelligent wagon load monitoring and real-time safer rail operations.",
    image: oilImg,
    link: "/service/asymmetric-load-measuring-system",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Consultation & Inspection",
    desc: "Our mission is to empower clients by providing reliable, innovative, and cost-effective engineering services.",
    icon: <Cog size={48} />,
  },
  {
    num: "02",
    title: "Customized Plan & Execution",
    desc: "Based on the inspection, we provide a tailored plan with clear pricing and timelines.",
    icon: <Shield size={48} />,
  },
  {
    num: "03",
    title: "Final Check & Support",
    desc: "After project completion, we perform a detailed quality check to ensure everything meets our high standards.",
    icon: <Cog size={48} />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={servicesHero}
          alt="Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
          <div data-aos="fade-up">
            <div className="mb-4 flex items-center gap-2 text-sm text-primary-foreground/60">
              <span>Home Page</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-secondary">Services</span>
            </div>
            <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            data-aos="fade-up"
          >
            <div>
              <h2 className="mt-3 text-4xl font-semibold text-foreground ">
                Tailored solutions for industry growth
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 ">
            {/* Image */}
            <div data-aos="fade-left">
              <img
                src={workProcessImg}
                alt="Engineers working in factory"
                className="h-full max-h-[550px] w-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>

            {/* Timeline */}
            <div
              className="space-y-0 flex flex-col gap-10"
              data-aos="fade-right"
            >
              <p className=" text-xl text-black font-semibold leading-relaxed ">
                We offer a comprehensive range of services tailored to meet the
                unique needs of businesses in the manufacturing, construction,
                and industrial sectors.
              </p>
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className="relative flex justify-between flex-col-reverse md:flex-row  gap-6 pb-7  border-b border-b-[#DCE0E3]"
                >
                  {/* Line */}
                  <div className="md:flex flex-col items-center hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-1 max-w-md">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="bg-[#F2F5FB] w-16 h-16 flex items-center justify-center rounded-lg">
                    {step.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-3 md:px-6">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl ">
              Industrial solutions designed for quality and trust
            </h2>
          </div>

          <div className="space-y-0 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-10">
            {services.map((s, i) => (
              <div key={s.num}>
                <Link
                  to={s.link}
                  className="group flex flex-col items-center  gap-6 py-8  md:gap-8 h-[644px]"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="h-[350px] w-full overflow-hidden rounded-md ">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-125"
                      style={{ backgroundImage: `url(${s.image})` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="shrink-0 text-xl font-semibold text-foreground md:w-48">
                      {s.title}
                    </h3>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-sm font-bold text-muted-foreground transition-colors group-hover:border-secondary group-hover:text-secondary">
                      {s.num}
                    </div>
                  </div>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed ">
                    {s.desc}
                  </p>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-2xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Stay tuned for more updates
          </h2>
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
