import React, { useEffect, useState } from "react";

import { ARTICLE_TAGS, articles } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import { PostCard } from "../common/filterable-cards/PostCard";
import SortByDate from "@/components/SortByDate";
import PostPagination from "@/components/pagination/PostPagination";

const PAGE_SIZE = 6;

const ArticlesPage = () => {
  const [filters, setFilters] = useState<Record<string, boolean>>({});
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("newest");

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

  const sortedArticles = articles
    .filter((article) => checkEnabledFilters(article.tags))
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
  const paginatedArticles = sortedArticles.slice(startIndex, endIndex);

  const filteredResultsNum = sortedArticles.length;

  return (
    <div className="pb-12">
      <div className="mb-12 py-20 header ">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Articles
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Read community written articles on how to use SEI and its ecosystem
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
          <div className="flex-1 min-h-[1050px]  w-full flex flex-col gap-2">
            <SortByDate
              className="self-end"
              sort={sortOrder}
              onSortChange={(sort) => setSortOrder(sort as any)}
            />
            {filteredResultsNum === 0 ? (
              <div className="w-full  text-center flex flex-col md:flex-row justify-center items-center py-[90px]">
                <p className="text-3xl font-bold">
                  There are no articles, <br /> try changing filters
                </p>
                <img src="/memes/meme-two.png" className="w-[200px]" />
              </div>
            ) : (
              <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedArticles
                  .filter(
                    (article) =>
                      article.featured && checkEnabledFilters(article.tags)
                  )
                  .map((article) => (
                    <PostCard key={article.title} {...article} />
                  ))}

                {paginatedArticles
                  .filter(
                    (article) =>
                      !article.featured && checkEnabledFilters(article.tags)
                  )
                  .map((article) => (
                    <PostCard key={article.title} {...article} />
                  ))}
              </div>
            )}

            {/* {filteredResultsNum !== 0 && (
              <p className="opacity-70 mt-auto text-center">
                Showing {filteredResultsNum} of {articles.length} articles
              </p>
            )} */}

            <div className="h-[100px]">
              <PostPagination
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

export { ArticlesPage };
