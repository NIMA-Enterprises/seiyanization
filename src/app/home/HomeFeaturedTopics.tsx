import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components";
import { Card } from "@/components/Card";
import { ImageWithLoading } from "@/components/ImageWithLoadings";
import { featuredTopics, homeInstalls } from "@/common/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const urls = {
  communityArticles: "/articles",
  // Videos: "/videos",
};
const HomeFeaturedTopics = () => {
  const [active, setActive] = useState<keyof typeof urls>("communityArticles");
  return (
    <Card className="rounded-xl p-0 overflow-hidden">
      <Tabs defaultValue={"communityArticles"} value={active} className="">
        <TabsList className="flex items-center justify-start gap-4 p-6 overflow-hidden bg-sei-card-bg-light dark:bg-sei-card-bg-dark text-inherit">
          <TabsTrigger
            className="p-0 text-md font-semibold justify-start !rounded-none !bg-transparent !shadow-none text-link-hover data-[state=active]:text-link-no-underline"
            value="communityArticles"
            // onClick={() => setActive("Comminity Articles")}
          >
            Community Articles
          </TabsTrigger>
          {/* <TabsTrigger
            className="p-0 text-md font-semibold justify-start !rounded-none !bg-transparent !shadow-none text-link-hover data-[state=active]:text-link-no-underline"
            value="Other"
            onClick={() => setActive("Other")}
          >
            Other
          </TabsTrigger> */}
          <div className="ml-auto">
            <Link href={urls[active]}>
              <Button className="hidden sm:flex rounded" size="sm">
                <span className="mr-1">View all articles</span>
                <ArrowRightIcon size={14} />
              </Button>
            </Link>
          </div>
        </TabsList>
        <hr className="border-sei-border-light dark:border-sei-border-dark" />
        <TabsContent
          value="communityArticles"
          className="p-4 mt-0 bg-sei-card-inner-light dark:bg-sei-card-inner-dark"
        >
          <div className="grid grid-cols-auto-fill-full gap-2 sm:gap-4 sm:grid-cols-2">
            <ul className="pl-5 flex flex-col gap-2 list-disc">
              {featuredTopics.slice(0, 5).map((topic) => (
                <li className="w-fit" key={topic.title}>
                  <Link
                    className="flex items-center gap-1 text-link-hover"
                    href={topic.href}
                  >
                    <h3 className="text-sm font-semibold">{topic.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="pl-5 flex flex-col gap-2 list-disc">
              {featuredTopics.slice(5).map((topic) => (
                <li className="w-fit" key={topic.title}>
                  <Link
                    className="flex items-center gap-1 text-link-hover"
                    href={topic.href}
                  >
                    <h3 className="text-sm font-semibold">{topic.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent
          value="Other"
          className="p-4 mt-0 bg-sei-card-inner-light dark:bg-sei-card-inner-dark"
        >
          <div className="grid grid-cols-auto-fill-full sm:grid-cols-3 gap-4">
            {homeInstalls.map((item) => {
              const imageUrl =
                item.image ||
                `https://sei-docs.vercel.app/api/og?title=${encodeURIComponent(
                  item.title
                )}`;
              return (
                <Link
                  className="flex flex-col gap-2 text-link-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                  key={item.title}
                >
                  <ImageWithLoading className="w-full" url={imageUrl} />

                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </Link>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export { HomeFeaturedTopics };
