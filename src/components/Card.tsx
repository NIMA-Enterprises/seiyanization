import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "block cursor-pointer p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-neutral-800 dark:hover:bg-[#1a1a1a]/70",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "block p-4 bg-white border border-gray-200 rounded-xl dark:bg-[#1a1a1a] dark:border-neutral-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card };
