import Footer from "@/components/Footer";
import Header from "@/components/Header";
import aboutHeroImg from "@/assets/about-hero.jpg";
import { ArrowRight } from "lucide-react";
import product1 from '@/assets/Lead-Image-Train-Weighing-System-Hire.webp'
import product2 from '@/assets/railmet-banner-05.jpg.webp'
import product3 from '@/assets/VRS241.webp'
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
    title: "Advanced weighing innovation",
    category: "Renewable Energy",
    image: product1,
  },
  {
    num: "02",
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product2,
  },
  {
    num: "03",
    title: "Railway weighing and automation",
    category: "Renewable Energy",
    image: product3,
  },
  {
    num: "04",
    title: "Precisload monitoring",
    category: "Aerospace",
    image: product2,
  },
];

const Product = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="Industrial factory"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm text-primary-foreground/60">
              <a href="/" className="hover:text-secondary transition-colors">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-secondary">Products</span>
            </p>

            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-6xl">
              Products
            </h1>
          </div>
        </div>
      </section>

      {/* Products */}
      <section>
        <Tabs defaultValue="all-product" className="max-w-screen-xl mx-auto py-24 ">
          <TabsList className="flex justify-center gap-3 items-center my-5 bg-transparent">
            <TabsTrigger value="all-product">All Product</TabsTrigger>
            <TabsTrigger value="analytics">Our Process</TabsTrigger>
          </TabsList>

          <TabsContent value="all-product">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 px-3">
              {projects.map((p) => (
                <div className="group relative h-[500px]  overflow-hidden rounded-3xl cursor-pointer">
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
                  </a>
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
