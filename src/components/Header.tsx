import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/railmet-logo.webp";

const navItems = [
  { href: "/", item: "Home" },
  { href: "/about", item: "About Us" },
  { href: "/service", item: "Services" },
  { href: "/product", item: "Products" },
  { href: "/our-project", item: "Projects" },
  { href: "/contact", item: "Contact Us" }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-full bg-card px-6 py-3 shadow-md">
          {/* Logo */}
          <Link to={"/"}>
            <img src={Logo} alt="logo" className="w-[150px]" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 xl:flex">
            {navItems.map((items) => (
              <li key={items.item}>
                <NavLink
                  to={items.href}
                  className={({ isActive }) =>
                    `text-sm font-medium  transition-colors hover:text-[#009999] ${isActive ? "text-[#009999]" : "text-foreground/70"}`
                  }
                >
                  {items.item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+918939821722"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70"
            >
              <Phone className="h-4 w-4 text-[#009999]" />
              +91 89398 21722
            </a>

            <Button
              size="lg"
              className="rounded-full bg-[#009999] hover:bg-[#009999]"
            >
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
                    className="text-sm font-medium text-black"
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
                <Phone className="h-4 w-4 text--[#009999]" />
                +91 90032 53007
              </a>

              <Link to={"/contact"}>
                <Button  className="rounded-full bg-[#009999]">
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
