import React from "react";
import { homeSupportedBy } from "@/common/constants";

import { Card } from "@/components/Card";

const SupportedBy: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold text-center">Supported by</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 items-center">
        {homeSupportedBy.map((supporter) => (
          <Card
            className="flex items-center justify-center px-2 py-0 bg-gray-50"
            href={supporter.url}
            key={supporter.name}
          >
            <div className="h-20 flex items-center">{supporter.image}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { SupportedBy };
