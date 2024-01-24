import { Footer } from "@/components/Footer";
import { SearchAlgolia } from "@/components/SearchAlgolia";
import Navbar from "@/components/navbar/Navbar";
import { cn, getImageType } from "@/lib/utils";
import { useRouter } from "next/router";
import { DocsThemeConfig, ThemeSwitch, useConfig } from "nextra-theme-docs";

const SITE_ROOT = "https://seiyanization.com/";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/NIMA-Enterprises/seiyanization",
  },
  logo: null,
  footer: {
    component: Footer,
  },
  search: {
    component: SearchAlgolia,
  },
  navbar: {
    component: (props: any) => <Navbar {...props} />,
    extraContent: <ThemeSwitch />,
  },
  sidebar: {
    toggleButton: false,
  },
  head: function Head() {
    const router = useRouter();
    const { frontMatter } = useConfig();
    const asPath = router.asPath;
    const fullUrl = asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${asPath}`;
    let ogDescription = frontMatter.description;

    let ogTitle = `${frontMatter.title}`;
    let ogUrl: string;

    if (
      // If landing or there's no title & description show default og image
      asPath === "/" ||
      !frontMatter.title
    ) {
      ogTitle = "Seiyanization | From novice to SuperSeiyan";
      ogUrl = `${SITE_ROOT}/og/og-default.png`;
      ogDescription =
        "The first platform, exclusively built for SEI Ecosystem, to present collaborative effort of all ecosystem participants in order to enforce knowledge sharing.";
    } else if (frontMatter?.ogImage) {
      ogUrl = `${SITE_ROOT}${frontMatter.ogImage}`;
    } else {
      const title = frontMatter.title
        ? `&title=${encodeURIComponent(frontMatter.title)}`
        : "";

      const description = frontMatter.description
        ? `&description=${encodeURIComponent(frontMatter.description)}`
        : "";

      const author = frontMatter.author
        ? `&author=${encodeURIComponent(frontMatter.author)}`
        : "";

      const xUsername = frontMatter.xUsername
        ? `&x_username=@${encodeURIComponent(frontMatter.xUsername)}`
        : "";

      const type = `&type=${getImageType(asPath)}`;

      ogUrl = `${SITE_ROOT}/api/og?${title}${description}${xUsername}${author}${type}`;
    }

    return (
      <>
        <title>{ogTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Seiyanization" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta property="twitter:image" content={ogUrl} />
        <meta
          name="twitter:creator"
          content={frontMatter.xUsername ? frontMatter.xUsername : ""}
        />
        <meta property="og:image:secure_url" content={ogUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta
          property="og:type"
          content={frontMatter.author ? "article" : "webite"}
        />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta name="apple-mobile-web-app-title" content="Seiyanization" />
      </>
    );
  },
  editLink: {
    component: (props) => {
      const baseUrl =
        "https://github.com/NIMA-Enterprises/seiyanization/blob/main";

      const fullUrl = `${baseUrl}/${props.filePath}`;

      return (
        <p
          onClick={() => {
            window.open(fullUrl, "_blank");
          }}
          className={cn("cursor-pointer", props.className)}
        >
          Edit this page →
        </p>
      );
    },
  },
  feedback: {
    content: (
      <p
        onClick={() => {
          window.open(
            "https://github.com/NIMA-Enterprises/seiyanization",
            "_blank"
          );
        }}
        className={cn("cursor-pointer")}
      >
        Become a contributor →
      </p>
    ),
  },
  color: {
    hue: {
      dark: 93,
      light: 115,
    },
    saturation: {
      dark: 80,
      light: 78,
    },
  },
};

export default config;
