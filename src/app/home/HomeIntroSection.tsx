import React from "react";
import { cn } from "@/lib/utils";

const HomeIntroSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("mt-6 mb-12 py-20 header rounded-xl", className)}>
      <div className="text-sei-heading-dark px-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {"Welcome, Let's Get Seiyanized!"}
        </h1>
        <p className="opacity-80 md:text-xl text-sei-subheading-dark">
          Find developer guides, API references, tutorials, and more.
        </p>
      </div>
    </div>
  );
};

export { HomeIntroSection };
