import { Card } from "@/components/Card";
import { homeCards } from "@/common/constants";
import Link from "next/link";

const HomeCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="grid grid-cols-auto-fill-full hover: gap-6 md:grid-cols-2">
      {homeCards.map((card) => (
        <Card
          className="hover:bg-gray-100 dark:hover:bg-sei-black/70"
          key={card.title}
        >
          <div className="flex items-start gap-4">
            <div className="w-10">{card.icon}</div>
            <div className="flex flex-col gap-1">
              <Link href={card.href}>
                <h1 className="text-xl font-semibold text-sei-red">
                  {card.title}
                </h1>
              </Link>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-14 mt-2">
            {card?.subItems?.map((subItem) => {
              return (
                <Link
                  key={subItem.title}
                  target={subItem.isExternal ? "_blank" : undefined}
                  href={subItem.href}
                  className="text-sm underline font-semibold text-sei-red"
                >
                  <p> {subItem.title}</p>
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
