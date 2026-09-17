export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16">
        <div className="mb-2.5 text-[13px] tracking-[0.15em] text-gold">
          {eyebrow}
        </div>
        <h1 className="font-serif text-[28px] leading-tight sm:text-[34px] lg:text-[38px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-[640px] text-[15px] text-onbrand sm:text-[15.5px]">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
