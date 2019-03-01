const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withImages, withCSS]);

module.exports = withImages();

module.exports = withCSS();
