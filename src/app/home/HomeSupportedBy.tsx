import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";

const supportedBy = [
  {
    id: "1",
    image: "/images/sei.png",
    name: "",
    href: "",
  },
  {
    id: "2",
    image: "/images/sei.png",
    name: "",
    href: "",
  },
  {
    id: "3",
    image: "/images/sei.png",
    name: "",
    href: "",
  },
];

const HomeSupportedBy: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      )}
    >
      <div className="flex flex-col gap-2">
        <span className="text-md font-semibold">Supported by</span>
        <Link
          className="flex items-center gap-1 text-sm link-text-no-underline"
          href="/"
        >
          <span>See all</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {supportedBy.map((supported) => (
          <Image
            className="border dark:border-neutral-800"
            key={supported.name}
            alt={supported.name}
            src={supported.image}
            width={48}
            height={48}
            priority
          />
        ))}
      </div>
    </Card>
  );
};

export { HomeSupportedBy };
