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
    title: "Home",
    type: "page",
    href: "/",
    theme: {
      layout: "full",
      sidebar: false,
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
  jobs: {
    title: "Jobs",
    type: "page",
    theme: {
      layout: "raw",
      sidebar: true,
    },
  },
  faq: {
    title: "FAQ",
    type: "page",
  },
};

export default meta;
