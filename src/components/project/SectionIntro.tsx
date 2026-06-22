export default function SectionIntro() {
  return (
    <section className="bg-white px-5 pt-16 text-center lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-brand-green-dark">
          <span className="h-px w-8 bg-brand-green" />
          OUR WORK
          <span className="h-px w-8 bg-brand-green" />
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          Delivering Innovation on Railway Tracks
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
          Railmet has successfully deployed advanced railway monitoring systems at
          multiple locations. Our solutions operate reliably under demanding
          conditions and support safer, smarter railway operations.
        </p>
      </div>
    </section>
  );
}
