const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const fetch = require("isomorphic-unfetch");

const dev = process.env.NODE_ENV !== "production";

if (!dev) {
  module.exports = withCSS(
    withImages({
      target: "serverless",
      crossOrigin: "anonymous",
      async exportPathMap() {
        const response = await fetch("http://localhost:3000/api/projects");
        const projectList = await response.json();

        const projects = projectList.reduce(
          (projects, project) =>
            Object.assign({}, projects, {
              [`/project/${project.id}`]: {
                page: "/project",
                query: { id: project.id }
              }
            }),
          {}
        );
        return Object.assign({}, projects, {
          "/": { page: "/" }
        });
      },
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
  module.exports = withCSS(
    withImages({
      target: "serverless",
      crossOrigin: "anonymous",
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
}
