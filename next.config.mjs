import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  search: true,
  defaultShowCopyCode: true,
  staticImage: true,
});

export default withNextra({
  env: {},
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
