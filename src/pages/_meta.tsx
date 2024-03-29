import { Meta } from "nextra";

const meta: Meta = {
  overview: {
    display: "hidden",
    theme: {
      layout: "full",
      sidebar: false,
    },
  },
  index: {
    display: "hidden",
    title: "Home",
    type: "page",
    href: "/",
    theme: {
      layout: "full",
      sidebar: false,
    },
  },
  ecosystem: {
    title: "Ecosystem",
    display: "hidden",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  guides: {
    title: "Guides",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  videos: {
    title: "Videos",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  articles: {
    title: "Articles",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  jobs: {
    title: "Jobs",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  tools: {
    title: "Tools",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  faq: {
    title: "FAQ",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
};

export default meta;
