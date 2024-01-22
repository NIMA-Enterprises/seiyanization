import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components";
import { Card } from "@/components/Card";

import { videos } from "@/common/constants";

const HomeVideoTutorials = () => {
  return (
    <Card className="rounded-xl p-0 overflow-hidden">
      <div className="flex items-center   border-b w-full border-sei-border-light dark:border-sei-border-dark px-5 py-3">
        <h1 className="text-md font-semibold">Video Tutorials</h1>

        <div className="ml-auto">
          <Link href={"/videos"}>
            <Button className="hidden sm:flex rounded" size="sm">
              <span className="mr-1">View all Videos</span>
              <ArrowRightIcon size={14} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-auto-fill-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 bg-sei-card-inner-light dark:bg-sei-card-inner-dark">
        {videos.slice(0, 4).map((video) => {
          return (
            <Link
              target="_blank"
              className="flex flex-col gap-2 text-link-hover"
              key={video.title}
              href={video.href}
            >
              <img src={video.image} className="h-[200px] object-cover" />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm leading-5 font-semibold">
                  {video.title}
                </h3>
                <p className="text-xs opacity-80">{video.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export { HomeVideoTutorials };
