import { Quote } from "lucide-react";
import testimonialImg from "@/assets/testimonial-workers.jpg";

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
        {/* Left */}
        <div className="flex-1 space-y-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Testimonial</span>
          <Quote className="h-10 w-10 text-secondary/30" />
          <blockquote className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            "The professionalism and response time left me speechless. The quality was amazing and I got exactly what I wanted."
          </blockquote>
          <div>
            <p className="font-bold text-foreground">Ralph Adams</p>
            <p className="text-sm text-muted-foreground">Construction Admin</p>
          </div>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2.5 rounded-full transition-all ${i === 0 ? "w-8 bg-secondary" : "w-2.5 bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <img
            src={testimonialImg}
            alt="Factory workers discussing"
            className="w-full rounded-3xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
