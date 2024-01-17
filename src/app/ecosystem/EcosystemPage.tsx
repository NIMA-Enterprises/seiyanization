import React from "react";
import { HomeTool, PostType } from "@/lib/types";

import { Card } from "@/components/Card";

export const ecosystem: HomeTool[] = [
  {
    title: "Ecosystem category 1",
    items: [
      {
        title: "Ecosystem product 1",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-1.webp",
        href: "/",
      },
      {
        title: "Ecosystem product 2",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-2.webp",
        href: "/",
      },
      {
        title: "Ecosystem product 3",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-3.webp",
        href: "/",
      },
      {
        title: "Ecosystem product 4",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-1.webp",
        href: "/",
      },
    ],
  },
  {
    title: "Ecosystem category 2",
    items: [
      {
        title: "Ecosystem product 1",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-2.webp",
        href: "/",
      },
      {
        title: "Ecosystem product 2",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-1.webp",
        href: "/",
      },
      {
        title: "Ecosystem product 3",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-3.webp",
        href: "/",
      },
      {
        title: "Ecosystem product 4",
        desc: "Short description about ecosystem product",
        img: "/tools/tool-2.webp",
        href: "/",
      },
    ],
  },
];

const EcosystemPage: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="pb-12">
      <div className="mb-12 py-20 header">
        <div className="mx-auto px-6 max-w-[90rem]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sei-heading-dark">
            Ecosystem
          </h1>
          <p className="opacity-80 text-xl text-sei-subheading-dark">
            Explore projects in SEI Ecosystem.
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-6 px-6 max-w-[90rem]">
        {ecosystem.map((category) => (
          <div key={category.title} className="flex flex-col gap-4">
            <h2 className="text-md uppercase opacity-80">{category.title}</h2>
            <div className="grid gap-4 grid-cols-auto-fill-full md:grid-cols-2 xl:grid-cols-4">
              {category.items.slice(0, 4).map((tool) => (
                <Card
                  className="flex items-center  cursor-pointer bg-sei-card-inner-light dark:bg-sei-card-inner-dark border-none p-6"
                  href={tool.href}
                  key={tool.title}
                >
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={tool.img} className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md">{tool.title}</p>
                      <p className="text-sm text-sei-subheading-light dark:text-sei-subheading-dark">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { EcosystemPage };
