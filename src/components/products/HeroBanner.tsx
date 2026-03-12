import aboutHeroImg from "@/assets/about-hero.jpg";
import { Link } from "react-router-dom";

const HeroBanner = ({ title }) => {
  return (
    <section className="relative pt-24 overflow-hidden h-[50vh] flex">
      <div className="absolute inset-0">
        <img
          src={aboutHeroImg}
          alt="Industrial factory"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>
      <div className=" h-full flex items-center md:items-end justify-start px-6 md:pt-24 md:px-14  ">
        <div data-aos="fade-right">
          <p className="mb-3 text-sm text-primary-foreground/60">
            <Link to={"/"} className="hover:text-secondary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={"/product"}
              className="hover:text-secondary transition-colors"
            >
              Product
            </Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">{title}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
