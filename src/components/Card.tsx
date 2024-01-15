import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "block cursor-pointer p-4 bg-sei-card-bg-light border border-sei-border-light rounded-xl  dark:bg-sei-card-bg-dark dark:border-sei-border-dark hover:dark:bg-sei-card-hover-dark hover:dark:border-transparent hover:border-transparent hover:bg-sei-card-hover-light",
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
        "block p-4 bg-sei-card-bg-light border border-sei-border-light rounded-xl dark:bg-sei-card-bg-dark dark:border-sei-border-dark",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Card };
