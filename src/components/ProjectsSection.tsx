import { ArrowRight } from "lucide-react";
import product1 from '@/assets/Lead-Image-Train-Weighing-System-Hire.webp'
import product2 from '@/assets/railmet-banner-05.jpg.webp'
import product3 from '@/assets/VRS241.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const projects = [
  {
    title: "Advanced weighing innovation",
    category: "Renewable Energy",
    image: product1,
  },
  {
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product2,
  },
  {
    title: "Railway weighing and automation",
    category: "Renewable Energy",
    image: product3,
  },
  {
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product2,
  },
  {
    title: "Advanced weighing innovation",
    category: "Renewable Energy",
    image: product1,
  },
  {
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product2,
  },
  {
    title: "Railway weighing and automation",
    category: "Renewable Energy",
    image: product3,
  },
  {
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product2,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-muted py-24">
      <div className="w-full px-6">
        <div className="mb-16 text-center">
          <h2 className="mt-3 text-3xl font-extrabold text-secondary md:text-4xl lg:text-5xl">
            Products
          </h2>
          <p className="mt-4  text-muted-foreground text-center">
            Our work blends innovation with practical engineering solutions.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title}>
                <div className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer">
                  <a href="#">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                          {p.category}
                        </span>
                      </div>
                      <p className="mt-1 text-primary-foreground/80">
                        {p.title}
                      </p>
                      <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform group-hover:scale-110">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
