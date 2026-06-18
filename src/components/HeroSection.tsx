import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/Home_slider1.png";
import slider2 from "@/assets/Home_slider2.png";
import slider3 from "@/assets/Home_slider3.png";
import { Link } from "react-router-dom";

const slides = [
  {
    label: "Innovation Focused",
    heading: (
      <>
        Precision Beyond Limits 
      </>
    ),
    description:
      "Railmet Technologies delivers precise wagon load monitoring solutions for safer, smarter, and more efficient railway operations. ",
    image: slider2,
    alt: "Professional welder working with sparks in factory",
  },
  {
    label: "Trust & Precision Focused",
    heading: (
      <>
        Advanced Load Measuring 
      </>
    ),
    description:
      "Smart railway automation and wagon load monitoring solutions built to ensure accuracy, safety, and reliable freight operations. ",
    image: slider1,
    alt: "Female industrial engineer with tablet in factory",
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
      style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${slide.image})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
    >
      <div className=" dot-pattern overflow-hidden absolute w-full h-full ">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:pt-40 home-bg ">
          {/* Left */}
          <div className="flex-1 space-y-8 max-w-3xl " key={current}>
            <span
              className="inline-block rounded-full border border-[#009999] bg-[#009999] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#fff]"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {slide.label}
            </span>
            <h1
              className=" font-bold  text-primary-foreground text-[26px] md:text-[48px] lg:text-[60px] xl:text-[72px] xl:leading-[80px]"
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
              <Link to={"/service"}>
                <Button
                  size="lg"
                  className="rounded-full gap-2 text-base px-8 py-6 bg-[#009999] hover:bg-[#009999]"
                >
                  Our Services <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#009999] text-primary-foreground/70 transition-colors hover:border-[#009999]hover:text-[#fff]"
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
                    ? "w-8 bg-[#009999]"
                    : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#009999] text-primary-foreground/70 transition-colors hover:border-[#009999] hover:text-[#fff]"
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
