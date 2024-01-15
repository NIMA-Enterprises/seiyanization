import React from "react";
import { Checkbox } from "@/components/ui";

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
    <div className="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
      {Object.keys(filterTags)
        .sort()
        .map((tag) => (
          <div
            key={tag}
            className="w-full  cursor-pointer border-sei-border-light border-2 rounded hover:bg-gray-100 dark:border-sei-border-dark dark:hover:bg-sei-black/70 dark:bg-sei-black"
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
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
