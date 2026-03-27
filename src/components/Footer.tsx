import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Youtube,
  LocateIcon,
  Map,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Whatsapp from "@/assets/whatsapp.webp";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/railmet-logo.webp";

const Footer = () => {
  const socialIcons = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=61587870608872",
    },
    { icon: Youtube, link: "https://www.youtube.com/@Railmet/shorts" },
    { icon: Instagram, link: "https://www.instagram.com/railmet_tech/" },
  ];
  const year = new Date().getFullYear();
  const NavLinks = [
    {
      item: "Home",
      href: "/",
    },
    {
      item: "About Us",
      href: "/about",
    },
    {
      item: "Services",
      href: "/service",
    },
    {
      item: "Products",
      href: "/product",
    },
    {
      item: "Contact Us",
      href: "/contact",
    },
  ];
  const services = [
    {
      name: "Asymmetric Load Measuring System",
      href: "/service/asymmetric-load-measuring-system",
    },
    {
      name: "Overload Control System",
      href: "/service/over-load-control-system",
    },
    {
      name: "K2 (KIMAX2 AIR)",
      href: "/service/k2-truck-onboard-scale-system",
    },
    {
      name: "Portable Weighing System",
      href: "/service/portable-weighing-system-service",
    },
  ];

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="mx-auto 2xl:max-w-7xl max-w-full px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-[150px]" />
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Precision-engineered solutions for rail systems and industries.
              Built for performance, trusted for excellence.
            </p>
          </div>

          {/* Page Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Pages
            </h4>
            <ul className="space-y-3">
              {NavLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.href}
                    className="text-sm text-primary-foreground/60 hover:text-[#009999] transition-colors"
                  >
                    {nav.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/60 hover:text-[#009999] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*Company*/}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Contact Us
            </h4>
            <ul className="space-y-5 mb-4">
              <li>
                <a
                  href="/"
                  className="text-sm text-primary-foreground/60 hover:text-[#009999] transition-colors flex items-center gap-3"
                >
                  <MapPin size={30} />
                  No, 1/295, 1/308, Melathur, Somangalam, Tamil Nadu 600069
                </a>
              </li>
              <li>
                <a
                  href="mailto:railmet2021@gmil.com" target="_blank"
                  className="text-sm text-primary-foreground/60 hover:text-[#009999] transition-colors flex items-center gap-3"
                >
                  <Mail size={16} />
                  railmet2021@gmil.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918939821722" target="_blank"
                  className="text-sm text-primary-foreground/60 hover:text-[#009999] transition-colors flex items-center gap-3"
                >
                  <Phone size={16} />
                  +91 89398 21722
                </a>
              </li>
            </ul>

            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 hover:bg-[#009999] hover:text-[#fff] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © <span>{year}</span> RailMet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-[#009999]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-[#009999]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Whatsapp icon */}

      <div>
        <a
          href="https://wa.me/+919003253007"
          target="_blank"
          className="w-16 h-16 fixed bottom-10 right-5 animate-bounce"
        >
          <img src={Whatsapp} alt="whatsapp" className="w-full h-full" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
