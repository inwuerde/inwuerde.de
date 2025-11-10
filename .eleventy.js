module.exports = function(eleventyConfig) {
  // Passthroughs — passe Ordnernamen an dein Projekt an
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  // Beispielfilter/Shortcodes können hier hinzugefügt werden

  return {
    dir: {
      input: ".",         // Quellen im Repo-Root; setze "src" wenn du einen src-Ordner nutzt
      includes: "_includes",
      data: "_data",
      output: "_site"     // WICHTIG: entspricht publish_dir in pages.yml
    },
    passthroughFileCopy: true
  };
};