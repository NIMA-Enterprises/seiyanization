import Link from "next/link";
import { Card } from "@/components/Card";

const videos = [
  {
    title: "Home video tutorials title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet lorem ipsum.",
    image: "/images/img-placeholder.jpg",
    url: "/",
  },

  {
    title: "Home video tutorials title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet lorem ipsum.",
    image: "/images/img-placeholder.jpg",
    url: "/",
  },
  {
    title: "Home video tutorials title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet lorem ipsum.",
    image: "/images/img-placeholder.jpg",
    url: "/",
  },
];

const HomeVideoTutorials = () => {
  return (
    <Card className="rounded-xl">
      <div className="flex flex-col mb-4 pb-2 border-b w-full dark:border-neutral-800">
        <h1 className="text-md font-semibold">Video tutorials</h1>
      </div>
      <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-3">
        {videos.map((video) => (
          <Link
            className="flex flex-col gap-2 link-text-hover"
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
