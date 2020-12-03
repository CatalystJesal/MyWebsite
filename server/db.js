var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let isConnected;

var MONGO_URL = process.env.DB_URL;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }

  var  connection = mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
    isConnected = db.connections[0].readyState;
    const mongoose_conn = mongoose.connection;
    

    mongoose.connection.on("open", function() {
      console.log("mongodb is connected!!");
    });

    mongoose.connection.on("disconnected", function() {
      console.log("mongodb is closed!!");
    });
    

    mongoose_conn.on(
      "error",
      console.error.bind(console, "MongoDB connection error:")
    );
  }).catch(error => { console.log(error)});
};
