const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const routes = require("./routes/index.js");
var mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const dbName = "MySite";

//build-time only
// const MONGO_URL = process.env.mongoDB;

//run-time only but only if not serverless
const MONGO_URL =
  "mongodb+srv://admin:<password>@cluster0-5cjs1.mongodb.net/MySite?retryWrites=true";

app
  .prepare()
  .then(() => {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true });

    mongoose.Promise = global.Promise;

    mongoose.connection.on("open", function() {
      console.log("mongodb is connected!!");
    });

    const db = mongoose.connection;

    model = db.modelNames();

    db.on("error", console.error.bind(console, "MongoDB connection error:"));

    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use("/api", routes);

    server.use((req, res, next) => {
      // Also expose the MongoDB database handle so Next.js can access it.
      req.db = db;
      next();
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, () => {
      console.log("Server is up and running on port number " + PORT);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
