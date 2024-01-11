import React from "react";

import { HomeCards } from "./HomeCards";
import { HomeFeaturedTopics } from "./HomeFeaturedTopics";
import { HomeVideoTutorials } from "./HomeVideoTutorials";
import { HomeIntroSection } from "./HomeIntroSection";
import { HomeSupportedBy } from "./HomeSupportedBy";
import { HomeCategories } from "./HomeCategories";
import { HomeRoadMap } from "./HomeRoadMap";
import { HomeBlogPosts } from "./HomeBlogPosts";
import { BuildingOnSei } from "./BuildingOnSei";
import { cn } from "@/lib/utils";
import { HomeSeiCommunity } from "./HomeSeiCommunity";

const HomePage: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <HomeIntroSection />
      <HomeCards />
      <HomeFeaturedTopics />
      <HomeVideoTutorials />
      <div className="w-full">{children}</div>
      <HomeSupportedBy />
      <HomeCategories />
      <HomeRoadMap />
      <HomeBlogPosts />
      <BuildingOnSei />
      <HomeSeiCommunity />
    </div>
  );
};

export { HomePage };
