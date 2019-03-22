require("dotenv").config();
const http = require("http");
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const co = require("co");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const routes = require("./routes");
var mongoose = require("mongoose");
const PORT = parseInt(process.env.PORT, 10) || 3000;

//heroku doesn't seem to know about .env files so exposing the url for now...
// var MONGO_URL = process.env.DB_URL;
var MONGO_URL =
  "mongodb+srv://admin:Lalu420@@cluster0-5cjs1.mongodb.net/MySite?retryWrites=true";

co(function*() {
  // Initialize the Next.js app
  yield app.prepare();

  mongoose.connect(MONGO_URL, { useNewUrlParser: true });

  mongoose.Promise = global.Promise;

  mongoose.connection.on("open", function() {
    console.log("mongodb is connected!!");
  });

  const db = yield mongoose.connection;

  model = db.modelNames();

  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use("/api", routes);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT);
}).catch(error => console.error(error.stack));

// app
//   .prepare()
//   .then(() => {
//     mongoose.connect(MONGO_URL, { useNewUrlParser: true });

//     mongoose.Promise = global.Promise;

//     mongoose.connection.on("open", function() {
//       console.log("mongodb is connected!!");
//     });

//     const db = mongoose.connection;

//     model = db.modelNames();

//     db.on("error", console.error.bind(console, "MongoDB connection error:"));

//     const server = express();
//     server.use(bodyParser.json());
//     server.use(bodyParser.urlencoded({ extended: true }));
//     server.use("/api", routes);

//     // server.use((req, res, next) => {
//     //   // Also expose the MongoDB database handle so Next.js can access it.
//     //   req.db = db;
//     //   next();
//     // });

//     server.get("*", (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(PORT, () => {
//       console.log("Server is up and running on port number " + PORT);
//     });
//   })
//   .catch(ex => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
