import {
  ClipboardList,
  Ruler,
  Wrench,
  Gauge,
  PlayCircle,
  Headset,
  ArrowRight,
} from "lucide-react";
import { installationSteps } from "@/data/content";

const icons = {
  clipboard: ClipboardList,
  ruler: Ruler,
  wrench: Wrench,
  gauge: Gauge,
  playcircle: PlayCircle,
  headset: Headset,
};

export default function InstallationProcess() {
  return (
    <section className="bg-white px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h3 className="mb-10 flex items-center justify-center gap-2 font-display text-xl font-bold text-navy-900">
          <span className="h-5 w-1 rounded bg-brand-green" />
          Our Installation Process
        </h3>

        <div className="flex flex-wrap items-start justify-center gap-x-2 gap-y-8">
          {installationSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <div key={step.label} className="flex items-center">
                <div className="flex w-28 flex-col items-center gap-3 sm:w-32">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 ">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold leading-snug text-navy-900">
                    {step.label}
                  </p>
                </div>
                {i < installationSteps.length - 1 && (
                  <ArrowRight className="mx-1 hidden h-4 w-4 flex-shrink-0 text-gray-300 sm:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
