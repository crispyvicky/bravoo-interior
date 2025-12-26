
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="font-heading-01 font-[number:var(--heading-01-font-weight)] text-primary-01 text-3xl md:text-5xl lg:text-[length:var(--heading-01-font-size)] tracking-[var(--heading-01-letter-spacing)] leading-[var(--heading-01-line-height)] [font-style:var(--heading-01-font-style)]">
              ROOTED IN HERITAGE, CRAFTED FOR MODERN LIVING.
            </h1>

            <Link to="/portfolio">
              <Button
                variant="outline"
                className="w-fit h-auto px-6 py-3 md:px-10 md:py-6 border border-solid border-black bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                <span className="font-button-02 font-[number:var(--button-02-font-weight)] text-primary-01 text-sm md:text-[length:var(--button-02-font-size)] tracking-[var(--button-02-letter-spacing)] leading-[var(--button-02-line-height)] [font-style:var(--button-02-font-style)]">
                  VIEW OUR WORK
                </span>
              </Button>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
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