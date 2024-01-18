import React, { useEffect, useState } from "react";
import { EcosystemItem, HomeTool, PostType } from "@/lib/types";

import { PostFilters } from "../common/filterable-cards/PostFilters";

import { PostCard } from "../common/filterable-cards/PostCard";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/Card";

const EcosystemPage: React.FC<{ className?: string; data: any }> = ({
  className,
  data,
}) => {
  const ecosystem: EcosystemItem[] = data?.ecosystem || [];
  const tags: string[] = data.tags || [];

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

  const filteredResultsNum = ecosystem.filter((tool) =>
    checkEnabledFilters(tool.tags)
  ).length;

  return (
    <div className="pb-12">
      <div className="mb-12 py-20 header ">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Ecosystem
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Explore projects in SEI Ecosystem.
          </p>
        </div>
      </div>
      <div className="mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex flex-col gap-4 w-[250px]">
            <PostFilters
              filters={filters}
              onChange={handleFilterChange}
              filtersTags={tags}
            />
          </div>

          <div className="w-full flex flex-col gap-2 flex-1 justify-center items-center">
            <p className="opacity-70">
              Showing {filteredResultsNum} of {ecosystem.length} articles
            </p>

            {filteredResultsNum === 0 ? (
              <div className="w-full  text-center flex flex-col md:flex-row justify-center items-center py-[90px]">
                <p className="text-3xl font-bold">
                  There are no articles, <br /> try changing filters
                </p>
                <img src="/memes/meme-two.png" className="w-[200px]" />
              </div>
            ) : (
              <div className="w-full grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {ecosystem
                  .filter((item) => checkEnabledFilters(item.tags))
                  .map((item, i) => (
                    <Card
                      key={item.title + i}
                      className="flex items-center w-full cursor-pointer bg-sei-card-inner-light dark:bg-sei-card-inner-dark border-none p-4"
                      href={item.url}
                      isExternal={true}
                    >
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={item.logo} className="w-10 h-10" />
                          </div>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <p className="text-md font-bold">{item.title}</p>
                          <div className="flex gap-2">
                            {item.tags.map((tag, j) => (
                              <div
                                key={tag}
                                className="px-2 py-1 text-[10px] text-sei-subheading-light dark:text-sei-subheading-dark bg-sei-card-bg-light dark:bg-sei-card-bg-dark font-bold border border-sei-border-light dark:border-sei-border-dark uppercase rounded"
                              >
                                {tag}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { EcosystemPage };
