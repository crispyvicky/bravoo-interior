import { SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const navigationItems = [
  { label: "NEW IN", active: true },
  { label: "FURNITURES", active: false },
  { label: "LIGHTS", active: false },
  { label: "RUGS", active: false },
  { label: "DECOR", active: false },
  { label: "ACCESSORIES", active: false },
];

const leftMenuItems = [{ label: "ABOUT" }, { label: "LOOKBOOK" }];

export const MainHeaderSection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col bg-transparent">
      <div className="w-full h-10 relative bg-primary-01">
        <div className="flex items-center justify-center h-full relative">
          <div className="font-label-small font-[number:var(--label-small-font-weight)] text-primary-03 text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
            FREE WORDWIDE SHIPPING DELIVERY OVER $300
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[141px] top-1/2 -translate-y-1/2 h-auto p-0 hover:bg-transparent"
          >
            <XIcon className="w-4 h-4 text-primary-03" />
          </Button>
        </div>
      </div>

      <div className="w-full h-[108px] relative flex items-center justify-between px-[125px] mt-[29px]">
        <div className="flex items-center gap-[110px]">
          {leftMenuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-0 font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] hover:bg-transparent"
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-[340px] h-[30px]">
          <img className="w-[205.05px] h-[31.5px]" alt="Logo" src="/logo.png" />
        </div>

        <nav className="flex items-center gap-[88px] absolute left-1/2 top-[73px] -translate-x-1/2 translate-x-[93px]">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              <Button
                variant="ghost"
                className="h-auto p-0 font-label-medium font-[number:var(--label-medium-font-weight)] text-primary-01 text-[length:var(--label-medium-font-size)] text-center tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] hover:bg-transparent"
              >
                {item.label}
              </Button>
              {item.active && (
                <div className="absolute -bottom-[34px] left-1/2 -translate-x-1/2 w-[72px] h-[3px] bg-primary-01" />
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-[88px]">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto p-0 hover:bg-transparent"
          >
            <SearchIcon className="w-6 h-6 text-primary-01" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-auto p-0 hover:bg-transparent"
          >
            <UserIcon className="w-6 h-6 text-primary-01" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-auto p-0 hover:bg-transparent"
          >
            <ShoppingCartIcon className="w-6 h-6 text-primary-01" />
          </Button>
        </div>

        <Separator className="absolute bottom-0 left-0 w-full" />
      </div>
    </header>
  );
};
