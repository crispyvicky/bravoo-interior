import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const roomData = [
  { name: "The Heart (Kitchen)", count: "Culinary", image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000" },
  { name: "The Sanctuary (Bedroom)", count: "Rest", image: "https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=1000" },
  { name: "Gathering (Living)", count: "Social", image: "https://images.unsplash.com/photo-1567016432966-98378891ab0a?q=80&w=1000" },
  { name: "Focus (Office)", count: "Work", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000" },
  { name: "Dining (Feast)", count: "Family", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000" },
  { name: "Outdoors (Nature)", count: "Fresh", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1000" },
];

export const RoomSelectionSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-secondary-05 py-12 md:py-[100px] transition-colors duration-700">
      <div className="container mx-auto px-4">
        <h2 className="font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-sm md:text-[length:var(--label-medium-font-size)] text-center tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] mb-8 md:mb-[83px]">
          CURATED SPACES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-[1500px] mx-auto">
          {roomData.map((room, index) => {
            const isActive = index === activeIndex;
            return (
              <Button
                key={index}
                variant="ghost"
                onClick={() => setActiveIndex(index)}
                className={`relative h-auto p-6 md:p-8 flex flex-col md:flex-row items-center md:items-baseline gap-2 hover:bg-transparent w-full transition-all duration-500 overflow-hidden group rounded-xl
                  ${isActive ? "scale-105 shadow-xl ring-1 ring-black/5" : "opacity-60 hover:opacity-100 scale-100"}
                `}
              >
                {/* Background Image for Active Item */}
                <div
                  className={`absolute inset-0 -z-10 bg-cover bg-center transition-opacity duration-700 ease-in-out
                    ${isActive ? "opacity-20" : "opacity-0 group-hover:opacity-5"}
                  `}
                  style={{ backgroundImage: `url(${room.image})` }}
                />

                <span
                  className={`font-heading-04 font-[number:var(--heading-04-font-weight)] text-xl md:text-2xl lg:text-3xl tracking-[var(--heading-04-letter-spacing)] leading-[var(--heading-04-line-height)] [font-style:var(--heading-04-font-style)] text-center md:text-left whitespace-normal transition-colors duration-300 ${isActive ? "text-primary-01 font-medium" : "text-secondary-02 font-light"
                    }`}
                >
                  {isActive ? room.name : `/ ${room.name}`}
                </span>
                <span
                  className={`font-label-medium font-[number:var(--label-medium-font-weight)] text-xs md:text-sm tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] transition-colors duration-300 ${isActive ? "text-secondary-01 translate-y-0 opacity-100" : "text-secondary-02 opacity-60"
                    }`}
                >
                  ({room.count})
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};