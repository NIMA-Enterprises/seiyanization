import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PostType } from "@/lib/types";
import { JOB_TAGS } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";

// not in contstants because it will change frequently
export const guides: PostType[] = [
  {
    title: "DragonSwap - Community Manager",
    description:
      "Join NIMA as a Community Manager for DragonSwap! Foster vibrant communities, develop engagement strategies, and drive innovation in DeFi.",
    date: "18.02.2024.",
    href: "jobs/community-manager-dragonswap",
    image: "",
    tags: [JOB_TAGS.COMMUNITY],
    featured: true,
  },
  {
    title: "Job post title 2",
    description: "Job post description 2",
    date: "01.09.2023.",
    href: "jobs/example-job-post-1",
    image: "",
    tags: [JOB_TAGS.MARKETING],
  },
];

const JobsPage: React.FC<{ className?: string }> = ({ className }) => {
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlFilters = params.getAll("filter");
    const initialFilters = {} as Record<string, boolean>;

    urlFilters.forEach((filter) => {
      initialFilters[filter] = true;
    });

    setFilters(initialFilters);
  }, []);

  const handleFilterChange = (name: string, checked: boolean) => {
    setFilters((prevState) => {
      const newFilters = { ...prevState };

      if (!checked) {
        delete newFilters[name];
      } else {
        newFilters[name] = checked;
      }

      const params = new URLSearchParams();
      Object.keys(newFilters).forEach((filter) => {
        params.append("filter", filter);
      });

      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );

      return newFilters;
    });
  };

  const checkEnabledFilters = (tags: string[]): boolean => {
    if (Object.keys(filters).length === 0) {
      return true;
    }

    return Object.keys(filters).some((filterKey) => {
      return filters[filterKey] && tags.includes(filterKey);
    });
  };

  const filteredResultsNum = guides.filter((guide) =>
    checkEnabledFilters(guide.tags)
  ).length;

  return (
    <div className="pb-12">
      <div className="mb-12 py-20  header">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Job posts
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Find job in Sei ecosystem
          </p>
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
          <div className="w-full flex flex-col gap-2 flex-1 justify-center items-center">
            <p className="opacity-70">
              Showing {filteredResultsNum} of {guides.length} guides
            </p>

            {filteredResultsNum === 0 ? (
              <div className="w-full  text-center flex flex-col md:flex-row justify-center items-center py-[90px]">
                <p className="text-3xl font-bold">
                  There are no job posts, <br /> try changing filters
                </p>
                <img src="/memes/meme-two.png" className="w-[200px]" />
              </div>
            ) : (
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
                    (guide) =>
                      !guide.featured && checkEnabledFilters(guide.tags)
                  )
                  .map((guide) => (
                    <PostCard key={guide.title} {...guide} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobsPage };
