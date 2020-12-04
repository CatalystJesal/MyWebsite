const server = require("./server");
const Project = require("./project_schema");
var connectToDatabase = require("./db");
const aws = require("aws-sdk");

//This file is the entry point for production mode
require("dotenv").config();


try {
  server.get("/api/projects", (req, res) => {
    console.log("The api has been called");
    connectToDatabase();

    Project.find((err, projects) => {
      res.send(projects);
    });
  });
} catch (ex) {
  console.log("API Error", ex);
}



module.exports = server;
