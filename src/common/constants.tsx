import {
  PostType,
  HomeTool,
  HomePost,
  Supporter,
  Topic,
  Changelog,
} from "@/lib/types";
import { Boxes, FileQuestion, ScrollText, Settings, Vault } from "lucide-react";

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

export const becomeSeiyanizationWriterForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSccQRYEorCMBX3Y-tq55GINpMnTHaiGu3wkv1by1nJJMLV91Q/viewform";

// HOME PAGE
export const homeCards = [
  {
    title: "Seiyanization Overview",
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
  },
  {
    title: "Guides",
    description:
      "Find step-by-step guides for using, building, and launching dapps on Sei.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 text-sei-main-light dark:text-sei-main-dark"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    href: routes.guides,
  },
  {
    title: "Job Board",
    description: "Explore job opportunities in the Sei ecosystem projects.",
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
];
export const TOOL_TAGS = {
  GENERAL: "General",
  APPS: "Apps",
  CODE: "Code",
};

//TODO: TOOLS
export const homeTools: HomeTool[] = [
  {
    title: TOOL_TAGS.GENERAL,
    items: [
      {
        title: "Sei EVM Faucet",
        desc: "Faucet to claim EVM testnet SEI tokens.",
        icon: (
          <Vault className="stroke-sei-main-light dark:stroke-sei-main-dark" />
        ),
        href: "https://sei-faucet.nima.enterprises/",
      },
      {
        title: "Sei CosmWasm Faucet",
        desc: "Faucet to claim CosmWasm testnet SEI tokens ",
        icon: (
          <Vault className="stroke-sei-main-light dark:stroke-sei-main-dark" />
        ),
        href: "https://atlantic-2.app.sei.io/faucet",
      },
      {
        title: "Wormhole Sei Bridge",
        desc: "Bridge assets from other chains to SEI",
        icon: (
          <Settings className="stroke-sei-main-light dark:stroke-sei-main-dark" />
        ),
        href: "https://app.sei.io/bridge",
      },
      {
        title: "Sei Solidity Boilerplate",
        desc: "Boilerplate for easily starting SEI EVM project.",
        icon: (
          <ScrollText className="stroke-sei-main-light dark:stroke-sei-main-dark" />
        ),
        href: "https://github.com/NIMA-Enterprises/solidity-boilerplate",
      },
      {
        title: "Ethereum Signature Bank",
        desc: "Easily reverse engineer solidity function selector to function signature",
        icon: (
          <Boxes className="stroke-sei-main-light dark:stroke-sei-main-dark" />
        ),
        href: "https://esb.nima.enterprises",
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
    url: "https://blog.sei.io/sei-blockchain-carbon-neutral/",
    image:
      "https://blog.sei.io/content/images/size/w2000/2023/12/NEW-Templates--41--1.png",
    title: "The Sei Blockchain is going Carbon Neutral\n",
    description:
      "Sei team understands the concerns around the sustainability of this tech and the importance of reducing the environmental impact.",
  },
  {
    url: "https://blog.sei.io/real-world-assets-on-sei-what-are-rwas/",
    image:
      "https://blog.sei.io/content/images/size/w2000/2023/12/NEW-Templates--38-.png",
    title: "Real World Assets on Sei: what are RWAs?",
    description:
      "Real World Assets (RWAs) are transforming the blockchain landscape, bridging the gap between physical and digital worlds.",
  },
  {
    url: "https://blog.sei.io/sei-v2-the-first-parallelized-evm/",
    image:
      "https://blog.sei.io/content/images/size/w2000/2023/11/image--70--1.png",
    title: "Sei v2 - The First Parallelized EVM Blockchain",
    description:
      "Sei Labs introduces and proposes an upgrade to Sei: v2 - the first parallelized EVM.",
  },
  {
    url: "https://blog.sei.io/sei-acc/",
    image:
      "https://blog.sei.io/content/images/size/w2000/2024/01/Sei-Launchpad-Program.jpeg",
    title: "The sei/acc Accelerator (Launchpad) Program is here",
    description:
      "Aims to identify the strongest founders in crypto, facilitate revolutionary decentralized applications (dapps) and accelerate ecosystem expansion",
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

export enum VIDEO_TAGS {
  TUTORIAL = "Tutorials",
  FOUNDERS = "SEI Founders",
  OVERVIEW = "Overview",
  ECOSYSTEM = "Ecosystem",
  PODCAST = "Podcast",
}

export const videos = [
  {
    id: 1,
    tags: [VIDEO_TAGS.FOUNDERS],
    title:
      "The fundamental use case of blockchains with Sei Labs Founder Jeff Feng | EP #96",
    image: "https://img.youtube.com/vi/OOhwd7VoFcw/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=OOhwd7VoFcw",
    description: "",
    featured: false,
  },
  {
    id: 2,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "DeFi by Design EP120: Sei Network Explained",
    image: "https://img.youtube.com/vi/6MlC_JDBU74/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=6MlC_JDBU74",
    description: "",
    featured: false,
  },
  {
    id: 3,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "What is Sei Network? - simply explained by Sei Co-Founder Jay Jog",
    image: "https://img.youtube.com/vi/k3MhT8Ashig/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=k3MhT8Ashig",
    description: "",
    featured: false,
  },
  {
    id: 4,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "Steady Lads #20: w/ Jeff Feng • Sei Labs — Co-Founder\n",
    image: "https://img.youtube.com/vi/XQcZf4zpFcc/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=",
    description: "",
    featured: false,
  },
  {
    id: 5,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "Sei Network: Interview with Sei Labs Co-Founder Jay Jog",
    image: "https://img.youtube.com/vi/J0AfMFLvc80/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=J0AfMFLvc80",
    description: "",
    featured: false,
  },
  {
    id: 6,
    tags: [VIDEO_TAGS.OVERVIEW],
    title: "Sei - The Fastest Blockchain Ever\n",
    image: "https://img.youtube.com/vi/TgUwqETffZs/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=TgUwqETffZs",
    description: "",
    featured: false,
  },
  {
    id: 7,
    tags: [VIDEO_TAGS.OVERVIEW],
    title: "Sei Network: The FASTEST Layer 1 for Crypto Trading??",
    image: "https://img.youtube.com/vi/1UgL7IXgjQM/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=1UgL7IXgjQM",
    description: "",
    featured: false,
  },
  {
    id: 8,
    tags: [VIDEO_TAGS.FOUNDERS],
    title:
      "Thesis Ep 23 - How Sei Network solves for blockchain’s trading trilemma",
    image: "https://img.youtube.com/vi/VdEWHZIQrQE/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=VdEWHZIQrQE",
    description: "",
    featured: false,
  },
  {
    id: 9,
    tags: [VIDEO_TAGS.ECOSYSTEM, VIDEO_TAGS.PODCAST],
    title: "DragonSwap w/ Vasco and Cooltimes",
    image: "https://img.youtube.com/vi/drcPer2JxAQ/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=drcPer2JxAQ",
    description: "",
    featured: false,
  },
  {
    id: 10,
    tags: [VIDEO_TAGS.FOUNDERS, VIDEO_TAGS.PODCAST],
    title: "A Guide to Sei V2: Parallelizing The EVM ",
    image: "https://img.youtube.com/vi/8dNGOKjDfIg/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=8dNGOKjDfIg",
    description: "",
    featured: true,
  },
  {
    id: 11,
    tags: [VIDEO_TAGS.ECOSYSTEM, VIDEO_TAGS.OVERVIEW],
    title:
      "How Parallelized State Execution Unlocks Transactional Throughput at Scale | Logan Jastremski",
    image: "https://img.youtube.com/vi/x9Nz4WKJrfs/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=x9Nz4WKJrfs",
    description: "",
    featured: false,
  },
  {
    id: 12,
    tags: [VIDEO_TAGS.OVERVIEW],
    title:
      "Sei (SEI) Crypto Overview: Highly Scalable Blockchain with Parallelization",
    image: "https://img.youtube.com/vi/JDtrE-IimpE/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=JDtrE-IimpE",
    description: "",
    featured: false,
  },
  {
    id: 14,
    tags: [VIDEO_TAGS.OVERVIEW],
    title: "What is Sei? - Sei Blockchain Network Explained",
    image: "https://img.youtube.com/vi/Iv7zz45izyM/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=Iv7zz45izyM",
    description: "",
    featured: false,
  },
  {
    id: 15,
    tags: [VIDEO_TAGS.TUTORIAL, VIDEO_TAGS.OVERVIEW],
    title: "The Ultimate SEI Crypto Network Starter Guide",
    image: "https://img.youtube.com/vi/V9otK800vYw/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=V9otK800vYw",
    description: "",
    featured: false,
  },
  {
    id: 16,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "SEI Network Explained - 7 Things You Need to Know",
    image: "https://img.youtube.com/vi/qj81qaO4Jcs/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=qj81qaO4Jcs",
    description: "",
    featured: false,
  },
  {
    id: 17,
    tags: [VIDEO_TAGS.OVERVIEW],
    title:
      "SEI Network: FASTEST Layer 1 For Crypto Trading? (SEI All Time Highs)",
    image: "https://img.youtube.com/vi/Sv6BkSl-AwA/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=Sv6BkSl-AwA",
    description: "",
    featured: false,
  },
  {
    id: 18,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "What is Sei Network? $SEI $ATOM",
    image: "https://img.youtube.com/vi/17AQFhGc1OY/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=17AQFhGc1OY",
    description: "",
    featured: false,
  },
  {
    id: 19,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title:
      "Sei Network: The $100 Billion Protocol? (Complete Breakdown + SEI Tokenomics)",
    image: "https://img.youtube.com/vi/a4ShsnGA2LI/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=a4ShsnGA2LI",
    description: "",
    featured: false,
  },
  {
    id: 20,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "SEI NETWORK: NEXT SOLANA OF 2025?",
    image: "https://img.youtube.com/vi/It-z1ozcA0o/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=It-z1ozcA0o",
    description: "",
    featured: false,
  },
  {
    id: 21,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "Sei Network, a year and a half report",
    image: "https://img.youtube.com/vi/gtV0GbmY1QA/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=gtV0GbmY1QA",
    description: "",
    featured: false,
  },
  {
    id: 22,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "Faster than Solana? Sei Network is the FASTEST Cosmos Chain ⚡️",
    image: "https://img.youtube.com/vi/wmFeJNweq3c/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=wmFeJNweq3c",
    description: "",
    featured: false,
  },
  {
    id: 23,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "SEI vs Solana vs Others - Which Crypto is Fastest?",
    image: "https://img.youtube.com/vi/An6iaqCq6JY/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=An6iaqCq6JY",
    description: "",
    featured: false,
  },
  {
    id: 24,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "What's new in 2024",
    image: "https://img.youtube.com/vi/IMWxVu3sJuQ/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=IMWxVu3sJuQ",
    description: "",
    featured: false,
  },
  {
    id: 25,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title:
      "All About Sei: The First Parallelized EVM - Jay Jog, Sei Network, Ep. 250",
    image: "https://img.youtube.com/vi/UsFHaXi4Yek/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=UsFHaXi4Yek",
    description: "",
    featured: false,
  },
  {
    id: 26,
    tags: [VIDEO_TAGS.TUTORIAL],
    title: "EASILY Add The SEI Network To Keplr (In 56 Seconds)",
    image: "https://img.youtube.com/vi/VJPpU8uw6jY/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=VJPpU8uw6jY",
    description: "",
    featured: false,
  },
  {
    id: 27,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "SEI Blockchain Breakdown & Top ALT-CHAINS to Watch",
    image: "https://img.youtube.com/vi/QA9ZplpSzm8/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=QA9ZplpSzm8",
    description: "",
    featured: false,
  },
  {
    id: 28,
    tags: [VIDEO_TAGS.TUTORIAL],
    title: "How to Stake SEI - Full Staking Guide",
    image: "https://img.youtube.com/vi/gI4zSRqdT00/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=gI4zSRqdT00",
    description: "",
    featured: false,
  },
  {
    id: 29,
    tags: [VIDEO_TAGS.OVERVIEW],
    title: "New Blockchain 2X Faster than Solana ($SEI)",
    image: "https://img.youtube.com/vi/7qoJaHkz3-o/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=7qoJaHkz3-o",
    description: "",
    featured: false,
  },
  {
    id: 30,
    tags: [VIDEO_TAGS.OVERVIEW, VIDEO_TAGS.ECOSYSTEM],
    title: "How Much SEI Network Do I Need ? SEI Network Update #seinetwork",
    image: "https://img.youtube.com/vi/cfFwAPsLlPo/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=cfFwAPsLlPo",
    description: "",
    featured: false,
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
  ENGINEERING = "Engineering",
  MARKETING = "Marketing",
  COMMUNITY = "Community",
  TUTORIAL = "Tutorial",
}

export enum ECOSYSTEM_TAGS {
  COSMWASM = "cosmwasm",
  EVM = "evm",
}

export enum JOB_TAGS {
  ENGINEERING = "Engineering",
  MARKETING = "Marketing",
  COMMUNITY = "Community",
  ACTIVE = "Active Now",
}

export enum ARTICLE_TAGS {
  ENGINEERING = "Engineering",
  MARKETING = "Marketing",
  COMMUNITY = "Community",
  RESEARCH = "Research",
}

export const submenuItems = [
  {
    title: "Seiyanization",
    items: [
      {
        title: "Overview",
        shortDescription:
          "Learn more about this platform, idea, inspiration, and future plans.",
        icon: "note",
        href: "/overview",
      },
      {
        title: "Guides",
        shortDescription:
          "Find step-by-step guides for using, building, and launching dapps on Sei.",
        icon: "terminal",
        href: "/guides",
      },
      {
        title: "Articles",
        shortDescription:
          "Read Community written Articles on how to use Sei and its Ecosystem",
        icon: "folder-open",
        href: "/articles",
      },
      {
        title: "Videos",
        shortDescription: "Learn more by watching some of the Videos",
        icon: "video",
        href: "/videos",
      },
      {
        title: "Job Board",
        shortDescription:
          "Explore job opportunities in the Sei ecosystem projects.",
        icon: "case",
        href: "/jobs",
      },
      {
        title: "FAQ",
        shortDescription:
          "Get answers to the Frequently Asked Questions about the Platform",
        icon: "question",
        href: "/faq",
      },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      {
        title: "Projects",
        shortDescription: "Explore Projects in Sei Ecosystem",
        icon: "globe",
        href: "/ecosystem",
      },
      {
        title: "Tools",
        shortDescription: "Explore Tools in Sei Ecosystem",
        icon: "wrench",
        href: "/tools",
      },
    ],
  },
  {
    title: "Sei",
    items: [
      {
        title: "About Sei",
        shortDescription: "Learn more about Sei.",
        icon: "cloud",
        href: "https://docs.sei.io/learn/about-sei",
      },
      {
        title: "Get Started (Documentation)",
        shortDescription:
          "Use this beginner-friendly guide to start building on Sei.",
        icon: "codesandbox",
        href: "https://docs.sei.io/develop/get-started",
      },
      {
        title: "Whitepaper",
        shortDescription: "Technical Details of Sei Chain.",
        icon: "scroll",
        href: "https://github.com/sei-protocol/sei-chain/blob/3c9576fee3494ce039df684624f918dd8066ba3f/whitepaper/Sei_Whitepaper.pdf",
      },
      {
        title: "Resources",
        shortDescription:
          "Resources that can be used for Development and Testing",
        icon: "settings",
        href: "https://docs.sei.io/develop/resources",
      },
      {
        title: "Blog",
        shortDescription: "Sei Project Updates and Partnership announcements",
        icon: "folder-open",
        href: "https://blog.sei.io/",
      },
      {
        title: "FAQ",
        shortDescription:
          "Get answers to the Frequently Asked Questions about Sei",
        icon: "question",
        href: "https://docs.sei.io/develop/faq",
      },
    ],
  },
];

export const articles: PostType[] = [
  {
    title: "What makes Parallelized EVM so special?",
    description:
      "Comparative Analysis of SEI Network and Other General-Purpose Layer 1 Blockchains",
    date: "18.01.2024.",
    author: "Nikola Madjarevic",
    xUsername: "@madjarevicn",
    href: "articles/what-makes-parallelized-evm-special",
    image: "",
    tags: [ARTICLE_TAGS.RESEARCH],
  },
  {
    title: "Meme Marketing in Web3 Communities - with Sei Case Study",
    description:
      "Discover the power of meme marketing in Web3 communities with a focus on Sei's Red Pepe. Learn best practices and the impact of memes on brand engagement and relatability.",
    date: "18.01.2024.",
    author: "Milica B",
    xUsername: "@MilicaBalaban4",
    href: "articles/meme-marketing-in-web3-communities",
    image: "",
    tags: [ARTICLE_TAGS.MARKETING],
  },
  {
    title: "Getting Started: Your Guide to Sei Marines",
    description:
      "Description: Introduction to the Sei Marines Ambassador Program, offering community engagement, growth, and exclusive benefits within the Sei ecosystem.",
    date: "22.01.2024.",
    author: "Sei Contributors",
    xUsername: "@SeiMarines",
    href: "articles/getting-started-your-guide-to-sei-marines",
    image: "",
    tags: [ARTICLE_TAGS.COMMUNITY],
  },
];

export const guides: PostType[] = [
  {
    title: "How To Create A Wallet?",
    description:
      "In this section, we'll show you how to create a wallet. The best way to use native wallets, like the Compass wallet. Let's get started!",
    date: "18.01.2024.",
    author: "BoJack",
    xUsername: "@0xbezzub",
    href: "guides/how-to-create-a-wallet",
    image: "",
    tags: [GUIDE_TAGS.TUTORIAL, GUIDE_TAGS.COMMUNITY],
  },
  {
    title: "How to Transfer an NFT in Compass Wallet",
    description:
      "Learn how to securely transfer an NFT in Compass Wallet: Find steps from selecting your NFT to obtaining a transaction ID for verification.",
    date: "19.01.2024.",
    author: "Bobini",
    xUsername: "@0xbezzub",
    href: "guides/how-to-transfer-an-nft-in-compass-wallet",
    image: "",
    tags: [GUIDE_TAGS.TUTORIAL, GUIDE_TAGS.COMMUNITY],
  },
  {
    title: "Deposit and withdraw from CEX",
    description:
      "Guide on depositing and withdrawing $SEI to/from a centralized exchange (CEX), emphasizing the mandatory use of MEMO for deposits, but not for withdrawals, with step-by-step instructions for both processes.",
    date: "22.01.2024.",
    author: "BoJack",
    xUsername: "@0xbezzub",
    href: "guides/deposit-and-withdraw-from-cex",
    image: "",
    tags: [GUIDE_TAGS.TUTORIAL, GUIDE_TAGS.COMMUNITY],
  },
  {
    title: "Bridge to Sei",
    description:
      "Guide on transferring assets to Sei Network: Check liquidity, use $USDC for optimal results, connect to Sei and Metamask wallets, bridge assets, and complete the swap on Astroport. Offers additional alternatives.",
    date: "24.01.2024.",
    author: "BoJack",
    xUsername: "@0xbezzub",
    href: "guides/bridge-to-sei",
    image: "",
    tags: [GUIDE_TAGS.TUTORIAL, GUIDE_TAGS.COMMUNITY],
  },
  {
    title: "Swap via Simpleswap",
    description:
      "SimpleSwap tutorial for obtaining $SEI on Sei Network: Select tokens, choose $SEI, specify amount, input Sei wallet details, and execute the swap. Quick and efficient process with additional wallet funding options included.",
    date: "25.01.2024.",
    author: "BoJack",
    xUsername: "@0xbezzub",
    href: "guides/swap-via-simpleswap",
    image: "",
    tags: [GUIDE_TAGS.TUTORIAL, GUIDE_TAGS.COMMUNITY],
  },
];
