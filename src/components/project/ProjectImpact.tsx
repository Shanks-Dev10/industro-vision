import { Trophy, Target, Shield, MapPin } from "lucide-react";
import { impactStats, projectLocations } from "@/data/content";
import MapImg from "@/assets/our_projects/map.jpg"

const icons = {
  trophy: Trophy,
  target: Target,
  rail: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M4 4h16M4 9h16M4 14h16M4 19h16M8 4v15M16 4v15" strokeLinecap="round" />
    </svg>
  ),
  shield: Shield,
};

export default function ProjectImpact() {
  return (
    <section className="bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-navy-900">
            <span className="h-5 w-1 rounded bg-brand-green" />
            Our Project Impact
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {impactStats.map((stat) => {
              const Icon = icons[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm"
                >
                  <Icon className="mx-auto mb-3 h-7 w-7 text-navy-900" />
                  <p className="font-display text-2xl font-bold text-navy-900">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-navy-900">
            <span className="h-5 w-1 rounded bg-brand-green" />
            Project Locations
          </h3>
          <div className="flex gap-4">
            <div className="relative hidden h-44 w-44 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:flex">
              <img src={MapImg} alt="map" />
              <MapPin className="absolute bottom-[85px]  left-[30%] h-5 w-5 -translate-x-1/2 fill-brand-green text-red-700 " />
              <MapPin className="absolute bottom-[85px]  left-[40%] h-5 w-5 -translate-x-1/2 fill-brand-green text-red-700" />
            </div>

            <div className="flex-1 space-y-3 rounded-lg border border-gray-100 p-3">
              {projectLocations.map((loc) => (
                <div key={loc.id} className="flex items-start gap-2 rounded-md p-2 hover:bg-gray-50">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <div className="text-xs">
                    <p className="font-semibold  text-green-500">
                      {loc.id} <span className="ml-1 text-black">{loc.title}</span>
                    </p>
                    <p className="text-gray-500">{loc.subtitle}</p>
                    <p className="font-semibold text-green-500">{loc.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
