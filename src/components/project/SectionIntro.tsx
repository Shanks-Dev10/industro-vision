export default function SectionIntro() {
  return (
    <section className="bg-white px-5 pt-16 text-center lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <div className="flex items-center gap-3 text-[14px] font-semibold tracking-widest text-[#009999]">
          <span className="h-px w-8 bg-[#009999]" />
          OUR WORK
          <span className="h-px w-8 bg-[#009999]" />
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          Precision Weighing Solutions for Safer Railways
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
          Intelligent railway weighing solutions engineered for accurate load
          measurement, optimized freight movement, and enhanced railway safety.
        </p>
      </div>
    </section>
  );
}
