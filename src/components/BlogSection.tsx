import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    title: "Data Center Cooling: How to Scale with Pace and Stability",
    category: "Technology",
    date: "Mar 5, 2026",
    image: blog1,
  },
  {
    title: "Unlock Growth with Industrial Aftermarket Services",
    category: "Industry",
    date: "Feb 20, 2026",
    image: blog2,
  },
  {
    title: "Quality and Speed in Heavy Equipment Electrification",
    category: "Engineering",
    date: "Jan 15, 2026",
    image: blog3,
  },
];

const BlogSection = () => {
  return (
    <section id="news" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Insights</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Latest News
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    {p.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground leading-snug">{p.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
