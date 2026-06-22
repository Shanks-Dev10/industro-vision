import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TrackPhoto from "./TrackPhoto";
import { galleryFilters, galleryItems } from "@/data/content";

export default function ProjectGallery() {
  const [active, setActive] = useState<(typeof galleryFilters)[number]>("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section className="bg-gray-50 px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h3 className="mb-6 font-display text-xl font-bold text-navy-900 sm:text-2xl">
          Project Gallery
        </h3>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition-colors ${
                active === filter
                  ? "bg-green-500 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-brand-green hover:text-brand-green-dark"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {filtered.map((item, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg">
              <img src={item.photo}  className="h-full w-full" />
            </div>
          ))}
        </div>

        {/* <button className="mt-9 inline-flex items-center gap-2 rounded-md border border-brand-green px-5 py-2.5 text-xs font-semibold text-brand-green-dark transition-colors hover:bg-brand-green/10">
          VIEW FULL GALLERY
          <ArrowRight className="h-3.5 w-3.5" />
        </button> */}
      </div>
    </section>
  );
}
