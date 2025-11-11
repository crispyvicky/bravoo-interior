import React from "react";

const features = [
  {
    label: "FIND",
    heading: "Unique & Modren Products",
    description:
      "A considered line of versatile products designed to work in every room",
  },
  {
    label: "BUY",
    heading: "Expertly Vettted Quality",
    description:
      "Beautiful, durable materials selected for a lover impact and longer lifespan",
  },
  {
    label: "COLLECT",
    heading: "Delivery At Your door",
    description:
      "Support, guidance, and original content to help you organize with intention",
  },
];

export const UniqueFeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center gap-[177px] py-8">
      {features.map((feature, index) => (
        <div key={index} className="w-[380px] flex flex-col items-center">
          <div className="font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-[length:var(--label-medium-font-size)] text-center tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
            {feature.label}
          </div>

          <h3 className="w-full mt-1.5 font-heading-05 font-[number:var(--heading-05-font-weight)] text-primary-01 text-[length:var(--heading-05-font-size)] text-center tracking-[var(--heading-05-letter-spacing)] leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
            {feature.heading}
          </h3>

          <p className="w-[374px] mt-5 font-body-02 font-[number:var(--body-02-font-weight)] text-secondary-01 text-[length:var(--body-02-font-size)] text-center tracking-[var(--body-02-letter-spacing)] leading-[var(--body-02-line-height)] [font-style:var(--body-02-font-style)]">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
};
