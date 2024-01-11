import { Card } from "@/components/Card";
import { homeCards } from "@/common/constants";

const HomeCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="grid grid-cols-auto-fill-full gap-6 md:grid-cols-2 xl:grid-cols-4">
      {homeCards.map((card) => (
        <Card
          href={card.href}
          className="primary-shadow hover:bg-white dark:hover:bg-[#191919]"
          key={card.title}
        >
          <div className="flex items-start gap-4">
            <div className="w-10">{card.icon}</div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold primary-text">
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
