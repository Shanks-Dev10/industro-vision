import testimonialImg from "@/assets/testimonial-workers.jpg";
import { Quote } from "lucide-react";

const Testimonal=()=>{
    return(
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
    )
}
export default Testimonal