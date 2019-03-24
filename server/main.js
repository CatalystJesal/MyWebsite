require("dotenv").config();

const express = require("express");

const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 8000;

const api = require("./routes");

const dev = process.env.NODE_ENV !== "production";

server.use(cors());

server.use(api);

//IMPORTANT: Don't allow the server to listen on production, else it will fail in deployment

if (dev) {
  server.listen(PORT, () =>
    console.log(`Express is listening on port: ${PORT}`)
  );
}

//important to export!
module.exports = server;
