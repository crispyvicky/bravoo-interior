import React from "react";

const taglineRows = [
  {
    items: [
      { type: "text", content: "The", width: "w-[163px]", mobileWidth: "w-16" },
      {
        type: "image",
        src: "/rectangle-263.svg",
        width: "w-60",
        mobileWidth: "w-24",
        marginLeft: "ml-4 md:ml-8",
      },
      {
        type: "text",
        content: "Halal.Interior A",
        width: "w-[713px]",
        mobileWidth: "w-40",
        marginLeft: "ml-2 md:ml-[33px]",
      },
    ],
    containerClass:
      "left-4 md:left-16 w-[calc(100%-2rem)] md:w-[1185px]",
    mobileTop: "top-4",
    desktopTop: "top-0",
  },
  {
    items: [
      {
        type: "text",
        content: "Contemporary House For The",
        width: "w-full",
        mobileWidth: "w-full",
      },
    ],
    containerClass: "left-0",
    topClass: "top-[127px]",
    mobileTop: "top-16 md:top-[127px]",
  },
  {
    items: [
      { type: "text", content: "Modern", width: "w-[348px]", mobileWidth: "w-24" },
      {
        type: "image",
        src: "/rectangle-426.svg",
        width: "w-64",
        mobileWidth: "w-16",
      },
      { type: "text", content: "Human", width: "w-[336px]", mobileWidth: "w-24" },
    ],
    containerClass:
      "left-[30px] md:left-[152px] w-[calc(100%-4rem)] md:w-[1008px] gap-2 md:gap-8",
    topClass: "top-[287px]",
    mobileTop: "top-32 md:top-[287px]",
  },
];

export const TaglineSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="relative mx-auto max-w-[1311px] h-64 md:h-[415px]">
        {taglineRows.map((row, rowIndex) => {
          const topClass =
            row.mobileTop || row.topClass || row.desktopTop || "top-0";

          return (
            <div
              key={`row-${rowIndex}`}
              className={`absolute ${topClass} ${row.containerClass} h-32 flex ${
                rowIndex === 1 ? "" : "items-center"
              }`}
            >
              {row.items.map((item, itemIndex) => {
                const widthClass = item.mobileWidth || item.width;

                if (item.type === "text") {
                  return (
                    <div
                      key={`text-${rowIndex}-${itemIndex}`}
                      className={`${widthClass} h-32 ${
                        item.marginLeft || ""
                      } font-display-text font-[number:var(--display-text-font-weight)] [font-style:var(--display-text-font-style)] text-primary-01 text-xl md:text-5xl lg:text-[length:var(--display-text-font-size)] text-center tracking-[var(--display-text-letter-spacing)] leading-[var(--display-text-line-height)] whitespace-nowrap overflow-hidden`}
                    >
                      {item.content}
                    </div>
                  );
                }

                return (
                  <img
                    key={`image-${rowIndex}-${itemIndex}`}
                    className={`${widthClass} h-32 ${
                      item.marginLeft || ""
                    } object-cover`}
                    alt="Tagline Icon"
                    src={item.src}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};
