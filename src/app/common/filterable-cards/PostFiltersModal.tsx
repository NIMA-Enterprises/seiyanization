import React from "react";
import { SlidersHorizontalIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { PostFilterItems } from "./PostFilterItems";

interface PostFilterModalProps {
  filters: Record<string, boolean>;
  onChange: (name: string, checked: boolean) => void;
  filterTags: any[];
  uppercase?: boolean;
}

const PostFiltersModal = ({
  filters,
  onChange,
  filterTags,
  uppercase,
}: PostFilterModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 p-2 border rounded border-sei-border-light dark:border-sei-border-dark">
          <SlidersHorizontalIcon size={18} />
          <span>Filters</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-inherit border">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-sm">
          <PostFilterItems
            filters={filters}
            onChange={onChange}
            filterTags={filterTags}
            uppercase={uppercase}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { PostFiltersModal };
