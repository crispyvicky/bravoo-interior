import { InstagramIcon } from "lucide-react";
import React from "react";

const instagramImages = [
  {
    src: "/image-1.svg",
    alt: "Image",
  },
  {
    src: "/image-2.svg",
    alt: "Image",
  },
  {
    src: "/image-3.svg",
    alt: "Image",
  },
  {
    src: "/image-4.svg",
    alt: "Image",
  },
];

export const InstagramFeedSection = (): JSX.Element => {
  return (
    <section className="w-full py-10">
      <div className="flex items-start justify-between mb-[51px]">
        <h2 className="font-heading-05 font-[number:var(--heading-05-font-weight)] text-primary-01 text-[length:var(--heading-05-font-size)] tracking-[var(--heading-05-letter-spacing)] leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
          #halallab
        </h2>

        <div className="flex items-center gap-2">
          <InstagramIcon className="w-6 h-6 text-secondary-01" />
          <div className="font-label-medium font-[number:var(--label-medium-font-weight)] text-secondary-01 text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
            FOLLOW US ON INSTAGRAM
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[31px]">
        {instagramImages.map((image, index) => (
          <div key={index} className="aspect-[366/392] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={image.alt}
              src={image.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
