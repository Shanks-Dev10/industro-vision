import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Cog, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

import alms from '@/assets/alms1.jpeg'
import k2 from '@/assets/K2 -1.jpeg'
import ocls from '@/assets/ocls.webp'
import weighting from '@/assets/weighting5.webp'

import servicesHero from "@/assets/services-hero.webp";
import oilImg from "@/assets/oil-platform.webp";
import workProcessImg from "@/assets/work-process.webp";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Asymmetric Load Measuring System",
    desc: "We focus on intelligent wagon load monitoring  and safer railway operations through advanced weighing innovation.",
    image: alms,
    link: "/service/asymmetric-load-measuring-system",
  },
  {
    num: "02",
    title: "Overload Control System",
    desc: "OCLS ensures precise load monitoring, intelligent analytics, and superior safety performance across every railway rake.",
    image: ocls,
    link: "/service/over-load-control-system",
  },
  {
    num: "03",
    title: "K2 (KIMAX2 AIR)",
    desc: "Railmet enables real-time load monitoring, precise axle measurement, and instant alerts for safer, smarter transport.",
    image: k2,
    link: "/service/k2-truck-onboard-scale-system",
  },
  {
    num: "04",
    title: "Portable Weighing System",
    desc: "A portable weighing system lets you measure weight instantly on-site without any permanent setup.",
    image: weighting,
    link: "/service/portable-weighing-system-service",
  },
];

const processSteps = [
  {
    num: "01",
    title: "High Performance",
    desc: "Our commitment is to provide reliable rail technology solutions with maximize safety, efficiency, and Lifetime railway operational stability.",
    icon: <Cog size={22} />,
  },
  {
    num: "02",
    title: "Personalized Strategies",
    desc: "A tailored rail cybersecurity strategy built to secure and protect operational data, and keep railway networks Adaptive against evolving Cyber risks.",
    icon: <Shield size={22} />,
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
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-2">
          <div data-aos="fade-up">
            <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">
              Services
            </h1>
            <div className="my-4 flex items-center gap-2 text-sm text-primary-foreground/60">
              <Link to={"/"}>Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#009999]">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-24 ">
        <div className="mx-auto max-w-full 2xl:max-w-7xl px-6">
          <div
            className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            data-aos="fade-up"
          >
            <div>
              <h2 className="mt-3 text-xl md:text-4xl font-semibold text-foreground text-center">
                Advancing railway technology with intelligent automation and precision load monitoring for safer, faster, and more reliable rail operations.

              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
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
                We offer advanced rail solutions, automation, and monitoring
                services designed to meet the needs of modern railway and
                industrial operations.
              </p>
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className="relative flex  flex-col-reverse md:flex-row  gap-6 pb-7  border-b border-b-[#DCE0E3]"
                >
                  {/* Line */}
                  <div className="md:flex flex-col items-center hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#009999] text-sm font-bold text-[#fff]">
                      {step.icon}
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
                  {/* <div className="bg-[#F2F5FB] w-16 h-16 flex items-center justify-center rounded-lg">
                    {step.icon}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-full 2xl:max-w-7xl px-3 md:px-6">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-foreground md:text-4xl ">
              Industrial solutions designed for quality and trust
            </h2>
          </div>

          <div className="space-y-0 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-10">
            {services.map((s, i) => (
              <div key={s.num}>
                <Link
                  to={s.link}
                  className="group flex flex-col items-center border rounded-[8px] shadow-sm hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="h-[250px] w-full overflow-hidden rounded-md ">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-125"
                      style={{ backgroundImage: `url(${s.image})` }}
                    ></div>
                  </div>
                  <div className="p-4">
                    <h3 className="shrink-0 text-xl font-semibold text-foreground ">
                      {s.title}
                    </h3>
                    {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-sm font-bold text-muted-foreground transition-colors group-hover:border-[#009999] group-hover:text-[#009999]">
                      {s.num}
                    </div> */}
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed pt-3">
                    {s.desc}
                  </p>
                  </div>
                  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="bg-primary py-20">
        <div
          className="mx-auto max-w-full md:max-w-2xl px-2 md:px-6 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Stay tuned for more updates
          </h2>
          <div className="mx-auto mt-8 flex max-w-full md:max-w-md ">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-l-xl bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
            />
            <Link
              to={"/"}
              className="rounded-l-none rounded-r-xl py-3 bg-[#F9C31F] px-2 md:px-6"
            >
              Subscribe
            </Link>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/50">
            By signing up, you agree to the Privacy Policy.
          </p>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Services;
