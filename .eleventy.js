const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const dayjs = require("dayjs");

module.exports = function (eleventyConfig) {
  let options = {
    html: true,
    breaks: false,
    linkify: true,
  };
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: ["_includes", "."],
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addWatchTarget("./assets/css/");
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md");
  });
  eleventyConfig.addLiquidFilter("dateformat", (date, format = "DD.MM.YYYY HH:mm") => {
    return dayjs(date).format(format);
  });
  return {
    dir: {
      input: "./",
      data: "./_data",
      output: "./_site",
    },
    passthroughFileCopy: true,
  };
};
