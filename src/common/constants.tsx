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
  // {
  //   title: "Platform overview",
  //   description: "Learn more about this platform.",
  //   icon: <LayoutPanelLeft className="size-8 text-sei-main-light dark:text-sei-main-dark" />,
  //   href: routes.overview,
  // },
  {
    title: "Developer guides",
    description:
      "Find step-by-step guides for building, testing, and launching dapps with Sei.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
      </svg>
    ),
    href: routes.guides,
  },
  // {
  //   title: "Open sourced resources",
  //   description:
  //     "Explore Sei’s, infrastructure solutions, and development tooling.",
  //   icon: <Layers className="size-8 text-sei-main-light dark:text-sei-main-dark" />,
  //   href: externalLinks.resources,
  // },
  {
    title: "Ecosystem",
    description:
      "Explore Sei’s, infrastructure solutions, and development tooling.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
      >
        <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: routes.ecosystem,
    // subItems: [
    //   {
    //     title: "CosmWasm projects",
    //     href: `${routes.ecosystem}?filter=cosmwasm`,
    //     isExternal: false,
    //   },
    //   {
    //     title: "EVM projects",
    //     href: `${routes.ecosystem}?filter=evm`,
    //     isExternal: false,
    //   },
    // ],
  },
  // {
  //   title: "Sei foundation",
  //   description: "Learn more about Sei foundation.",
  //   icon: <Layers className="size-8 text-sei-main-light dark:text-sei-main-dark" />,
  //   href: externalLinks.seiFoundation,
  // subItems: [
  //   {
  //     title: "Twitter accounts",
  //     href: "/",
  //     isExternal: true,
  //   },
  //   {
  //     title: "Resources",
  //     href: externalLinks.resources,
  //     isExternal: true,
  //   },
  //   {
  //     title: "Official documentation",
  //     href: externalLinks.seiDocs,
  //     isExternal: true,
  //   },
  // ],
  // },

  // {
  //   title: "Ecosystem KOLs",
  //   description:
  //     "Explore Sei’s, infrastructure solutions, and development tooling.",
  //   icon: <Layers className="size-8 text-sei-main-light dark:text-sei-main-dark" />,
  //   href: routes.ecosystemKOls,
  // },
  {
    title: "Jobs in Sei ecosystem",
    description: "Explore job opportunities in Sei ecosystem.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
      >
        <path
          fillRule="evenodd"
          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
      </svg>
    ),
    href: routes.jobs,
  },
  {
    title: "FAQ",
    description: "Got questions? Browse our FAQs for quick answers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: routes.faq,
  },
];

//TODO: TOOLS
export const homeCategories: HomeCategory[] = [
  {
    title: "Tool Category 1",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        img: "/tools/tool-1.webp",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        img: "/tools/tool-2.webp",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        img: "/tools/tool-3.webp",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        img: "/tools/tool-1.webp",
        href: "/",
      },
    ],
  },
  {
    title: "Tool Category 2",
    items: [
      {
        title: "Sub category 1",
        desc: "Sub category description",
        img: "/tools/tool-2.webp",
        href: "/",
      },
      {
        title: "Sub category 2",
        desc: "Sub category description",
        img: "/tools/tool-1.webp",
        href: "/",
      },
      {
        title: "Sub category 3",
        desc: "Sub category description",
        img: "/tools/tool-3.webp",
        href: "/",
      },
      {
        title: "Sub category 4",
        desc: "Sub category description",
        img: "/tools/tool-2.webp",
        href: "/",
      },
    ],
  },
];

export const homeInstalls: Topic[] = [
  {
    title: "Other title 1",
    image: "",
    href: "/",
  },
  {
    title: "Other title 2",
    image: "",
    href: "/",
  },
  {
    title: "Other title 3",
    image: "",
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
    image: "/builth-on-sei/builth-1.webp",
    name: "",
    href: "",
  },
  {
    id: "2",
    image: "/builth-on-sei/builth-2.webp",
    name: "",
    href: "",
  },
  {
    id: "3",
    image: "/builth-on-sei/builth-3.webp",
    name: "",
    href: "",
  },
  {
    id: "4",
    image: "/builth-on-sei/builth-4.webp",
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

export enum ECOSYSTEM_TAGS {
  COSMWASM = "cosmwasm",
  EVM = "evm",
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
