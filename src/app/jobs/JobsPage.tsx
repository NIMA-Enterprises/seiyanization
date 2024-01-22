import React, { useEffect, useState } from "react";
import { PostType } from "@/lib/types";
import { JOB_TAGS } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";
import SortByDate from "@/components/SortByDate";

// not in contstants because it will change frequently
export const jobs: PostType[] = [
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
    title: "Position: Pallet Exchange - Full Stack Engineer",
    description: "If you're passionate about NFTs, we want you on our team.",
    date: "20.02.2024.",
    href: "jobs/full-stack-engineer-pallet",
    image: "",
    tags: [JOB_TAGS.ENGINEERING],
    featured: true,
  },
];

const JobsPage: React.FC<{ className?: string }> = ({ className }) => {
  const [filters, setFilters] = useState<Record<string, boolean>>({});
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("newest");
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

  const sortedJobs = jobs
    .filter((job) => checkEnabledFilters(job.tags))
    .sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-")).getTime();
      const dateB = new Date(b.date.split(".").reverse().join("-")).getTime();

      if (sortOrder === "newest") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

  const filteredResultsNum = sortedJobs.length;

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
            <SortByDate
              className="self-end"
              sort={sortOrder}
              onSortChange={(sort) => setSortOrder(sort as any)}
            />
            {filteredResultsNum === 0 ? (
              <div className="w-full  text-center flex flex-col md:flex-row justify-center items-center py-[90px]">
                <p className="text-3xl font-bold">
                  There are no job posts, <br /> try changing filters
                </p>
                <img src="/memes/meme-two.png" className="w-[200px]" />
              </div>
            ) : (
              <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedJobs
                  .filter(
                    (job) => job.featured && checkEnabledFilters(job.tags)
                  )
                  .map((guide) => (
                    <PostCard key={guide.title} {...guide} />
                  ))}

                {sortedJobs
                  .filter(
                    (job) => !job.featured && checkEnabledFilters(job.tags)
                  )
                  .map((guide) => (
                    <PostCard key={guide.title} {...guide} />
                  ))}
              </div>
            )}

            <p className="opacity-70 mt-10">
              Showing {filteredResultsNum} of {sortedJobs.length} jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobsPage };
