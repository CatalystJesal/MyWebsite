const server = require("./server");
const Project = require("./project_schema");
var connectToDatabase = require("./db");

try {
  server.get("/api/projects", (req, res) => {
    connectToDatabase();

    Project.find((err, projects) => {
      res.send(projects);
    });
  });

  module.exports = server;
} catch (ex) {
  console.log("API Error", ex);
}
