import React from "react";
import { Button } from "../../../../components/ui/button";

const roomData = [
  { name: "Kitchen Room", count: 19, isActive: true },
  { name: "Living Room", count: 105, isActive: false },
  { name: "Home Office", count: 85, isActive: false },
  { name: "Entryway", count: 51, isActive: false },
  { name: "Dining Room", count: 15, isActive: false },
  { name: "Kids Room", count: 0, isActive: false },
  { name: "Bed Room", count: 99, isActive: false },
];

export const RoomSelectionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-secondary-05 py-12 md:py-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-sm md:text-[length:var(--label-medium-font-size)] text-center tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] mb-8 md:mb-[83px]">
          SHOP BY ROOM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-[1500px] mx-auto">
          {roomData.map((room, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto p-0 flex items-start gap-2 hover:bg-transparent w-full ${
                room.isActive ? "relative" : ""
              }`}
            >
              {room.isActive && (
                <div className="absolute inset-0 -z-10 bg-[url(/image.svg)] bg-cover bg-center" />
              )}
              <span
                className={`font-heading-02 font-[number:var(--heading-02-font-weight)] text-2xl md:text-3xl lg:text-[length:var(--heading-02-font-size)] tracking-[var(--heading-02-letter-spacing)] leading-[var(--heading-02-line-height)] [font-style:var(--heading-02-font-style)] ${
                  room.isActive ? "text-primary-01" : "text-secondary-02"
                }`}
              >
                {room.isActive ? room.name : `/ ${room.name}`}
              </span>
              <span
                className={`font-label-medium font-[number:var(--label-medium-font-weight)] text-sm md:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] ${
                  room.isActive ? "text-secondary-01" : "text-secondary-02"
                }`}
              >
                ({room.count})
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};