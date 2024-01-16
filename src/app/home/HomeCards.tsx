import { useRouter } from "next/router";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";
import { homeCards } from "@/common/constants";

const HomeCards: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "grid grid-cols-auto-fill-full gap-6 grid-cols-2 md:grid-cols-4"
      )}
    >
      {homeCards.map((card) => (
        <Card
          onClick={() => {
            if (card.href.includes("https")) {
              window.open(card.href, "_blank");
              return;
            }
            router.push(card.href);
          }}
          key={card.title}
          className="bg-sei-card-bg-light border cursor-pointer border-sei-border-light rounded-xl  dark:bg-sei-card-bg-dark dark:border-sei-border-dark hover:dark:bg-sei-card-hover-dark hover:dark:border-transparent hover:border-transparent hover:bg-sei-card-hover-light"
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
            {/* {card?.subItems?.map((subItem) => {
              return (
                <p
                  key={subItem.title}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (subItem.isExternal) {
                      window.open(subItem.href, "_blank");
                      return;
                    }

                    router.push(subItem.href);
                  }}
                  className="w-fit text-sm font-semibold cursor-pointer text-sei-main-light dark:text-sei-main-dark hover:dark:text-sei-heading-dark hover:text-sei-heading-light"
                >
                  {subItem.title}
                </p>
              );
            })} */}
          </div>
        </Card>
      ))}
    </div>
  );
};

export { HomeCards };
