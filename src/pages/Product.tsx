import Footer from "@/components/Footer";
import Header from "@/components/Header";
import aboutHeroImg from "@/assets/about-hero.jpg";
import { ArrowRight, ChevronRight } from "lucide-react";
import product1 from "@/assets/Lead-Image-Train-Weighing-System-Hire.webp";
import product2 from "@/assets/railmet-banner-05.jpg.webp";
import product3 from "@/assets/VRS241.webp";
import product4 from "@/assets/railmet-product-06.webp";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    num: "01",
    title: "ALMS (Advanced Load Monitoring System)",
    category: "Railway Safety and Efficiency",
    image: product1,
    link:'/product/advanced-load-monitoring-system'
  },
  {
    num: "02",
    title: "OCLs (Overload Control System)",
    category: "Accurate Weight Data in Real-Time ",
    image: product2,
    link:'/product/overload-Control-System-product'
  },
  {
    num: "03",
    title: "K2 Truck Onboard Scale System",
    category: "Efficient Pressure sensors and a Digital Display",
    image: product3,
    link:'/product/truck-onboard-scale-system'
  },
  {
    num: "04",
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product4,
    link:'#'
  },
];

const Product = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="Industrial factory"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-2">
          <div data-aos="fade-up">
            <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">
              Products
            </h1>
            <div className="my-4 flex items-center gap-2 text-sm text-primary-foreground/60">
              <Link to={"/"}>Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-secondary">Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section>
        <Tabs
          defaultValue="all-product"
          className="max-w-screen-xl mx-auto py-24 "
        >
          <TabsList className="flex justify-center gap-3 items-center my-5 bg-transparent">
            <TabsTrigger value="all-product">All Product</TabsTrigger>
            <TabsTrigger value="analytics">Our Process</TabsTrigger>
          </TabsList>

          <TabsContent value="all-product">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 px-3">
              {projects.map((p,index) => (
                <div key={index} className="group relative h-[500px]  overflow-hidden rounded-3xl cursor-pointer">
                  <Link to={p.link}>
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
                      <h3 className="text-2xl font-bold text-primary-foreground">
                        {p.title}
                      </h3>
                      {/* <p className="mt-1 text-primary-foreground/80">
                        {p.title}
                      </p> */}
                      <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform group-hover:scale-110">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
