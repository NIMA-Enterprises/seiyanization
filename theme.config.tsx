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
  sidebar: {
    toggleButton: false,
  },
  color: {
    hue: {
      dark: 5,
      light: 10,
    },
    saturation: {
      dark: 52,
      light: 79,
    },
  },
};

export default config;
