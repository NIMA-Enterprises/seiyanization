import Link from "next/link";
import { Card } from "@/components/Card";

const videos = [
  {
    title:
      "The fundamental use case of blockchains with Sei Labs Founder Jeff Feng",
    description: "description.",
    image: "/images/img-placeholder.jpg",
    url: "https://www.youtube.com/watch?v=OOhwd7VoFcw",
  },
  {
    title:
      "Thesis Ep 23 - How Sei Network solves for blockchain’s trading trilemma",
    description: "description",
    image: "/images/img-placeholder.jpg",
    url: "https://www.youtube.com/watch?v=VdEWHZIQrQE",
  },
  {
    title: "What is Sei Network? - simply explained by Sei Co-Founder Jay Jog",
    description: "description",
    image: "/images/img-placeholder.jpg",
    url: "https://www.youtube.com/watch?v=k3MhT8Ashig",
  },
  {
    title: "Sei Network: The FASTEST Layer 1 for Crypto Trading??",
    description: "description.",
    image: "/images/img-placeholder.jpg",
    url: "https://www.youtube.com/watch?v=1UgL7IXgjQM",
  },
];

const HomeVideoTutorials = () => {
  return (
    <Card className="rounded-xl">
      <div className="flex flex-col mb-4 pb-2 border-b w-full dark:border-neutral-800">
        <h1 className="text-md font-semibold">Video tutorials</h1>
      </div>
      <div className="grid grid-cols-auto-fill-full gap-4 sm:grid-cols-2">
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
