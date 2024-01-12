import Link from "next/link";
import { Card } from "@/components/Card";
import { homeVideos } from "@/common/constants";

const HomeVideoTutorials = () => {
  return (
    <Card className="rounded-xl">
      <div className="flex flex-col mb-4 pb-2 border-b w-full dark:border-neutral-800">
        <h1 className="text-md font-semibold">Video tutorials</h1>
      </div>
      <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2">
        {homeVideos.map((video) => (
          <Link
            className="flex flex-col gap-2 text-link-hover"
            key={video.title}
            href={video.url}
          >
            <img src={video.image} alt={video.title} />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm leading-5 font-semibold">{video.title}</h3>
              <p className="text-xs opacity-80">{video.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export { HomeVideoTutorials };
