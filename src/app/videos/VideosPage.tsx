import Link from "next/link";
import React, { useEffect, useState } from "react";

import { VIDEO_TAGS, videos } from "@/common/constants";
import { PostFilters } from "../common/filterable-cards/PostFilters";
import PostPagination from "@/components/pagination/PostPagination";

const PAGE_SIZE = 9;

const VideosPage = () => {
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const [currentPage, setCurrentPage] = useState(1);
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

  const sortedVideos = videos
    .filter((videos) => checkEnabledFilters(videos.tags))
    .sort((a, b) => {
      if (a.featured && !b.featured) {
        // Featured come first
        return -1;
      }
      // non featured
      return 1;
    });

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedVideos = sortedVideos.slice(startIndex, endIndex);

  const filteredResultsNum = videos.filter((video) =>
    checkEnabledFilters(video.tags)
  ).length;

  return (
    <div className="pb-12">
      <div className="mb-12 py-20 header ">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Videos
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Learn more about SEI, by watching some of the videos.
          </p>
        </div>
      </div>
      <div className="mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex flex-col gap-4 w-[250px]">
            <PostFilters
              filters={filters}
              onChange={handleFilterChange}
              filtersTags={VIDEO_TAGS}
            />
          </div>
          <div className="flex-1 min-h-[940px]  w-full flex flex-col gap-2">
            {filteredResultsNum === 0 ? (
              <div className="w-full  text-center flex flex-col md:flex-row justify-center items-center py-[90px]">
                <p className="text-3xl font-bold">
                  There are no videos, <br /> try changing filters
                </p>
                <img src="/memes/meme-two.png" className="w-[200px]" />
              </div>
            ) : (
              <div className="grid grid-cols-auto-fill-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedVideos
                  .filter(
                    (video) => video.featured && checkEnabledFilters(video.tags)
                  )
                  .map((video) => (
                    <Link
                      target="_blank"
                      className="flex flex-col gap-2 text-link-hover"
                      key={video.title}
                      href={video.href}
                    >
                      <img src={video.image} className="h-[200px]" />
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm leading-5 font-semibold">
                          {video.title}
                        </h3>
                        <p className="text-xs opacity-80">
                          {video.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                {paginatedVideos
                  .filter(
                    (video) =>
                      !video.featured && checkEnabledFilters(video.tags)
                  )
                  .map((video) => (
                    <Link
                      target="_blank"
                      className="flex flex-col gap-2 text-link-hover"
                      key={video.title}
                      href={video.href}
                    >
                      <img src={video.image} className="h-[200px]" />
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm leading-5 font-semibold">
                          {video.title}
                        </h3>
                        <p className="text-xs opacity-80">
                          {video.description}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
            {filteredResultsNum > PAGE_SIZE && (
              <p className="opacity-70 text-center mt-auto ">
                Showing{" "}
                {
                  videos.filter((video) => checkEnabledFilters(video.tags))
                    .length
                }{" "}
                of {videos.length} videos.
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

export { VideosPage };
