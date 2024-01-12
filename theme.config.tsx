import { Footer } from "@/components/Footer";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/shuding/nextra",
  },
  logo: <p>SEI Docs by NIMA</p>,
  logoLink: false,
  footer: {
    component: Footer,
  },
  color: {
    hue: {
      dark: 39,
      light: 39,
    },
    saturation: {
      dark: 80,
      light: 100,
    },
  },
};

export default config;
