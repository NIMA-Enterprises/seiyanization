import React from "react";
import { Card } from "@/components/Card";
import { ImageWithLoading } from "@/components/ImageWithLoadings";

const PostCard = ({
  title,
  description,
  xUsername,
  image,
  href,
  featured,
  date,
  tags,
}: any) => {
  const imageUrl =
    image ||
    `http://sei-docs.vercel.app/api/og?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(
      description
    )}&x_username=${encodeURIComponent(xUsername)}`;

  return (
    <Card className="!p-0 overflow-hidden w-full" href={href}>
      <ImageWithLoading
        url={imageUrl}
        className="rounded-lg object-cover w-full h-auto md:h-[200px] lg:h-[180px]"
      />

      <div className="flex flex-col gap-2 p-4">
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
        <p className="text-sm">{description}</p>
        {tags?.length > 0 && (
          <div className="flex items-center flex-wrap gap-2">
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
