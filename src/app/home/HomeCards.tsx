import { Card } from "@/components/Card";
import { homeCards } from "@/common/constants";

const HomeCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="grid grid-cols-auto-fill-full hover: gap-6 md:grid-cols-2">
      {homeCards.map((card) => (
        <Card
          href={card.href}
          className="hover:bg-gray-100 dark:hover:bg-sei-black/70"
          key={card.title}
        >
          <div className="flex items-start gap-4">
            <div className="w-10">{card.icon}</div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold text-sei-red">
                {card.title}
              </h1>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export { HomeCards };
