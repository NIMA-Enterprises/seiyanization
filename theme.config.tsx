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
      dark: 184,
      light: 168,
    },
    saturation: {
      dark: 69,
      light: 59,
    },
  },
};

export default config;
