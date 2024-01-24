import React from "react";
import { cn } from "@/lib/utils";

const HomeIntroSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("mt-6 py-20 header rounded-xl", className)}>
      <div className="text-sei-heading-dark px-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {"Seiyanization, "}
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 italic">
          &ldquo; ...from novice to SuperSeiyan!&rdquo;
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{""}</h1>
        <p className="opacity-80 md:text-xl text-sei-subheading-dark">
          Find guides, products, latest ecosystem research, tools, how to’s,
        </p>
        <p className="opacity-80 md:text-xl text-sei-subheading-dark">
          and much more helpful things to help you get started!
        </p>
      </div>
    </div>
  );
};

export { HomeIntroSection };
