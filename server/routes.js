const server = require("./server");
const Project = require("./project_schema");
var connectToDatabase = require("./db");

try {
  server.get("/api/projects", (req, res) => {
    //Seems like we must always check/ensure we are connected to
    //the db as we're making the request as it times out if nothing happens
    //in that time...
    connectToDatabase();

    Project.find((err, projects) => {
      res.send(projects);
    });
  });

  module.exports = server;
} catch (ex) {
  console.log("API Error", ex);
}
