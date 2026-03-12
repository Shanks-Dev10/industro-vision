import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/slider_1.jpg";
import slider2 from "@/assets/slider_2.jpg";
import slider3 from "@/assets/railmet-banner-04.webp";

const slides = [
  {
    label: "Trust & Precision Focused",
    heading: (
      <>
        Precision Weighing Solutions for Modern
        <span className="text-secondary">Railways</span>
      </>
    ),
    description:
      "We deliver cutting-edge metal engineering and fabrication services trusted by leading industries worldwide.",
    image: slider1,
    alt: "Female industrial engineer with tablet in factory",
  },
  {
    label: "Innovation Focused",
    heading: (
      <>
        Innovating <span className="text-secondary">Rail Weighing</span> for a Smarter Future
      </>
    ),
    description:
      "Our certified welders and technicians ensure every joint meets the highest standards of structural integrity.",
    image: slider2,
    alt: "Professional welder working with sparks in factory",
  },
  {
    label: "Efficiency & Performance Focused",
    heading: (
      <>
        <span className="text-secondary">Weighing Solutions</span> That Keep Railways Moving Forward
      </>
    ),
    description:
      "Leveraging state-of-the-art robotic systems to maximize efficiency and precision in production lines.",
    image: slider3,
    alt: "Robotic arm in automated manufacturing facility",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-primary dot-pattern overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ background: `url(${slide.image})` }}
    >
      <div className=" dot-pattern overflow-hidden absolute w-full h-full ">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:pt-40 home-bg ">
          {/* Left */}
          <div className="flex-1 space-y-8 max-w-2xl " key={current}>
            <span
              className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {slide.label}
            </span>
            <h1
              className="text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {slide.heading}
            </h1>
            <p
              className="max-w-md text-base text-primary-foreground/70"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {slide.description}
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <Button
                variant="gold"
                size="lg"
                className="rounded-full gap-2 text-base px-8 py-6"
              >
                Our Services <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-secondary hover:text-secondary"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-secondary"
                    : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-secondary hover:text-secondary"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;