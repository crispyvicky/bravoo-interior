

const features = [
  {
    label: "LEGACY",
    heading: "Rooted in Heritage",
    description:
      "Bringing 30 years of family tradition and expertise to every line we draw.",
  },
  {
    label: "CRAFT",
    heading: "Artisanal Excellence",
    description:
      "We believe in the human touch. Every detail is curated with purpose and precision.",
  },
  {
    label: "SOUL",
    heading: "Holistic Living",
    description:
      "Designing spaces that breathe, inspiring peace and productivity in your daily life.",
  },
];

export const UniqueFeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-8 lg:gap-[100px] xl:gap-[177px] py-12 px-4 container mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[30%] max-w-[380px] flex flex-col items-center">
          <div className="font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-sm md:text-[length:var(--label-medium-font-size)] text-center tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
            {feature.label}
          </div>

          <h3 className="w-full mt-1.5 font-heading-05 font-[number:var(--heading-05-font-weight)] text-primary-01 text-xl md:text-[length:var(--heading-05-font-size)] text-center tracking-[var(--heading-05-letter-spacing)] leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
            {feature.heading}
          </h3>

          <p className="w-full mt-4 md:mt-5 font-body-02 font-[number:var(--body-02-font-weight)] text-secondary-01 text-sm md:text-[length:var(--body-02-font-size)] text-center tracking-[var(--body-02-letter-spacing)] leading-[var(--body-02-line-height)] [font-style:var(--body-02-font-style)]">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
};