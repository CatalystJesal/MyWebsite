require("dotenv").config();
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

const dev = process.env.NODE_ENV !== "production";

if (dev) {
  module.exports = withCSS(
    withImages({
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
    })
  );
} else {
  dotenvLoad();

  const withNextEnv = nextEnv();

  module.exports = withNextEnv(
    withCSS(
      withImages({
        webpack: function(config) {
          config.plugins.push(
            new webpack.IgnorePlugin(/^encoding$/, /node-fetch/)
          ),
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
        },
        target: "serverless",
        crossOrigin: "anonymous",
        useFileSystemPublicRoutes: false
      })
    )
  );

  !process.env.NOW_REGION
    ? require("next/constants")
    : require("next-server/constants");
}
