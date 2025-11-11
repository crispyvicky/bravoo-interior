import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const products = [
  {
    image: "/rectangle-202-2.svg",
    title: "Arm Sofas",
    price: "$45.80",
  },
  {
    image: "/rectangle-202-3.svg",
    title: "Arm Sofas",
    price: "$45.80",
  },
  {
    image: "/rectangle-202-1.svg",
    title: "Arm Sofas",
    price: "$45.80",
  },
  {
    image: "/rectangle-202.svg",
    title: "Arm Sofas",
    price: "$45.80",
  },
];

export const NewArrivalsSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 md:gap-8 lg:w-[410px] flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <h2 className="font-heading-04 font-[number:var(--heading-04-font-weight)] text-primary-01 text-2xl md:text-3xl lg:text-[length:var(--heading-04-font-size)] tracking-[var(--heading-04-letter-spacing)] leading-[var(--heading-04-line-height)] [font-style:var(--heading-04-font-style)]">
              New Arrivals
            </h2>
            <span className="text-primary-01 font-label-medium font-[number:var(--label-medium-font-weight)] text-sm md:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
              (56)
            </span>
          </div>

          <p className="font-body-02 font-[number:var(--body-02-font-weight)] text-secondary-01 text-sm md:text-[length:var(--body-02-font-size)] tracking-[var(--body-02-letter-spacing)] leading-[var(--body-02-line-height)] [font-style:var(--body-02-font-style)]">
            We&apos;ve designed and curated pieces that are a cut above your
            average home goods, because when you level up your everyday objects,
            you elevate your daily rituals.
          </p>

          <Button
            variant="link"
            className="h-auto p-0 font-button-01 font-[number:var(--button-01-font-weight)] text-primary-01 text-sm md:text-[length:var(--button-01-font-size)] tracking-[var(--button-01-letter-spacing)] leading-[var(--button-01-line-height)] underline [font-style:var(--button-01-font-style)] justify-start"
          >
            VIEW ALL
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-8 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="aspect-[340/420] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-heading-07 font-[number:var(--heading-07-font-weight)] text-primary-01 text-sm md:text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] [font-style:var(--heading-07-font-style)]">
                    {product.title}
                  </h3>
                  <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-sm md:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 md:gap-9">
            <div className="flex-1 relative h-px">
              <div className="absolute inset-0 bg-secondary-02 opacity-30" />
              <div className="absolute inset-0 bg-primary-01 w-[30%]" />
            </div>
            <div className="flex gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 p-0 hover:bg-transparent"
              >
                <ChevronLeftIcon className="h-5 w-5 text-primary-01" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 p-0 hover:bg-transparent"
              >
                <ChevronRightIcon className="h-5 w-5 text-primary-01" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};