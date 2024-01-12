import React from "react";
import { PostFilterItems } from "./PostFilterItems";
import { PostFiltersModal } from "./PostFiltersModal";

interface GuideFiltersProps {
  filters: Record<string, boolean>;
  onChange: (name: string, checked: boolean) => void;
  filtersTags: any;
}

const PostFilters = ({ filters, onChange, filtersTags }: GuideFiltersProps) => {
  return (
    <>
      <div className="block md:hidden">
        <PostFiltersModal
          filters={filters}
          onChange={onChange}
          filterTags={filtersTags}
        />
      </div>
      <div className="w-[250px] hidden flex-col gap-2 text-sm md:flex">
        <h3 className="text-base font-bold">Filters</h3>
        <PostFilterItems
          filters={filters}
          onChange={onChange}
          filterTags={filtersTags}
        />
      </div>
    </>
  );
};

export { PostFilters };
