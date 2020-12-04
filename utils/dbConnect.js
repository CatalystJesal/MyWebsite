import mongoose from 'mongoose'
require("dotenv").config();

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).catch(function(error)  {
    console.log("Connection failed: " + error);
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect