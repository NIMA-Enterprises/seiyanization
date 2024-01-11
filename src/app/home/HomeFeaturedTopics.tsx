import Link from "next/link";
import { Card } from "@/components/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredTopics, homeInstalls } from "@/common/constants";

const HomeFeaturedTopics = () => {
  return (
    <Card className="pt-2 rounded-xl">
      <Tabs defaultValue="Popular topics">
        <TabsList className="flex items-center justify-start overflow-auto gap-4 bg-transparent text-inherit">
          <TabsTrigger
            className="p-0 text-md font-semibold justify-start !rounded-none !bg-transparent !shadow-none link-text-hover data-[state=active]:link-text-no-underline"
            value="Popular topics"
          >
            Popular topics
          </TabsTrigger>
          <TabsTrigger
            className="p-0 text-md font-semibold justify-start !rounded-none !bg-transparent !shadow-none link-text-hover data-[state=active]:link-text-no-underline"
            value="other"
          >
            Other
          </TabsTrigger>
        </TabsList>
        <hr className="dark:border-neutral-800 mb-4" />
        <TabsContent value="Popular topics">
          <div className="grid grid-cols-auto-fill-full gap-2 sm:gap-4 sm:grid-cols-2">
            <ul className="pl-5 flex flex-col gap-2 list-disc">
              {featuredTopics.slice(0, 5).map((topic) => (
                <li className="w-fit" key={topic.title}>
                  <Link
                    className="flex items-center gap-1 link-text-hover"
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
                    className="flex items-center gap-1 link-text-hover"
                    href={topic.href}
                  >
                    <h3 className="text-sm font-semibold">{topic.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="other">
          <div className="grid grid-cols-auto-fill-full sm:grid-cols-3 gap-4">
            {homeInstalls.map((item) => (
              <Link
                className="flex flex-col gap-2 link-text-hover"
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                key={item.title}
              >
                <img className="w-full" src={item.image} alt={item.title} />
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export { HomeFeaturedTopics };
