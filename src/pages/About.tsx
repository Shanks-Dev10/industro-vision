import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Award, MapPin, Users, DollarSign, Calendar, Lightbulb, Shield, Handshake, Leaf } from "lucide-react";
import aboutHeroImg from "@/assets/about-hero.jpg";
import aboutEngineerImg from "@/assets/about-engineer.jpg";
import valueQualityImg from "@/assets/value-quality.jpg";
import valueTeamworkImg from "@/assets/value-teamwork.jpg";
import valueSustainabilityImg from "@/assets/value-sustainability.jpg";
import valueInnovationImg from "@/assets/value-innovation.jpg";
import testimonialImg from "@/assets/testimonial-workers.jpg";

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "30", highlight: true },
  { icon: MapPin, label: "Global Locations", value: "75", highlight: false },
  { icon: Users, label: "Total Employees", value: "1.2K", highlight: false },
  { icon: DollarSign, label: "Annual Revenue", value: "15B", highlight: false },
];

const values = [
  { icon: Shield, title: "Quality", image: valueQualityImg, text: "Product quality is the cornerstone of our commitment." },
  { icon: Handshake, title: "Teamwork", image: valueTeamworkImg, text: "Collaboration and synergy drive innovation." },
  { icon: Leaf, title: "Sustainability", image: valueSustainabilityImg, text: "We focus on minimizing environmental impact." },
  { icon: Lightbulb, title: "Innovation", image: valueInnovationImg, text: "We continuously develop cutting-edge industrial solutions." },
];

const awards = [
  { year: "2019", title: "International Design Awards" },
  { year: "2021", title: "Excellence in Sustainability" },
  { year: "2024", title: "Community Impact Award" },
];

const partners = ["sandtex", "studio45", "srbitz", "cameo"];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHeroImg} alt="Industrial factory" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-24 md:py-32">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm text-primary-foreground/60">
              <a href="/" className="hover:text-secondary transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-secondary">About</span>
            </p>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-6xl">About Us</h1>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start gap-16 lg:flex-row">
            {/* Left - Image + Stats */}
            <div className="relative flex-1" data-aos="fade-right">
              <img
                src={aboutEngineerImg}
                alt="Engineer working with machinery"
                className="w-full rounded-3xl object-cover shadow-xl aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-4 grid grid-cols-2 gap-3 md:-right-12">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl px-5 py-4 shadow-lg ${
                      stat.highlight
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-card text-card-foreground"
                    }`}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                  >
                    <stat.icon className={`mb-1 h-5 w-5 ${stat.highlight ? "text-secondary-foreground" : "text-secondary"}`} />
                    <p className="text-2xl font-extrabold">{stat.value}</p>
                    <p className={`text-xs font-medium ${stat.highlight ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 space-y-8 lg:pt-8" data-aos="fade-left">
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary">About Us</span>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl leading-tight">
                Pushing the boundaries of technology and manufacturing to build a stronger, smarter tomorrow
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We combine innovative technology with deep industry expertise to deliver efficient and reliable engineering services that empower businesses worldwide.
              </p>
              <Button variant="gold" size="lg" className="rounded-full gap-2 px-8">
                Request A Quote <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div data-aos="fade-right">
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Core Values</span>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
                Fueling progress, shaping the future
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground" data-aos="fade-left">
              With a passion and a commitment to quality, we have been empowering industries and driving progress.
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
                  <h3 className="mb-2 text-lg font-bold text-foreground">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary" data-aos="fade-up">Partners</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl" data-aos="fade-up" data-aos-delay="100">
            We exist to help our clients and partners build their dreams
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8" data-aos="fade-up" data-aos-delay="200">
            {partners.map((name) => (
              <div
                key={name}
                className="flex h-20 w-44 items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-sm"
              >
                <span className="text-xl font-extrabold uppercase tracking-wider text-muted-foreground/50">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
          <div className="flex-1 space-y-8" data-aos="fade-right">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Testimonial</span>
            <Quote className="h-10 w-10 text-secondary/30" />
            <blockquote className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
              "The professionalism and response time left me speechless. The quality was amazing and I got exactly what I wanted."
            </blockquote>
            <div>
              <p className="font-bold text-foreground">Ralph Adams</p>
              <p className="text-sm text-muted-foreground">Construction Admin</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">★ 5.0</div>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-2.5 rounded-full transition-all ${i === 0 ? "w-8 bg-secondary" : "w-2.5 bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <img
              src={testimonialImg}
              alt="Factory engineers reviewing data"
              className="w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center" data-aos="fade-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Awards</span>
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
                <p className="mb-2 text-3xl font-extrabold text-foreground">{award.year}</p>
                <p className="text-muted-foreground">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative mx-auto max-w-2xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Stay tuned for more updates
          </h2>
          <div className="mx-auto mt-8 flex max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-l-full bg-primary-foreground/10 px-6 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
            />
            <Button variant="gold" className="rounded-r-full px-8">
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

export default About;
