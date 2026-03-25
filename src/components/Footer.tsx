import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import Whatsapp from "@/assets/whatsapp.webp";
import { FaXTwitter } from "react-icons/fa6";

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

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="mx-auto 2xl:max-w-7xl max-w-full px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="#"
              className="text-2xl font-extrabold text-primary-foreground"
            >
              Rail<span className="text-secondary uppercase">Met</span>
            </a>
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
                    className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    {nav.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                "About",
                "Meet The Team",
                "Testimonials",
                "FAQs",
                "Contact",
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Newsletter
            </h4>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Stay tuned for more updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-xl bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
              />
              <button className="rounded-r-xl bg-secondary px-4 text-secondary-foreground hover:bg-gold-dark transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
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
              className="text-xs text-primary-foreground/50 hover:text-secondary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-secondary"
            >
              Terms & Conditions
            </a>
          </div>
          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
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
