import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.setLiquidOptions();

  eleventyConfig.setInputDirectory("_site");
  eleventyConfig.setOutputDirectory("_dist");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("_site/**/*.css");
  eleventyConfig.addWatchTarget("css/**/*.css");
  eleventyConfig.addWatchTarget("_site/**/*.js");
}
export const config = {
  pathPrefix: "/html-tricks/",
};
