var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let isConnected;

var MONGO_URL = process.env.DB_URL;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }

  mongoose.connect(MONGO_URL, { useNewUrlParser: true }).then(db => {
    isConnected = db.connections[0].readyState;

    mongoose.connection.on("open", function() {
      console.log("mongodb is connected!!");
    });

    const mongoose_conn = mongoose.connection;

    mongoose_conn.on(
      "error",
      console.error.bind(console, "MongoDB connection error:")
    );
  });
};
