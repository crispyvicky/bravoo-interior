
import { CategoryDisplaySection } from "./sections/CategoryDisplaySection";
import { HeroSection } from "./sections/HeroSection";
import { InstagramFeedSection } from "./sections/InstagramFeedSection";
import { NewArrivalsSection } from "./sections/NewArrivalsSection";
import { RoomSelectionSection } from "./sections/RoomSelectionSection";
import { TaglineSection } from "./sections/TaglineSection";
import { UniqueFeaturesSection } from "./sections/UniqueFeaturesSection";

export const HomeV = (): JSX.Element => {
  return (
    <div className="bg-primary-03 overflow-hidden w-full relative">
      <HeroSection />
      <UniqueFeaturesSection />
      <NewArrivalsSection />
      <CategoryDisplaySection />
      <TaglineSection />
      <RoomSelectionSection />
      <InstagramFeedSection />
    </div>
  );
};
