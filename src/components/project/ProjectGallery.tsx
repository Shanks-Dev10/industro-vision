import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TrackPhoto from "./TrackPhoto";
import {
  completedProjects,
  galleryFilters,
  galleryItems,
} from "@/data/content";
import { Item } from "@radix-ui/react-accordion";

export default function ProjectGallery() {
  const [active, setActive] = useState<(typeof galleryFilters)[number]>("All");
  const [popupImage, setPopupImage] = useState(null);

  const videos = [
    {
      id: "wN-ubZ_GzEo",
      title: "Welcome to Railmet | Smart Rail Automation Begins Here",
    },
    {
      id: "Q1ztUKKGZCc",
      title:
        "Overload Is Operational Risk | Real-Time Rail Weight Monitoring by Railmet",
    },
    {
      id: "Omb9TmI3-ng",
      title:
        "One overloaded wagon can silently damage railway tracks, wagons, and freight operations.",
    },
    {
      id: "Orm7AhTNEso",
      title: "Railmet Video 4",
    },
    {
      id: "uMmTAjV8jqs",
      title: "Railmet Video 5",
    },
    {
      id: "Yy_IDtgHlKs",
      title: "Railmet Video 6",
    },
  ];

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section className="bg-gray-50 px-5 py-14 lg:px-8" id="gallery">
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
                  ? "bg-[#009999] text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-brand-green hover:text-brand-green-dark"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setPopupImage(item.photo)}
            >
              <img
                src={item.photo}
                className="h-full w-full object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Image Popup */}
        {popupImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
            onClick={() => setPopupImage(null)}
          >
            <div
              className="relative max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPopupImage(null)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ×
              </button>

              <img
                src={popupImage}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        )}

        {/* <button className="mt-9 inline-flex items-center gap-2 rounded-md border border-brand-green px-5 py-2.5 text-xs font-semibold text-brand-green-dark transition-colors hover:bg-brand-green/10">
          VIEW FULL GALLERY
          <ArrowRight className="h-3.5 w-3.5" />
        </button> */}
      </div>

      <div className="mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
