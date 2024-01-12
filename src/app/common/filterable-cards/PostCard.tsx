import React from "react";
import { Card } from "@/components/Card";

const PostCard = ({
  title,
  description,
  image,
  href,
  featured,
  date,
  tags,
}: any) => {
  const imageUrl =
    image ||
    `${process.env.WEBSITE_URL}/api/og?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(description)}`;

  return (
    <Card className="!p-0 overflow-hidden" href={href}>
      <img
        className="rounded-lg object-cover w-full h-auto md:h-[200px] lg:h-[180px]"
        src={imageUrl}
        alt="Sei docs"
      />
      <div className="flex flex-col gap-2 p-4">
        {(date || featured) && (
          <div className="flex items-center gap-2">
            {featured && (
              <p className="px-2 py-1 text-[8px] border rounded border-sei-red bg-sei-red text-white font-bold uppercase ">
                FEATURED
              </p>
            )}
            {date && <p className="text-[12px]">{date}</p>}
          </div>
        )}
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
        {tags?.length > 0 && (
          <div className="flex items-center flex-wrap gap-2">
            {tags.map((tag: string) => (
              <div
                key={tag}
                className="px-2 py-1 text-[8px] border border-gray-300 dark:border-gray-700 bg-[white/80] uppercase rounded"
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
