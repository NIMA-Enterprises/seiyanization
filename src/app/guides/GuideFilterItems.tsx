import React from "react";

import { Checkbox } from "@/components/ui";
import { GUIDE_TAGS } from "@/common/constants";

interface GuideFilterItemsProps {
  filters: Record<string, boolean>;
  onChange: (name: string, checked: boolean) => void;
}

const GuideFilterItems = ({ filters, onChange }: GuideFilterItemsProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
      {Object.keys(GUIDE_TAGS)
        .sort()
        .map((tag) => (
          <div
            key={tag}
            className="w-full border cursor-pointer border-gray-200 rounded hover:bg-gray-100 dark:border-neutral-800 dark:hover:bg-[#1a1a1a]"
          >
            <div className="flex items-center pl-3">
              <Checkbox
                id={tag}
                checked={!!filters[GUIDE_TAGS[tag]]}
                onCheckedChange={(value: boolean) =>
                  onChange(GUIDE_TAGS[tag], value)
                }
              />
              <label
                htmlFor={tag}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {GUIDE_TAGS[tag]}
              </label>
            </div>
          </div>
        ))}
    </div>
  );
};

export { GuideFilterItems };
