import React from "react";
import { cn } from "@/lib/utils";
import { IconCard } from "@/components/IconCard";
import { cx } from "class-variance-authority";

const categories = [
  {
    title: "Category 1",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
  {
    title: "Category 2",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
  {
    title: "Category 3",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
  {
    title: "Category 4",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
];

const HomeCategories: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cx("flex flex-col gap-6")}>
      <h1 className="text-2xl font-semibold">Categories</h1>
      {categories
        .filter((category) => category.title !== "Platform")
        .map((category) => (
          <div key={category.title} className="flex flex-col gap-4">
            <h2 className="text-md uppercase opacity-80">{category.title}</h2>
            <div className="grid gap-4 grid-cols-auto-fill-full md:grid-cols-2 xl:grid-cols-4">
              {category.items.map((product) => (
                <IconCard
                  key={product.title}
                  {...product}
                  description={product.desc}
                  className="primary-shadow rounded-lg hover:bg-white dark:hover:bg-[#111]"
                  noCard
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export { HomeCategories };
