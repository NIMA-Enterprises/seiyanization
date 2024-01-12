import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { PostType } from "@/lib/types";
import { JOB_TAGS } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";

// not in contstants because it will change frequently
export const guides: PostType[] = [
  {
    title: "Job post title 1",
    description: "Job post description 1",
    date: "01.09.2023.",
    href: "jobs/example-job-post-1",
    image: "/images/img-placeholder.jpg",
    tags: [JOB_TAGS.ENGINEERING],
  },
  {
    title: "Job post title 2",
    description: "Job post description 2",
    date: "01.09.2023.",
    href: "jobs/example-job-post-1",
    image: "/images/img-placeholder.jpg",
    tags: [JOB_TAGS.MARKETING],
    featured: true,
  },
];

const JobsPage: React.FC<{ className?: string }> = ({ className }) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (name: string, checked: boolean) => {
    setFilters((prevState) => {
      if (!checked) {
        delete prevState[name as keyof typeof prevState];
        return { ...prevState };
      }

      return {
        ...prevState,
        [name]: checked,
      };
    });
  };

  const checkEnabledFilters = (tags: string[]): boolean => {
    if (Object.keys(filters).length === 0) {
      return true;
    }

    return Object.keys(filters).some((filterKey) => {
      return (
        filters[filterKey as keyof typeof filters] && tags.includes(filterKey)
      );
    });
  };

  return (
    <div className="pb-12">
      <div className="mb-12 py-20 border-b dark:border-neutral-800">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Job posts</h1>
          <p className="opacity-80 text-xl">Find job in Sei ecosystem</p>
        </div>
      </div>
      <div className="mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex flex-col gap-4 w-[250px]">
            <PostFilters
              filters={filters}
              onChange={handleFilterChange}
              filtersTags={JOB_TAGS}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="opacity-70">
              Showing{" "}
              {guides.filter((guide) => checkEnabledFilters(guide.tags)).length}{" "}
              of {guides.length} guides
            </p>
            <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guides
                .filter(
                  (guide) => guide.featured && checkEnabledFilters(guide.tags)
                )
                .map((guide) => (
                  <PostCard key={guide.title} {...guide} />
                ))}

              {guides
                .filter(
                  (guide) => !guide.featured && checkEnabledFilters(guide.tags)
                )
                .map((guide) => (
                  <PostCard key={guide.title} {...guide} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobsPage };
