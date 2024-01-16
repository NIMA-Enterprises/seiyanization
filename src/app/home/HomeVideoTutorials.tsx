import Link from "next/link";
import { Card } from "@/components/Card";
import { homeVideos } from "@/common/constants";
import { ImageWithLoading } from "@/components/ImageWithLoadings";
import { Button } from "@/components";
import { ArrowRightIcon } from "lucide-react";

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
        {homeVideos.map((video) => {
          const videoImg =
            video.image ||
            `https://sei-docs.vercel.app/api/og?title=${encodeURIComponent(
              video.title
            )}&description=${encodeURIComponent(video.description)}`;

          return (
            <Link
              className="flex flex-col gap-2 text-link-hover"
              key={video.title}
              href={video.url}
            >
              <ImageWithLoading url={videoImg} />
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
