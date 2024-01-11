import React from "react";
import { GuideFilterItems } from "./GuideFilterItems";
import { GuideFiltersModal } from "./GuideFiltersModal";

interface GuideFiltersProps {
  filters: Record<string, boolean>;
  onChange: (name: string, checked: boolean) => void;
}

const GuideFilters = ({ filters, onChange }: GuideFiltersProps) => {
  return (
    <>
      <div className="block md:hidden">
        <GuideFiltersModal filters={filters} onChange={onChange} />
      </div>
      <div className="w-[250px] hidden flex-col gap-2 text-sm md:flex">
        <h3 className="text-base font-bold">Filters</h3>
        <GuideFilterItems filters={filters} onChange={onChange} />
      </div>
    </>
  );
};

export { GuideFilters };
