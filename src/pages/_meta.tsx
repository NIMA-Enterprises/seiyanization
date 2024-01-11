import { Meta } from "nextra";

const meta: Meta = {
  index: {
    display: "hidden",
    theme: {
      layout: "full",
      sidebar: false,
    },
  },
  documentation: {
    title: "Documentation",
    type: "page",
    href: "/",
  },
  guides: {
    title: "Guides",
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
