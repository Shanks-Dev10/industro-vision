import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-extrabold text-primary-foreground">
              METAL<span className="text-secondary">X</span>
            </a>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Innovative metal solutions for industries worldwide. Engineering excellence since 1994.
            </p>
          </div>

          {/* Page Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">Pages</h4>
            <ul className="space-y-3">
              {["Services", "Projects", "Awards", "Core Values", "Blog"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              {["About", "Meet The Team", "Testimonials", "FAQs", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 mb-4">Stay tuned for more updates</p>
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
            © 2026 MetalX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-secondary">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-secondary">Terms & Conditions</a>
          </div>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
