import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";

const products = [
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000",
    title: "Jubilee Hills Villa",
    price: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    title: "Banjara Hills Apt",
    price: "Renovation",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    title: "Tech Park Office",
    price: "Commercial",
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000",
    title: "Manikonda Home",
    price: "Interiors",
  },
];

export const NewArrivalsSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 md:gap-8 lg:w-[410px] flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <h2 className="font-heading-04 font-[number:var(--heading-04-font-weight)] text-primary-01 text-2xl md:text-3xl lg:text-[length:var(--heading-04-font-size)] tracking-[var(--heading-04-letter-spacing)] leading-[var(--heading-04-line-height)] [font-style:var(--heading-04-font-style)]">
              Signature Projects
            </h2>
          </div>

          <p className="font-body-02 font-[number:var(--body-02-font-weight)] text-secondary-01 text-sm md:text-[length:var(--body-02-font-size)] tracking-[var(--body-02-letter-spacing)] leading-[var(--body-02-line-height)] [font-style:var(--body-02-font-style)]">
            A glimpse into our journey of transforming empty shells into vibrant, living stories.
          </p>

          <Button
            variant="link"
            className="h-auto p-0 font-button-01 font-[number:var(--button-01-font-weight)] text-primary-01 text-sm md:text-[length:var(--button-01-font-size)] tracking-[var(--button-01-letter-spacing)] leading-[var(--button-01-line-height)] underline [font-style:var(--button-01-font-style)] justify-start"
          >
            VIEW PORTFOLIO
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-8 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="aspect-[340/420] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-300"
                    alt={product.title}
                    src={product.image}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-heading-07 font-[number:var(--heading-07-font-weight)] text-primary-01 text-sm md:text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] [font-style:var(--heading-07-font-style)]">
                    {product.title}
                  </h3>
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