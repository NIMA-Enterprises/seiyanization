import { useRouter } from "next/router";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";
import { homeCards } from "@/common/constants";
import { Link } from "nextra-theme-docs";

const HomeCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-auto-fill-full gap-6 md:grid-cols-2")}>
      {homeCards.map((card) => (
        <Card
          key={card.title}
          className="bg-sei-card-bg-light border border-sei-border-light rounded-xl  dark:bg-sei-card-bg-dark dark:border-sei-border-dark hover:dark:bg-sei-card-hover-dark hover:dark:border-transparent hover:border-transparent hover:bg-sei-card-hover-light"
        >
          <div className="flex items-start gap-4">
            <div className="w-10">{card.icon}</div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold   text-sei-heading-light dark:text-sei-heading-dark">
                {card.title}
              </h1>
              <p className="text-sm text-sei-subheading-light dark:text-sei-subheading-dark">
                {card.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 pl-14 mt-2">
            {card?.subItems?.map((subItem) => {
              return (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  target={subItem.isExternal ? "_blank" : undefined}
                  className="text-sm underline font-semibold text-sei-red cursor-pointer"
                >
                  {subItem.title}
                </Link>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
};

export { HomeCards };
