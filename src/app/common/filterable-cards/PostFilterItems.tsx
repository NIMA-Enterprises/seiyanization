import React from "react";
import { Checkbox } from "@/components/ui";
import { cn } from "@/lib/utils";

interface PostFilterItemsProps {
  filters: Record<string, boolean>;
  onChange: (name: string, checked: boolean) => void;
  filterTags: any[];
}

const PostFilterItems = ({
  filters,
  onChange,
  filterTags,
}: PostFilterItemsProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm font-medium">
      {Object.keys(filterTags)
        .sort()
        .map((tag) => (
          <div
            key={tag}
            className={cn(
              "w-full cursor-pointer border hover:dark:bg-sei-card-inner-dark hover:bg-sei-card-inner-light border-sei-border-light dark:border-sei-border-dark rounded",
              {
                "dark:bg-sei-card-inner-dark":
                  !!filters[filterTags[tag as keyof typeof filterTags]],
                "bg-sei-border-light":
                  !!filters[filterTags[tag as keyof typeof filterTags]],
              }
            )}
          >
            <div className="flex items-center pl-3">
              <Checkbox
                id={tag}
                checked={!!filters[filterTags[tag as keyof typeof filterTags]]}
                onCheckedChange={(value: boolean) =>
                  onChange(filterTags[tag as keyof typeof filterTags], value)
                }
              />
              <label
                htmlFor={tag}
                className="w-full py-3 ml-2 text-sm font-medium sei-subheading-light dark:sei-subheading-dark"
              >
                {filterTags[tag as keyof typeof filterTags]}
              </label>
            </div>
          </div>
        ))}
    </div>
  );
};

export { PostFilterItems };
