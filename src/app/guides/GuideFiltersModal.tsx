import React from "react";
import { SlidersHorizontalIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { GuideFilterItems } from "./GuideFilterItems";

interface GuideFiltersModalProps {
  filters: Record<string, boolean>;
  onChange: (name: string, checked: boolean) => void;
}

const GuideFiltersModal = ({ filters, onChange }: GuideFiltersModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 p-2 border rounded dark:border-neutral-800">
          <SlidersHorizontalIcon size={18} />
          <span>Filters</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-inherit border">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-sm">
          <GuideFilterItems filters={filters} onChange={onChange} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { GuideFiltersModal };
