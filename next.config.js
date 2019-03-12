const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = {
  crossOrigin: "anonymous"
};

module.exports = withPlugins([withImages, withCSS]);

module.exports = withImages();

module.exports = withCSS();

module.exports = withCSS({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
