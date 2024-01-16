import React, { useEffect, useState } from "react";

import { ARTICLE_TAGS, articles } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";

const ArticlesPage = () => {
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

  return (
    <div className="pb-12">
      <div className="mb-12 py-20 header ">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Articles
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Read community written guides on how to use SEI and its ecosystem
          </p>
        </div>
      </div>
      <div className="mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex flex-col gap-4 w-[250px]">
            <PostFilters
              filters={filters}
              onChange={handleFilterChange}
              filtersTags={ARTICLE_TAGS}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="opacity-70">
              Showing{" "}
              {
                articles.filter((guide) => checkEnabledFilters(guide.tags))
                  .length
              }{" "}
              of {articles.length} articles
            </p>
            <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter(
                  (guide) => guide.featured && checkEnabledFilters(guide.tags)
                )
                .map((guide) => (
                  <PostCard key={guide.title} {...guide} />
                ))}

              {articles
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

export { ArticlesPage };
