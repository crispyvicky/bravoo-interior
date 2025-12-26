
"use client";

import React from "react";
import { Scroll, DraftingCompass, Sparkles } from "lucide-react";

const features = [
  {
    icon: Scroll,
    label: "LEGACY",
    heading: "Rooted in Heritage",
    description:
      "Bringing 30 years of family tradition and expertise to every line we draw.",
  },
  {
    icon: DraftingCompass,
    label: "CRAFT",
    heading: "Artisanal Excellence",
    description:
      "We believe in the human touch. Every detail is curated with purpose and precision.",
  },
  {
    icon: Sparkles,
    label: "SOUL",
    heading: "Holistic Living",
    description:
      "Designing spaces that breathe, inspiring peace and productivity in your daily life.",
  },
];

export const UniqueFeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-[100px] bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-01/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-8 transition-all duration-500"
            >
              <div className="mb-6 text-primary-01/80 group-hover:text-primary-01 group-hover:scale-110 transition-all duration-500">
                <feature.icon strokeWidth={1} className="w-12 h-12" />
              </div>

              <span className="font-label-medium text-[10px] tracking-[0.3em] text-secondary-02 mb-4 uppercase">
                {feature.label}
              </span>

              <h3 className="font-heading-03 text-3xl text-primary-01 mb-4 italic">
                {feature.heading}
              </h3>

              <p className="font-body-02 text-secondary-01 text-sm max-w-[280px] leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
