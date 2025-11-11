import React from "react";

const taglineRows = [
  {
    items: [
      { type: "text", content: "The", width: "w-[163px]" },
      {
        type: "image",
        src: "/rectangle-263.svg",
        width: "w-60",
        marginLeft: "ml-8",
      },
      {
        type: "text",
        content: "Halal.Interior A",
        width: "w-[713px]",
        marginLeft: "ml-[33px]",
      },
    ],
    containerClass: "left-16 w-[1185px]",
  },
  {
    items: [
      { type: "text", content: "Contemporary House For The", width: "w-full" },
    ],
    containerClass: "left-0",
    topClass: "top-[127px]",
  },
  {
    items: [
      { type: "text", content: "Modern", width: "w-[348px]" },
      {
        type: "image",
        src: "/rectangle-426.svg",
        width: "w-64",
        marginLeft: "",
      },
      { type: "text", content: "Human", width: "w-[336px]", marginLeft: "" },
    ],
    containerClass: "left-[152px] w-[1008px] gap-8",
    topClass: "top-[287px]",
  },
];

export const TaglineSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="relative mx-auto max-w-[1311px] h-[415px]">
        {taglineRows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`absolute ${row.topClass || "top-0"} ${row.containerClass} h-32 flex ${rowIndex === 1 ? "" : "items-center"}`}
          >
            {row.items.map((item, itemIndex) => {
              if (item.type === "text") {
                return (
                  <div
                    key={`text-${rowIndex}-${itemIndex}`}
                    className={`${item.width} h-32 ${item.marginLeft || ""} font-display-text font-[number:var(--display-text-font-weight)] [font-style:var(--display-text-font-style)] text-primary-01 text-[length:var(--display-text-font-size)] text-center tracking-[var(--display-text-letter-spacing)] leading-[var(--display-text-line-height)] whitespace-nowrap`}
                  >
                    {item.content}
                  </div>
                );
              } else {
                return (
                  <img
                    key={`image-${rowIndex}-${itemIndex}`}
                    className={`${item.width} h-32 ${item.marginLeft || ""} object-cover`}
                    alt="Rectangle"
                    src={item.src}
                  />
                );
              }
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
