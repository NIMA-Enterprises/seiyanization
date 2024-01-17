import Link from "next/link";
import { Card } from "@/components/Card";

import { Button } from "@/components";
import { ArrowRightIcon } from "lucide-react";
import { embeddedVideos } from "@/common/constants";

const HomeVideoTutorials = () => {
  return (
    <Card className="rounded-xl p-0 overflow-hidden">
      <div className="flex items-center   border-b w-full border-sei-border-light dark:border-sei-border-dark px-5 py-3">
        <h1 className="text-md font-semibold">Video tutorials</h1>

        <div className="ml-auto">
          <Link href={"/videos"}>
            <Button className="hidden sm:flex rounded" size="sm">
              <span className="mr-1">View all Videos</span>
              <ArrowRightIcon size={14} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-auto-fill-full gap-4 grid-cols-2 md:grid-cols-4 p-4 bg-sei-card-inner-light dark:bg-sei-card-inner-dark">
        {embeddedVideos.map((video, i) => (
          <div key={video?.id} className="flex flex-col gap-2 text-link-hover">
            {video.embedded}
          </div>
        ))}
      </div>
    </Card>
  );
};

export { HomeVideoTutorials };
