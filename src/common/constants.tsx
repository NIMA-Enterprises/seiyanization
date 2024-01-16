import {
  PostType,
  HomeCategory,
  HomePost,
  Supporter,
  Topic,
  SeiBuilder,
  Changelog,
  HomeVideo,
} from "@/lib/types";
import { LayoutPanelLeft, Layers, FileCode, FileQuestion } from "lucide-react";

// GLOBAL
export const routes = {
  home: "/",
  overview: "/overview",
  ecosystem: "/ecosystem",
  ecosystemKOls: "/ecosystem-kols",
  guides: "/guides",
  jobs: "/jobs",
  faq: "/faq",
};

const externalLinks = {
  sei: "https://sei.io/",
  seiGithub: "/",
  seiTwitter: "/",
  seiDiscord: "/",
  seiTelegram: "/",
  resources: "/",
  seiFoundation: "/",
  seiDocs: "/",
};
// HOME PAGE
export const homeCards = [
  {
    title: "Platform overview",
    description: "Learn more about this platform.",
    icon: <LayoutPanelLeft className="size-8 text-sei-red" />,
    href: routes.overview,
  },
  {
    title: "Developer guides",
    description:
      "Find step-by-step guides for building, testing, and launching dapps with Sei.",
    icon: <FileCode className="size-8 text-sei-red" />,
    href: routes.guides,
  },
  {
    title: "Ecosystem",
    description: "Explore Sei’s, ecosystem.",
    icon: <Layers className="size-8 text-sei-red" />,
    href: routes.ecosystem,
    subItems: [
      {
        title: "CosmWasm projects",
        href: `${routes.ecosystem}?filter=cosmwasm`,
        isExternal: false,
      },
      {
        title: "EVM projects",
        href: `${routes.ecosystem}?filter=evm`,
        isExternal: false,
      },
    ],
  },
  {
    title: "Sei foundation",
    description: "Learn more about Sei foundation.",
    icon: <Layers className="size-8 text-sei-red" />,
    href: externalLinks.seiFoundation,
    subItems: [
      {
        title: "Twitter accounts",
        href: "/",
        isExternal: true,
      },
      {
        title: "Resources",
        href: externalLinks.resources,
        isExternal: true,
      },
      {
        title: "Official documentation",
        href: externalLinks.seiDocs,
        isExternal: true,
      },
    ],
  },
  {
    title: "Open sourced resources",
    description:
      "Explore Sei’s, infrastructure solutions, and development tooling.",
    icon: <Layers className="size-8 text-sei-red" />,
    href: externalLinks.resources,
  },
  {
    title: "Ecosystem KOLs",
    description:
      "Explore Sei’s, infrastructure solutions, and development tooling.",
    icon: <Layers className="size-8 text-sei-red" />,
    href: routes.ecosystemKOls,
  },
  {
    title: "Open jobs in Sei ecosystem",
    description:
      "Explore Sei’s, infrastructure solutions, and development tooling.",
    icon: <Layers className="size-8 text-sei-red" />,
    href: routes.jobs,
  },
  {
    title: "FAQ",
    description:
      "Got questions? Browse our FAQs for quick answers, or reach out to our support team.",
    icon: <FileQuestion className="size-8 text-sei-red" />,
    href: routes.faq,
  },
];

export const homeCategories: HomeCategory[] = [
  {
    title: "Category 1",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
  {
    title: "Category 2",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
  {
    title: "Category 3",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
  {
    title: "Category 4",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        icon: "megaphone",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        icon: "globe",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        icon: "folder-open",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        icon: "users",
        href: "/",
      },
    ],
  },
];

export const homeInstalls: Topic[] = [
  {
    title: "Other title 1",
    image: "/images/image-placeholder.png",
    href: "/",
  },
  {
    title: "Other title 2",
    image: "/images/image-placeholder.png",
    href: "/",
  },
  {
    title: "Other title 3",
    image: "/images/image-placeholder.png",
    href: "/",
  },
];

export const homeChangelogs: Changelog[] = [
  {
    id: "1",
    title: "Changlelog title 1",
    href: "/",
    date: "2021-01-01",
  },
  {
    id: "2",
    title: "Changlelog title 1",
    href: "/",
    date: "2021-01-01",
  },
  {
    id: "3",
    title: "Changlelog title 1",
    href: "/",
    date: "2021-01-01",
  },
  {
    id: "4",
    title: "Changlelog title 1",
    href: "/",
    date: "2021-01-01",
  },
];

export const homePosts: HomePost[] = [
  {
    url: "/",
    image: "",
    title: "Blog post 1",
    description: "Blog post description 1",
  },
  {
    url: "/",
    image: "",
    title: "Blog post 2",
    description: "Blog post description 2",
  },
  {
    url: "/",
    image: "",
    title: "Blog post 3",
    description: "Blog post description 3",
  },
  {
    url: "/",
    image: "",
    title: "Blog post 4",
    description: "Blog post description 4",
  },
];

export const homeSupportedBy: Supporter[] = [
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

export const homeBuildingOnSei: SeiBuilder[] = [
  {
    id: "1",
    image: "/images/sei.png",
    name: "",
    href: "",
  },
  {
    id: "2",
    image: "/images/sei.png",
    name: "",
    href: "",
  },
  {
    id: "3",
    image: "/images/sei.png",
    name: "",
    href: "",
  },
];

export const homeVideos: HomeVideo[] = [
  {
    title:
      "The fundamental use case of blockchains with Sei Labs Founder Jeff Feng",
    description: "description.",
    image: "",
    url: "https://www.youtube.com/watch?v=OOhwd7VoFcw",
  },
  {
    title:
      "Thesis Ep 23 - How Sei Network solves for blockchain’s trading trilemma",
    description: "description",
    image: "",
    url: "https://www.youtube.com/watch?v=VdEWHZIQrQE",
  },
  {
    title: "What is Sei Network? - simply explained by Sei Co-Founder Jay Jog",
    description: "description",
    image: "",
    url: "https://www.youtube.com/watch?v=k3MhT8Ashig",
  },
  {
    title: "Sei Network: The FASTEST Layer 1 for Crypto Trading??",
    description: "description.",
    image: "",
    url: "https://www.youtube.com/watch?v=1UgL7IXgjQM",
  },
];

export const featuredTopics: Topic[] = [
  {
    title: "Featured Topics Title 1",
    href: "/",
  },
  {
    title: "Featured Topics Title 2",
    href: "/",
  },
  {
    title: "Featured Topics Title 3",
    href: "/",
  },
  {
    title: "Featured Topics Title 4",
    href: "/",
  },
  {
    title: "Featured Topics Title 5",
    href: "/",
  },
  {
    title: "Featured Topics Title 6",
    href: "/",
  },
  {
    title: "Featured Topics Title 7",
    href: "/",
  },
  {
    title: "Featured Topics Title 8",
    href: "/",
  },
  {
    title: "Featured Topics Title 9",
    href: "/",
  },
  {
    title: "Featured Topics Title 10",
    href: "/",
  },
];

// GUIDES PAGE
export enum GUIDE_TAGS {
  TAG1 = "tag1",
  TAG2 = "tag2",
  TAG3 = "tag3",
  TAG4 = "tag4",
  TAG5 = "tag5",
}

export enum JOB_TAGS {
  ENGINEERING = "engineering",
  MARKETING = "marketing",
}

export const guides: PostType[] = [
  {
    title: "Guide title 1",
    description: "Guide description",
    date: "01.09.2023.",
    href: "guides/guide-1-example",
    image: "",
    tags: [GUIDE_TAGS.TAG1, GUIDE_TAGS.TAG2],
  },
  {
    title: "Guide title 2",
    description: "Guide description",
    date: "24.08.2023.",
    href: "guides/guide-1-example",
    image: "",
    tags: [GUIDE_TAGS.TAG1, GUIDE_TAGS.TAG2],
    featured: true,
  },
  {
    title: "Guide title 3",
    description: "Guide description",
    date: "31.08.2023.",
    href: "guides/guide-1-example",
    image: "",
    tags: [GUIDE_TAGS.TAG5],
    featured: true,
  },
  {
    title: "Guide title 4",
    description: "Guide description",
    date: "11.08.2023.",
    href: "guides/guide-1-example",
    image: "",
    tags: [GUIDE_TAGS.TAG3],
    featured: true,
  },
  {
    title: "Guide title 5",
    description: "Guide description",
    date: "02.06.2023.",
    href: "guides/guide-1-example",
    image: "",
    tags: [GUIDE_TAGS.TAG5],
    featured: false,
  },
  {
    title: "Guide title 6",
    description: "Guide description",
    date: "14.07.2023.",
    href: "guides/guide-1-example",
    image: "",
    tags: [GUIDE_TAGS.TAG1],
    featured: false,
  },
  {
    title: "Guide title 7",
    description: "Guide description",
    image: "",
    date: "04.08.2023.",
    href: "guides/guide-1-example",
    tags: [GUIDE_TAGS.TAG4],
    featured: false,
  },
];
