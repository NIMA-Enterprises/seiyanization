import React from "react";
import { cn } from "@/lib/utils";

const HomeIntroSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("mt-6 mb-12 py-20 header rounded-xl", className)}>
      <div className="text-sei-blue px-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to SEI Documentation
        </h1>
        <p className="opacity-80 md:text-xl">
          Find developer guides, API references, tutorials, and more.
        </p>
      </div>
    </div>
  );
};

export { HomeIntroSection };
