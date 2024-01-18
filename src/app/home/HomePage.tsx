import React from "react";

import { cn } from "@/lib/utils";
import { HomeCards } from "./HomeCards";

import { BuildingOnSei } from "./BuildingOnSei";

import { HomeTools } from "./HomeTools";
import { HomeIntroSection } from "./HomeIntroSection";
import { HomeSeiCommunity } from "./HomeSeiCommunity";
import { HomeVideoTutorials } from "./HomeVideoTutorials";
import { HomeFeaturedTopics } from "./HomeFeaturedTopics";
import { HomeBlogPosts } from "@/app/home/HomeBlogPosts";
import { EcosystemItem } from "@/lib/types";

const HomePage: React.FC<{
  className?: string;
  children: React.ReactNode;
  data: any;
}> = ({ className, children, data }) => {
  const ecosystem: EcosystemItem[] = data?.ecosystem || [];

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <HomeIntroSection />
      <HomeCards />
      <HomeVideoTutorials />
      <HomeFeaturedTopics />
      <div className="w-full">{children}</div>
      <HomeTools />
      <BuildingOnSei ecosystem={ecosystem} />
      {/* <HomeRoadMap /> */}
      <HomeBlogPosts />
      {/* <SupportedBy /> */}
      <HomeSeiCommunity />
    </div>
  );
};

export { HomePage };
