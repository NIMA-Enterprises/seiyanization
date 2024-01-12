import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components";
import { Card } from "@/components/Card";
import { homePosts } from "@/common/constants";

const HomeBlogPosts: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Blog posts</h1>
          <Link href="/">
            <Button
              className="hidden sm:flex rounded"
              size="sm"
              variant="outline"
            >
              <span className="mr-1">View all blog posts</span>
              <ArrowRightIcon size={14} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-auto-fill-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homePosts.map((post) => (
          <Card
            className="!p-0 text-link-hover overflow-hidden"
            key={post.title}
            href={post.url}
          >
            <img
              className="object-cover w-full h-auto md:h-[200px] lg:h-[180px]"
              src={post.image}
              alt={post.title}
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-md font-semibold">{post.title}</h3>
              <p className="text-sm">{post.description}</p>
            </div>
          </Card>
        ))}
      </div>
      <Link href="/">
        <Button className="sm:hidden rounded" size="sm" variant="outline">
          <span className="mr-1">View all case studies</span>
          <ArrowRightIcon size={14} />
        </Button>
      </Link>
    </div>
  );
};

export { HomeBlogPosts };
