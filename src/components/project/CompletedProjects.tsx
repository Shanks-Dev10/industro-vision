import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import TrackPhoto from "./TrackPhoto";
import { completedProjects } from "@/data/content";


export default function CompletedProjects() {
  return (
    <section className="bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
            Completed Projects
          </h3>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-md border border-brand-green px-4 py-2 text-xs font-semibold text-brand-green-dark transition-colors hover:bg-brand-green/10 sm:inline-flex"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {completedProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-64">
                <img src={project.photo} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded bg-brand-green px-3 py-1 text-xs font-bold text-white">
                  {project.id}
                </span>
              </div>

              <div className="p-5">
                <h4 className="font-display text-base font-bold text-navy-900">
                  {project.title}
                </h4>

                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-brand-green-dark" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-green-500">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>

                <div className="mt-4 grid grid-cols-4 gap-2">
                  {project.thumbs.map((thumb, i) => (
                    <div key={i} className="h-16 overflow-hidden rounded-md">
                      <img src={thumb}  className="h-full w-full" />
                    </div>
                  ))}
                </div>

                <button className="mt-4 inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-xs font-semibold text-navy-900 transition-colors hover:border-brand-green hover:text-brand-green-dark">
                  VIEW GALLERY
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
