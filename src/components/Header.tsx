import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { href: "/", item: "Home" },
  { href: "/about", item: "About Us" },
  { href: "/service", item: "Services" },
  { href: "/product", item: "Products" },
  { href: "/clients", item: "Clients" },
  { href: "/", item: "Careers" },
  { href: "/contact", item: "Contact Us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-full bg-card px-6 py-3 shadow-md">
          {/* Logo */}
          <Link to={"/"}>
            <p className="text-xl font-extrabold tracking-tight text-primary">
              Rail<span className="text-secondary uppercase">Met</span>
            </p>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 xl:flex">
            {navItems.map((items) => (
              <li key={items.item}>
                <Link
                  to={items.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {items.item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+919003253007"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70"
            >
              <Phone className="h-4 w-4 text-secondary" />
              +91 90032 53007
            </a>

            <Button variant="gold" size="lg" className="rounded-full">
              <Link to={"/contact"}>Request A Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-card p-6 shadow-lg xl:hidden">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.item}>
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground/70"
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+919003253007"
                target="_blank"
                className="flex items-center gap-2 text-sm font-medium text-foreground/70"
              >
                <Phone className="h-4 w-4 text-secondary" />
                +91 90032 53007
              </a>

              <Link to={"/contact"}>
                <Button variant="gold" className="rounded-full">
                  Request A Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
