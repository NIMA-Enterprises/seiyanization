import React from "react";

import { Callout } from "nextra/components";
import { jobs } from "@/app/jobs/JobsPage";

import { useConfig } from "nextra-theme-docs";

const JobClosedTag = () => {
  const { frontMatter } = useConfig();

  const currentJob = jobs.find((job) => frontMatter.title == job.title);

  const expiresAt = new Date(
    currentJob?.expiresAt?.split(".")?.reverse()?.join("-") || ""
  )?.getTime();

  if (!currentJob) {
    return <></>;
  }

  if (expiresAt > Date.now()) {
    return <></>;
  }

  return (
    <Callout type="warning" emoji="⚠️">
      This job post is closed.
    </Callout>
  );
};

export default JobClosedTag;
