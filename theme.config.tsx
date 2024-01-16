import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const SITE_ROOT = "https://seiyanization.com";
const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/shuding/nextra",
  },
  logo: <p>SEI Docs by NIMA</p>,
  logoLink: false,
  footer: {
    component: Footer,
  },
  sidebar: {
    toggleButton: false,
  },
  head: function Head() {
    const router = useRouter();
    const { frontMatter } = useConfig();
    const asPath = router.asPath;
    const fullUrl = asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${asPath}`;
    const ogDescription =
      frontMatter.description || process.env.WEBSITE_DESCRIPTION;
    let ogTitle = `${frontMatter.title} | Seiyanization`;
    let ogUrl: string;

    if (
      // If landing or there's no title & description show default og image
      asPath === "/" ||
      (!frontMatter.title && frontMatter.description)
    ) {
      ogTitle = "Seiyanization";
      ogUrl = `${SITE_ROOT}/og/og-default.png`;
    } else if (frontMatter?.ogImage) {
      ogUrl = `${SITE_ROOT}${frontMatter.ogImage}`;
    } else {
      const title = frontMatter.title
        ? `&title=${encodeURIComponent(frontMatter.title)}`
        : "";
      const description = frontMatter.description
        ? `&description=${encodeURIComponent(frontMatter.description)}`
        : "";

      ogUrl = `${SITE_ROOT}/api/og?${title}${description}`;
    }

    return (
      <>
        <title>{ogTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={process.env.WEBSITE_NAME} />
        <meta property="twitter:image" content={ogUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta name="apple-mobile-web-app-title" content="Seiyanization" />
      </>
    );
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
