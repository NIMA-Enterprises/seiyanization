import {
  PostType,
  HomeTool,
  HomePost,
  Supporter,
  Topic,
  SeiBuilder,
  Changelog,
  HomeVideo,
} from "@/lib/types";
import { FileQuestion } from "lucide-react";

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

// HOME PAGE
export const homeCards = [
  {
    title: "Seiyanization overview",
    description:
      "Learn more about this platform, idea, inspiration, and future plans.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
    ),
    href: routes.overview,
  },
  {
    title: "Ecosystem Projects",
    description: "Discover all the apps and projects in the Sei ecosystem.",
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
  {
    title: "Guides",
    description:
      "Find step-by-step guides for using, building, and launching dapps on SEI.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
        />
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
    title: "JOB Board",
    description: "Explore job opportunities in the SEI ecosystem projects.",
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
  // {
  //   title: "FAQ",
  //   description: "Got questions? Browse our FAQs for quick answers.",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="size-8 text-sei-main-light dark:text-sei-main-dark"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  //   href: routes.faq,
  // },
];
export const TOOL_TAGS = {
  APPS: "Apps",
  CODE: "Code",
};

//TODO: TOOLS
export const homeTools: HomeTool[] = [
  {
    title: TOOL_TAGS.APPS,
    items: [
      {
        title: "Sei Faucet",
        desc: "",
        img: "/images/sei.png",
        href: "https://sei-faucet.nima.enterprises/",
      },
      {
        title: "Sei Bridge",
        desc: "",
        img: "/images/sei.png",
        href: "https://app.sei.io/bridge",
      },
    ],
  },
  {
    title: TOOL_TAGS.CODE,
    items: [
      {
        title: "Sei Solidity Boilerplate",
        desc: "",
        img: "/images/sei.png",
        href: "https://github.com/NIMA-Enterprises/solidity-boilerplate",
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

export enum VIDEO_TAGS {
  TUTORIAL = "tutorial",
  CONCEPTS = "concepts",
}

export const embeddedVideos = [
  {
    id: 1,
    tags: [VIDEO_TAGS.CONCEPTS],
    embedded: (
      <iframe
        width=""
        height=""
        src="https://www.youtube.com/embed/OOhwd7VoFcw?si=p8KRF6VXg3Au7Cjb"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 2,
    tags: [VIDEO_TAGS.CONCEPTS],
    embedded: (
      <iframe
        width=""
        height=""
        src="https://www.youtube.com/embed/VdEWHZIQrQE?si=OiuLoh9KGvieUUT5"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 3,
    tags: [VIDEO_TAGS.CONCEPTS],
    embedded: (
      <iframe
        width=""
        height=""
        src="https://www.youtube.com/embed/VdEWHZIQrQE?si=OiuLoh9KGvieUUT5"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 4,
    tags: [VIDEO_TAGS.TUTORIAL],
    embedded: (
      <iframe
        width=""
        height=""
        src="https://www.youtube.com/embed/k3MhT8Ashig?si=fAOr2Es3kKNSw-nC"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
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

export enum ARTICLE_TAGS {
  ENGINEERING = "engineering",
  MARKETING = "marketing",
}

export const articles: PostType[] = [
  {
    title: "Article title 1",
    description: "Article description",
    date: "01.09.2023.",
    href: "articles/article-1-example",
    image: "",
    tags: [ARTICLE_TAGS.MARKETING],
  },
  {
    title: "Article title 2",
    description: "Article description",
    date: "24.08.2023.",
    href: "articles/article-1-example",
    image: "",
    tags: [ARTICLE_TAGS.ENGINEERING],
    featured: true,
  },
];

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
