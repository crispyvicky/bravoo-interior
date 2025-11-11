import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const footerColumns = [
  {
    links: [
      "ALL PRODUCTR",
      "BEST SELLERS",
      "NEW ARRIVALS",
      "LOWEST PRICES",
      "DELIVERY",
    ],
  },
  {
    links: ["PRIVACY POLICY", "ORDER ONLINE", "CONTACT US", "RETURNS & CLAIMS"],
  },
  {
    links: ["ABOUT US", "OUR PROMISE", "MY ACCOUNT"],
  },
  {
    links: ["BLOG", "REVIEWS", "PRIVACY POLICY", "LOOKBOOK"],
  },
];

const socialLinks = [
  { name: "INSTAGRAM" },
  { name: "FACEBOOK" },
  { name: "PINTEREST" },
  { name: "TWITTER" },
];

const paymentMethods = [
  {
    name: "Amazon",
    image: "/amazon.png",
    className: "mt-[12.8px] w-[39.16px] h-[7.72px] ml-[3.2px]",
  },
  {
    name: "Visa",
    image: "/xmlid-34-.svg",
    className: "absolute w-[62.06%] h-[37.36%] top-[32.50%] left-[18.97%]",
    isRelative: true,
  },
  {
    name: "Mastercard",
    images: [
      {
        src: "/shape.svg",
        className: "absolute w-[12.96%] h-[27.85%] top-[32.44%] left-[45.58%]",
      },
      {
        src: "/shape-3.svg",
        className: "absolute w-[12.01%] h-[20.30%] top-[40.62%] left-[58.48%]",
      },
      {
        src: "/path-2.svg",
        className: "absolute w-[13.57%] h-[27.46%] top-[41.24%] left-[70.92%]",
      },
      {
        src: "/path-4.svg",
        className: "absolute w-[10.94%] h-[15.02%] top-[43.33%] left-[26.90%]",
      },
      {
        src: "/path-1.svg",
        className: "absolute w-[17.72%] h-[12.94%] top-[49.29%] left-[16.73%]",
      },
      {
        src: "/path.svg",
        className: "absolute w-[4.99%] h-[14.37%] top-[39.04%] left-[15.51%]",
      },
      {
        src: "/path-3.svg",
        className: "absolute w-[17.80%] h-[12.94%] top-[30.22%] left-[16.73%]",
      },
    ],
    isMultiple: true,
  },
  {
    name: "American Express",
    images: [
      {
        src: "/shape-1.svg",
        className: "absolute w-[20.76%] h-[72.61%] top-[12.50%] left-[62.08%]",
      },
      {
        src: "/shape-4.svg",
        className: "absolute w-[20.75%] h-[72.61%] top-[12.50%] left-[15.51%]",
      },
      {
        src: "/shape-2.svg",
        className: "absolute w-[20.75%] h-[72.61%] top-[12.50%] left-[38.80%]",
      },
    ],
    isMultiple: true,
  },
  {
    name: "Discover",
    images: [
      {
        src: "/path-7.svg",
        className: "absolute w-[17.85%] h-[46.16%] top-[26.28%] left-[41.31%]",
      },
      {
        src: "/path-6.svg",
        className: "absolute w-[33.00%] h-[58.71%] top-[20.00%] left-[17.24%]",
      },
      {
        src: "/path-5.svg",
        className: "absolute w-[33.00%] h-[58.71%] top-[20.00%] left-[50.22%]",
      },
    ],
    isMultiple: true,
  },
  {
    name: "PayPal",
    images: [
      {
        src: "/polygon9.svg",
        className: "absolute w-[10.82%] h-[35.00%] top-[33.58%] left-[37.74%]",
      },
      {
        src: "/path11.svg",
        className: "absolute w-[19.97%] h-[36.16%] top-[32.95%] left-[48.56%]",
      },
      {
        src: "/path13.svg",
        className: "absolute w-[23.89%] h-[35.00%] top-[33.58%] left-[67.09%]",
      },
      {
        src: "/path15.svg",
        className: "absolute w-[23.48%] h-[34.96%] top-[33.58%] left-[15.74%]",
      },
      {
        src: "/path17.svg",
        className: "absolute w-[16.16%] h-[19.03%] top-[33.58%] left-[8.79%]",
      },
    ],
    isMultiple: true,
  },
];

export const ContactFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-primary-01 py-20 px-[170px]">
      <div className="flex flex-col gap-[79px]">
        <div className="flex flex-col items-center gap-[79px]">
          <h2 className="w-[809px] font-heading-03 font-[number:var(--heading-03-font-weight)] [font-style:var(--heading-03-font-style)] text-primary-03 text-[length:var(--heading-03-font-size)] text-center tracking-[var(--heading-03-letter-spacing)] leading-[var(--heading-03-line-height)]">
            We Provide best handpicked home decor
          </h2>

          <Button
            variant="outline"
            className="w-[301px] h-[69px] bg-transparent border-[#fcfbfa] hover:bg-transparent"
          >
            <span className="font-button-02 font-[number:var(--button-02-font-weight)] text-primary-03 text-[length:var(--button-02-font-size)] tracking-[var(--button-02-letter-spacing)] leading-[var(--button-02-line-height)] [font-style:var(--button-02-font-style)]">
              EXPLORE OUR PRODUCTS
            </span>
          </Button>
        </div>

        <Separator className="bg-secondary-03 h-px" />

        <div className="flex gap-[104px]">
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="font-label-big font-[number:var(--label-big-font-weight)] text-secondary-03 text-[length:var(--label-big-font-size)] tracking-[var(--label-big-letter-spacing)] leading-[var(--label-big-line-height)] [font-style:var(--label-big-font-style)]">
              SUBSCRIBE TO RECEIVE GRAPE NEWS &amp; OFFERS
            </h3>

            <div className="relative bg-primary-02 h-[68px]">
              <Input
                placeholder="Enter your email"
                className="h-full bg-transparent border-0 text-secondary-02 font-body-02 font-[number:var(--body-02-font-weight)] text-[length:var(--body-02-font-size)] tracking-[var(--body-02-letter-spacing)] leading-[var(--body-02-line-height)] [font-style:var(--body-02-font-style)] placeholder:text-secondary-02 px-6"
              />
              <img
                className="absolute top-[22px] right-6 w-6 h-6 pointer-events-none"
                alt="Right arrow"
                src="/right-arrow.svg"
              />
            </div>

            <div className="flex gap-4 items-start">
              <Checkbox className="w-4 h-4 rounded border-[#f8f5f3] mt-px" />
              <p className="flex-1 font-caption font-[number:var(--caption-font-weight)] text-secondary-03 text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                I&#39;ve read the Privacy Policy and I consent to Halal Interior
                sending me marketing communications
              </p>
            </div>
          </div>

          <div className="flex gap-[104px]">
            {footerColumns.map((column, columnIndex) => (
              <nav key={columnIndex} className="flex flex-col gap-[19px]">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="font-label-medium font-[number:var(--label-medium-font-weight)] text-secondary-03 text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] hover:text-primary-03 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <Separator className="bg-secondary-03 h-px" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6 h-4" alt="Us" src="/us.svg" />
            <span className="font-caption font-[number:var(--caption-font-weight)] text-secondary-03 text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
              United States
            </span>
            <ChevronDownIcon className="w-4 h-4 text-secondary-03" />
          </div>

          <div className="flex items-center gap-6">
            <span className="font-caption font-[number:var(--caption-font-weight)] text-secondary-03 text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
              We Accept
            </span>

            <div className="flex gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="w-[46px] h-8 bg-primary-03 rounded relative flex items-center justify-center"
                >
                  {method.isMultiple ? (
                    method.images?.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        className={img.className}
                        alt={`${method.name} ${imgIndex}`}
                        src={img.src}
                      />
                    ))
                  ) : method.isRelative ? (
                    <img
                      className={method.className}
                      alt={method.name}
                      src={method.image}
                    />
                  ) : (
                    <img
                      className={method.className}
                      alt={method.name}
                      src={method.image}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-03 h-px" />

        <div className="relative">
          <div className="grid grid-cols-4 h-[58px]">
            {socialLinks.map((social, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="flex items-center justify-center font-label-small font-[number:var(--label-small-font-weight)] text-secondary-03 text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)] hover:text-primary-03 transition-colors border-l border-secondary-03 first:border-l-0"
                >
                  {social.name}
                </a>
              </React.Fragment>
            ))}
          </div>
          <Separator className="bg-secondary-03 h-px mt-0" />
        </div>

        <Separator className="bg-secondary-03 h-px" />

        <div className="flex items-center justify-between">
          <p className="font-label-small font-[number:var(--label-small-font-weight)] text-secondary-02 text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
            © 2021 CHIRANJITH.COM. ALL RIGHTS RESERVED.
          </p>

          <p className="font-label-small font-[number:var(--label-small-font-weight)] text-secondary-02 text-[length:var(--label-small-font-size)] text-right tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
            PRIVACY POLICY | TERMS OF USE
          </p>
        </div>
      </div>
    </footer>
  );
};
