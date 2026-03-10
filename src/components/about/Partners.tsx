const partners = ["sandtex", "studio45", "srbitz", "cameo"];

const Partners = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span
          className="text-sm font-semibold uppercase tracking-widest text-secondary"
          data-aos="fade-up"
        >
          Partners
        </span>
        <h2
          className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We exist to help our clients and partners build their dreams
        </h2>
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-20 w-44 items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-sm"
            >
              <span className="text-xl font-extrabold uppercase tracking-wider text-muted-foreground/50">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
