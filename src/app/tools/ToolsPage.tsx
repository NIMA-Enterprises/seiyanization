import React, { useEffect, useState } from "react";

import { TOOL_TAGS, homeTools } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";
import { Card } from "@/components/Card";

const ToolsPage: React.FC<{ className?: string }> = ({ className }) => {
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
      <div className="mb-12 py-20  header">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Sei Tools
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Explore tools in Sei ecosystem
          </p>
        </div>
      </div>
      <div className="mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex flex-col gap-4 w-[250px]">
            <PostFilters
              filters={filters}
              onChange={handleFilterChange}
              filtersTags={TOOL_TAGS}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="opacity-70">
              Showing{" "}
              {
                homeTools.filter((guide) => checkEnabledFilters([guide.title]))
                  .length
              }{" "}
              of {homeTools.length} tools categories
            </p>
            <div className="flex flex-col gap-6">
              {homeTools
                .filter((guide) => checkEnabledFilters([guide.title]))
                .map((category) => (
                  <div key={category.title} className="flex flex-col gap-4">
                    <h2 className="text-md uppercase opacity-80">
                      {category.title}
                    </h2>
                    <div className="grid gap-4 grid-cols-auto-fill-full md:grid-cols-2 xl:grid-cols-4">
                      {category.items.slice(0, 4).map((tool) => (
                        <Card
                          className="flex items-center  cursor-pointer bg-sei-card-inner-light dark:bg-sei-card-inner-dark border-none p-6"
                          href={tool.href}
                          key={tool.title}
                        >
                          <div className="flex items-center gap-6">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img src={tool.img} className="w-10 h-10" />
                            </div>
                            <p>{tool.title}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ToolsPage };