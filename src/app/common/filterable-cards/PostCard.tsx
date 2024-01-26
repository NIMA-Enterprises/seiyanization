import React from "react";
import { Card } from "@/components/Card";
import { ImageWithLoading } from "@/components/ImageWithLoadings";
import { excerpt } from "@/lib/utils";

//used for card image generation
export const getImageType = (path: string) => {
  if (path.includes("jobs/")) {
    return "job";
  }

  if (path.includes("articles/")) {
    return "article";
  }

  if (path.includes("guides/")) {
    return "guide";
  }

  return "default";
};

const PostCard = ({
  title,
  description,
  xUsername,
  author,
  image,
  open,
  expiresAt,
  href,
  featured,
  date,
  tags,
}: any) => {
  const ogImgType = getImageType(href);

  const imageUrl =
    image ||
    `https://seiyanization.com/api/og?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(
      description
    )}&x_username=${encodeURIComponent(xUsername)}&author=${encodeURIComponent(
      author
    )}&type=${encodeURIComponent(ogImgType)}`;

  const isJob = href.includes("jobs/");

  const expiresDate = new Date(
    expiresAt?.split(".")?.reverse()?.join("-")
  )?.getTime();

  const isJobExpired = isJob && Date.now() > expiresDate;

  return (
    <Card className="!p-0 overflow-hidden w-full flex flex-col" href={href}>
      {isJob ? (
        <div className="relative md:h-[200px] lg:h-[180px]">
          <ImageWithLoading
            url={imageUrl}
            className="rounded-lg absolute object-cover w-full h-auto md:h-[200px] lg:h-[180px]"
          />
          <div className="absolute right-2 top-2">
            {isJobExpired || !expiresAt ? (
              <p className="px-1 text-[10px] rounded  bg-red-400 dark:bg-red-400 text-sei-card-bg-dark font-bold uppercase ">
                Closed
              </p>
            ) : (
              <p className="px-1 text-[10px] rounded  bg-sei-main-light dark:bg-sei-main-dark text-sei-card-bg-dark font-bold uppercase ">
                {"Active Until " + expiresAt}
              </p>
            )}
          </div>
        </div>
      ) : (
        <ImageWithLoading
          url={imageUrl}
          className="rounded-lg object-cover w-full h-auto md:h-[200px] lg:h-[180px]"
        />
      )}

      <div className="flex flex-col gap-2 p-4 flex-1">
        {(date || featured) && (
          <div className="flex items-center justify-between gap-2">
            {date && <p className="text-[12px]">{date}</p>}

            {featured && (
              <p className="px-1 text-[10px] rounded  bg-sei-main-light dark:bg-sei-main-dark text-sei-card-bg-dark font-bold uppercase ">
                FEATURED
              </p>
            )}
          </div>
        )}
        <h3 className="font-bold text-lg">{title}</h3>
        {author && (
          <p className="text-xs text-sei-subheading-light dark:sei-subheading-dark">
            Author: {author}
          </p>
        )}
        <p className="text-sm">{excerpt(description, 80)}</p>
        {tags?.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mt-auto">
            {tags.map((tag: string) => (
              <div
                key={tag}
                className="px-2 py-1 text-[10px] border border-gray-300 dark:border-gray-700 bg-[white/80] uppercase rounded"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export { PostCard };
