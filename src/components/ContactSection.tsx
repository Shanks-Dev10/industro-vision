import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary dot-pattern py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row">
        {/* Left */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-extrabold text-primary-foreground md:text-5xl lg:text-6xl">
            Request <span className="text-secondary">Quote</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Phone</p>
                <p className="text-sm text-primary-foreground/70">+084 123 456 888</p>
                <p className="text-sm text-primary-foreground/70">+084 678 855 664</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Address</p>
                <p className="text-sm text-primary-foreground/70">2972 Westheimer Rd, Illinois 85486</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Working Time</p>
                <p className="text-sm text-primary-foreground/70">Mon – Fri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1">
          <form className="space-y-5 rounded-3xl bg-card p-8 shadow-xl">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
            />
            <Button variant="gold" size="lg" className="w-full rounded-xl text-base">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
