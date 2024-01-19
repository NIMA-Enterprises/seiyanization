import React from "react";
import { DocSearch } from "@docsearch/react";

const SearchAlgolia: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DocSearch
      appId={process.env.ALGOLIA_APP_ID || ""}
      apiKey={process.env.ALGOLIA_API_KEY || ""}
      indexName={process.env.ALGOLIA_INDEX_NAME || ""}
      placeholder="Search Docs..."
      maxResultsPerGroup={20}
      insights
    />
  );
};

export { SearchAlgolia };
