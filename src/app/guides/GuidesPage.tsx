import React, { useEffect, useState } from "react";

import { GUIDE_TAGS, guides } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";

import SortByDate from "@/components/SortByDate";
import PostPagination from "@/components/pagination/PostPagination";

const PAGE_SIZE = 6;
const GuidesPage = () => {
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("newest");
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    //filter
    const urlFilters = params.getAll("filter");
    const initialFilters = {} as Record<string, boolean>;

    urlFilters.forEach((filter) => {
      initialFilters[filter] = true;
    });

    setFilters(initialFilters);

    //pagination
    const urlPage = params.get("page");
    if (urlPage) {
      setCurrentPage(parseInt(urlPage));
    }
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

  const sortedGuides = guides
    .filter((guide) => checkEnabledFilters(guide.tags))
    .sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-")).getTime();
      const dateB = new Date(b.date.split(".").reverse().join("-")).getTime();

      if (a.featured && !b.featured) {
        // Featured come first
        return -1;
      } else if (!a.featured && b.featured) {
        // non featured
        return 1;
      } else {
        // Both featured or both non-featured, sort by date
        if (sortOrder === "newest") {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      }
    });

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedJobs = sortedGuides.slice(startIndex, endIndex);

  const filteredResultsNum = sortedGuides.length;

  return (
    <div className="pb-12">
      <div className="mb-12 py-20 header ">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Guides
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Learn how to use Sei by following our official guides and tutorials.
          </p>
        </div>
      </div>
      <div className="mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex flex-col gap-4 w-[250px]">
            <PostFilters
              filters={filters}
              onChange={handleFilterChange}
              filtersTags={GUIDE_TAGS}
            />
          </div>
          <div className="flex-1 min-h-[1000px]  w-full flex flex-col gap-2">
            <SortByDate
              className="self-end"
              sort={sortOrder}
              onSortChange={(sort) => setSortOrder(sort as any)}
            />
            {paginatedJobs.length === 0 ? (
              <div className="w-full  text-center flex flex-col md:flex-row justify-center items-center py-[90px]">
                <p className="text-3xl font-bold">
                  There are no guides, <br /> try changing filters
                </p>
                <img src="/memes/meme-two.png" className="w-[200px]" />
              </div>
            ) : (
              <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedJobs
                  .filter(
                    (guide) => guide.featured && checkEnabledFilters(guide.tags)
                  )
                  .map((guide) => (
                    <PostCard key={guide.title} {...guide} />
                  ))}

                {paginatedJobs
                  .filter(
                    (guide) =>
                      !guide.featured && checkEnabledFilters(guide.tags)
                  )
                  .map((guide) => (
                    <PostCard key={guide.title} {...guide} />
                  ))}
              </div>
            )}
            {filteredResultsNum > PAGE_SIZE && (
              <p className="opacity-70 text-center mt-auto">
                Showing {filteredResultsNum} of {guides.length} guides
              </p>
            )}

            <div className="h-[100px]">
              <PostPagination
                className="mb-10"
                currentPage={currentPage}
                onPageChange={(newPage: number) => {
                  setCurrentPage(newPage);
                }}
                totalItemNum={filteredResultsNum}
                pageSize={PAGE_SIZE}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GuidesPage };
