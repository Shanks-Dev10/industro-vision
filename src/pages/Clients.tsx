import AdithyaBirla from "@/assets/partners/adithyabirla.webp";
import Ambuja from "@/assets/partners/ambuja.webp";
import CaterPiller from "@/assets/partners/caterpiller.webp";
import Dalmia from "@/assets/partners/dalmia.webp";
import Hitachi from "@/assets/partners/hitachi.webp";
import IndianRailway from "@/assets/partners/indianrailway.webp";
import Jcb from "@/assets/partners/jcb.webp";
import Jsw from "@/assets/partners/jsw.webp";
import TataSteel from "@/assets/partners/tatasteel.webp";
import UltraTech from "@/assets/partners/ultratech.webp";
import Volvo from "@/assets/partners/volvo.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeroImg from "@/assets/about-hero.jpg";
import BharathElectronics from "@/assets/partners/bharathelectronics.webp";
import Hindustan from "@/assets/partners/hindustan.webp";
import Jindal from "@/assets/partners/jindal.webp";
import Jsl from "@/assets/partners/jsl.webp";
import Leyland from "@/assets/partners/leyland.webp";
import LT from "@/assets/partners/lt.webp";
import NTCP from "@/assets/partners/ntcp.webp";
import Shyam from "@/assets/partners/shyam.webp";
import RailVikas from "@/assets/partners/railvikas.webp";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const partners = [
  {
    cementPartners: [AdithyaBirla, Ambuja, Dalmia, Jsw, Jcb, UltraTech],
    title: "Cement Plants",
  },
  {
    cementPartners: [TataSteel, Shyam, Jindal, NTCP, Jsl],
    title: "Steel Plants & Power Plants",
  },
  {
    cementPartners: [Jcb, CaterPiller, Hitachi, Volvo, Leyland],
    title: "Mining & Earth Moving Equipments",
  },
  {
    cementPartners: [
      IndianRailway,
      BharathElectronics,
      Hindustan,
      LT,
      RailVikas,
    ],
    title: "Other Valuable Customers",
  },
];

const Clients = () => {
  return (
    <div>
      <Header />

      {/* Hero Banner */}

      <section className="relative h-[420px] overflow-hidden">
        <img
          src={aboutHeroImg}
          alt="Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-2">
          <div data-aos="fade-up">
            <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">
              Clients
            </h1>
            <div className="my-4 flex items-center gap-2 text-sm text-primary-foreground/60">
              <Link to={"/"}>Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-secondary">Clients</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
        {partners.map((group, index) => (
          <div key={index} className="mb-10 pb-5 border-b-[1px] ">
            <h2 className="md:text-3xl text-xl font-semibold mb-5">
              {group.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {group.cementPartners.map((logo, i) => (
                <div
                  key={i}
                  className="flex p-4 items-center justify-center rounded-xl border bg-white shadow-md  hover:shadow-xl transition"
                >
                  <img
                    src={logo}
                    alt="partner logo"
                    className=" object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};
export default Clients;
