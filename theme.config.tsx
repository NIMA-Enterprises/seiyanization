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
};

export default config;
