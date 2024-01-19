import React from "react";
import { DocSearch } from "@docsearch/react";

const SearchAlgolia: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ""}
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ""}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ""}
      placeholder="Search Docs..."
      maxResultsPerGroup={20}
      insights
    />
  );
};

export { SearchAlgolia };
