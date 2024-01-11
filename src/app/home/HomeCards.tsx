import { Card } from "@/components/Card";
import { LayoutPanelLeft, Layers, FileCode, FileQuestion } from "lucide-react";

const homeCards = [
  {
    title: "Platform overview",
    description: "Learn more about this platform.",
    icon: <LayoutPanelLeft className="size-10" />,
    href: "/overview",
  },
  {
    title: "Ecosystem",
    description:
      "Explore Sei’s, infrastructure solutions, and development tooling.",
    icon: <Layers className="size-10" />,
    href: "/products",
  },
  {
    title: "Developer guides",
    description:
      "Find step-by-step guides for building, testing, and launching dapps with Sei.",
    icon: <FileCode className="size-10" />,
    href: "/guides",
  },
  {
    title: "FAQ",
    description:
      "Got questions? Browse our FAQs for quick answers, or reach out to our support team.",
    icon: <FileQuestion className="size-10" />,
    href: "/faq",
  },
];

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
