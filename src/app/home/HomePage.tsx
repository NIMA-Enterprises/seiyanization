import React from "react";

import { cn } from "@/lib/utils";
import { HomeCards } from "./HomeCards";
import { HomeRoadMap } from "./HomeRoadMap";
import { SupportedBy } from "./SupportedBy";
import { BuildingOnSei } from "./BuildingOnSei";
import { HomeBlogPosts } from "./HomeBlogPosts";
import { HomeTools } from "./HomeTools";
import { HomeIntroSection } from "./HomeIntroSection";
import { HomeSeiCommunity } from "./HomeSeiCommunity";
import { HomeVideoTutorials } from "./HomeVideoTutorials";
import { HomeFeaturedTopics } from "./HomeFeaturedTopics";

const HomePage: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <HomeIntroSection />
      <HomeCards />
      <HomeVideoTutorials />
      <HomeFeaturedTopics />
      <div className="w-full">{children}</div>
      <HomeTools />
      <BuildingOnSei />
      {/* <HomeRoadMap /> */}
      {/* <HomeBlogPosts /> */}
      {/* <SupportedBy /> */}
      <HomeSeiCommunity />
    </div>
  );
};

export { HomePage };
