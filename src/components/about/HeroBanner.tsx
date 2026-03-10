import aboutHeroImg from "@/assets/about-hero.jpg";


const HeroBanner=()=>{
    return (
              
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHeroImg} alt="Industrial factory" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-24 md:py-32">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm text-primary-foreground/60">
              <a href="/" className="hover:text-secondary transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-secondary">About</span>
            </p>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-6xl">About Us</h1>
          </div>
        </div>
      </section>
    )
}
export default HeroBanner