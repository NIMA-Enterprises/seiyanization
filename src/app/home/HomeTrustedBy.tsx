import { Card } from "@/components/Card";

import { FileQuestion } from "lucide-react";
import React from "react";

const logos = [
  {
    name: "Company 1",
    url: "/",
    image: <FileQuestion />,
  },
  {
    name: "Company 1",
    url: "/",
    image: <FileQuestion />,
  },
  {
    name: "Company 1",
    url: "/",
    image: <FileQuestion />,
  },
  {
    name: "Company 1",
    url: "/",
    image: <FileQuestion />,
  },
];

const HomeTrustedBy: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold text-center">
        Trusted by community
      </h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 items-center">
        {logos.map((logo) => (
          <Card
            className="flex items-center justify-center px-2 py-0 bg-gray-50"
            href={logo.url}
            key={logo.name}
          >
            <div className="h-20 flex items-center">{logo.image}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { HomeTrustedBy };
