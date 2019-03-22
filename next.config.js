require("dotenv").config();
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

const dev = process.env.NODE_ENV !== "production";

if (!dev) {
  dotenvLoad();

  const withNextEnv = nextEnv();

  module.exports = withNextEnv(
    withCSS(
      withImages({
        webpack: function(config) {
          config.plugins.push(
            new webpack.IgnorePlugin(/^encoding$/, /node-fetch/),
            new webpack.DefinePlugin({
              "process.env.DB_URL": JSON.stringify(process.env.DB_URL)
              // "process.env.NODE_ENV": JSON.stringify("production")
            })
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
        target: "server",
        crossOrigin: "anonymous",
        useFileSystemPublicRoutes: false
      })
    )
  );
} else {
  module.exports = withCSS(
    withImages({
      webpack: function(config) {
        config.plugins.push(
          new webpack.DefinePlugin({
            "process.env.DB_URL": JSON.stringify(process.env.DB_URL)
            // "process.env.NODE_ENV": JSON.stringify("development")
          })
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
      target: "server"
    })
  );
}
