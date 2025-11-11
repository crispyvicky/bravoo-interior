import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="font-heading-01 font-[number:var(--heading-01-font-weight)] text-primary-01 text-[length:var(--heading-01-font-size)] tracking-[var(--heading-01-letter-spacing)] leading-[var(--heading-01-line-height)] [font-style:var(--heading-01-font-style)]">
              WE OFFERING YOU THE BEST HOME DECOR PRODUCTS &amp; ITEMS FOR A
              DREAM HOME
            </h1>

            <Button
              variant="outline"
              className="w-fit h-auto px-10 py-6 border border-solid border-black bg-transparent hover:bg-black hover:text-white transition-colors"
            >
              <span className="font-button-02 font-[number:var(--button-02-font-weight)] text-primary-01 text-[length:var(--button-02-font-size)] tracking-[var(--button-02-letter-spacing)] leading-[var(--button-02-line-height)] [font-style:var(--button-02-font-style)]">
                EXPLORE OUR PRODUCTS
              </span>
            </Button>
          </div>

          <div className="flex justify-end">
            <img
              className="w-full max-w-[819px] h-auto object-cover"
              alt="Images"
              src="/images.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
