import React from "react";
import { CategoryDisplaySection } from "./sections/CategoryDisplaySection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InstagramFeedSection } from "./sections/InstagramFeedSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";
import { NewArrivalsSection } from "./sections/NewArrivalsSection";
import { RoomSelectionSection } from "./sections/RoomSelectionSection";
import { TaglineSection } from "./sections/TaglineSection";
import { UniqueFeaturesSection } from "./sections/UniqueFeaturesSection";

export const HomeV = (): JSX.Element => {
  return (
    <div className="bg-primary-03 overflow-hidden w-full relative">
      <MainHeaderSection />
      <HeroSection />
      <UniqueFeaturesSection />
      <NewArrivalsSection />
      <CategoryDisplaySection />
      <TaglineSection />
      <RoomSelectionSection />
      <InstagramFeedSection />
      <ContactFooterSection />
    </div>
  );
};
