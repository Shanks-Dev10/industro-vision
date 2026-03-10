import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "News", href: "/#news" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-full bg-card px-6 py-3 shadow-md">
          {/* Logo */}
          <a href="#" className="text-xl font-extrabold tracking-tight text-primary">
            METAL<span className="text-secondary">X</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+084123456888" className="flex items-center gap-2 text-sm font-medium text-foreground/70">
              <Phone className="h-4 w-4 text-secondary" />
              +084 123 456 888
            </a>
            <Button variant="gold" size="lg" className="rounded-full">
              Request A Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-card p-6 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-foreground/70">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+084123456888" className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <Phone className="h-4 w-4 text-secondary" />
                +084 123 456 888
              </a>
              <Button variant="gold" className="rounded-full">Request A Quote</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
