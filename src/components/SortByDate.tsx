import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

type Props = {
  sort: string;
  onSortChange: (sort: string) => void;
  className?: string;
};

const SortByDate = ({ sort, onSortChange, className }: Props) => {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <p>Sort by</p>
      <Select
        value={sort}
        onValueChange={(value) => {
          onSortChange(value as any);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortByDate;
