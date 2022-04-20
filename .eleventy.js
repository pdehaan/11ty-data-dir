module.exports = function (eleventyConfig = {}) {
  eleventyConfig.addGlobalData("liquidVersion", require("liquidjs/package.json").version);
  eleventyConfig.addGlobalData("nunjucksVersion", require("nunjucks/package.json").version);

  eleventyConfig.addFilter("inspect", require("node:util").inspect);
  eleventyConfig.addFilter("shuffle", require("lodash.shuffle"));
  eleventyConfig.addFilter("values", Object.values);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
