import React from "react";
import { Button } from "../../../../components/ui/button";

const categories = [
  {
    name: "Treandy Sofa Set",
    count: "(60)",
    isActive: false,
  },
  {
    name: "Minimal & Modern Chairs",
    count: "(99)",
    isActive: true,
  },
  {
    name: "Accesories For Room",
    count: "(85)",
    isActive: false,
  },
  {
    name: "Kitchen Items",
    count: "(85)",
    isActive: false,
  },
  {
    name: "Outdoor Decor",
    count: "(85)",
    isActive: false,
  },
];

export const CategoryDisplaySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-secondary-05 py-[100px]">
      <div className="flex flex-col items-center gap-[83px]">
        <div className="font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-[length:var(--label-medium-font-size)] text-center tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
          SHOP BY CATEGORY
        </div>

        <div className="relative flex flex-col items-center">
          <img
            className="w-[1549px] h-[392px]"
            alt="Category showcase"
            src="/hover-image.png"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[128px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <div
                  className={`font-heading-04 font-[number:var(--heading-04-font-weight)] text-[length:var(--heading-04-font-size)] text-center tracking-[var(--heading-04-letter-spacing)] leading-[var(--heading-04-line-height)] [font-style:var(--heading-04-font-style)] ${
                    category.isActive ? "text-primary-01" : "text-secondary-02"
                  }`}
                >
                  {category.name}
                </div>
                <div
                  className={`font-label-medium font-[number:var(--label-medium-font-weight)] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] ${
                    category.isActive ? "text-primary-01" : "text-secondary-02"
                  }`}
                >
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="link"
          className="h-auto p-0 font-button-01 font-[number:var(--button-01-font-weight)] text-primary-01 text-[length:var(--button-01-font-size)] tracking-[var(--button-01-letter-spacing)] leading-[var(--button-01-line-height)] underline [font-style:var(--button-01-font-style)]"
        >
          SEE MORE
        </Button>
      </div>
    </section>
  );
};
