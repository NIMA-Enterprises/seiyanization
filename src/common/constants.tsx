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
import {
  Boxes,
  Cog,
  FileQuestion,
  ScrollText,
  Settings,
  Vault,
  Wrench,
} from "lucide-react";

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
    title: "Job Board",
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
  },
  {
    id: 2,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "DeFi by Design EP120: Sei Network Explained",
    image: "https://img.youtube.com/vi/6MlC_JDBU74/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=6MlC_JDBU74",
    description: "",
  },
  {
    id: 3,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "What is Sei Network? - simply explained by Sei Co-Founder Jay Jog",
    image: "https://img.youtube.com/vi/k3MhT8Ashig/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=k3MhT8Ashig",
    description: "",
  },
  {
    id: 4,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "Steady Lads #20: w/ Jeff Feng • Sei Labs — Co-Founder\n",
    image: "https://img.youtube.com/vi/XQcZf4zpFcc/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=",
    description: "",
  },
  {
    id: 5,
    tags: [VIDEO_TAGS.FOUNDERS],
    title: "Sei Network: Interview with Sei Labs Co-Founder Jay Jog",
    image: "https://img.youtube.com/vi/J0AfMFLvc80/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=J0AfMFLvc80",
    description: "",
  },
  {
    id: 6,
    tags: [VIDEO_TAGS.OVERVIEW],
    title: "Sei - The Fastest Blockchain Ever\n",
    image: "https://img.youtube.com/vi/TgUwqETffZs/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=TgUwqETffZs",
    description: "",
  },
  {
    id: 7,
    tags: [VIDEO_TAGS.OVERVIEW],
    title: "Sei Network: The FASTEST Layer 1 for Crypto Trading??",
    image: "https://img.youtube.com/vi/1UgL7IXgjQM/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=1UgL7IXgjQM",
    description: "",
  },
  {
    id: 8,
    tags: [VIDEO_TAGS.FOUNDERS],
    title:
      "Thesis Ep 23 - How Sei Network solves for blockchain’s trading trilemma",
    image: "https://img.youtube.com/vi/VdEWHZIQrQE/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=VdEWHZIQrQE",
    description: "",
  },
  {
    id: 9,
    tags: [VIDEO_TAGS.ECOSYSTEM, VIDEO_TAGS.PODCAST],
    title: "DragonSwap w/ Vasco and Cooltimes",
    image: "https://img.youtube.com/vi/drcPer2JxAQ/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=drcPer2JxAQ",
    description: "",
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
}

export enum ARTICLE_TAGS {
  ENGINEERING = "Engineering",
  MARKETING = "Marketing",
  COMMUNITY = "Community",
  RESEARCH = "Research",
}

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
];
