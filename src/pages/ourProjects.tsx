import aboutHeroImg from "@/assets/about-hero.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Hero from "@/components/project/Hero";
import SectionIntro from "@/components/project/SectionIntro";
import CompletedProjects from "@/components/project/CompletedProjects";
import ProjectImpact from "@/components/project/ProjectImpact";
import InstallationProcess from "@/components/project/InstallationProcess";
import ProjectGallery from "@/components/project/ProjectGallery";


export default function Projects() {
  return (
    <>
    <Header/>
      {/* Hero Section */}
      {/* <section className="relative h-[420px] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={aboutHeroImg}
                  alt="Industrial factory"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/85" />
                <div className="absolute inset-0 dot-pattern opacity-30" />
              </div>
      
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-2">
                <div data-aos="fade-up">
                  <h1 className="text-5xl font-extrabold text-primary-foreground md:text-6xl">
                    Our Projects
                  </h1>
                  <div className="my-4 flex items-center gap-2 text-sm text-primary-foreground/60">
                    <Link to={"/"}>Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-[#009999]">OurProjects</span>
                  </div>
                </div>
              </div>
            </section> */}

      {/* Projects Gallery */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-[#0AA5A5] font-semibold uppercase tracking-wider">
              Project Gallery
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Our Completed Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-[30px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-xl">
                      {project.title}
                    </h3>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section> */}

      <Hero/>
      <SectionIntro />
      <CompletedProjects/>
      <ProjectImpact />
      <InstallationProcess />
      <ProjectGallery />
      <Footer/>
    </>
  );
}