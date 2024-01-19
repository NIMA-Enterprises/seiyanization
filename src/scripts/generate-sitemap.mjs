import { writeFileSync } from "fs";
import { globby } from "globby";
// import prettier from 'prettier';

const WEBSITE_URL = "https://seiyanization.com";

const generate = async () => {
  // const prettierConfig = await prettier.resolveConfig('./prettier.config.js');

  const pages = await globby([
    "src/pages/*.mdx",
    "src/pages/*/**.mdx",
    "src/pages/*/**/**.mdx",
    "!src/pages/_*.mdx",
    "!src/pages/_*.tsx",
    "!src/pages/_*.json",
    "!src/pages/api",
    "!src/pages/404.mdx",
  ]);
  const lastmod = new Date().toISOString();
  const allUrls = pages
    .map((page) => {
      const path = page
        .replace("src/pages", "")
        .replace("/index.mdx", "")
        .replace(".tsx", "")
        .replace(".json", "")
        .replace(".mdx", "");
      const isHomepage = page === "src/pages/index.mdx";
      const route = isHomepage ? "" : path;
      const priority = isHomepage ? "1.00" : "0.80";
      return `\n  <url><loc>${WEBSITE_URL}${route}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${allUrls}
</urlset>\n`;

  // const formatted = await prettier.format(sitemap, {
  //   ...prettierConfig,
  //   parser: 'html',
  // });

  writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap is generated!");
};

generate();
