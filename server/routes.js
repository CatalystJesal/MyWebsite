const server = require("./server");
const Project = require("./project_schema");
var connectToDatabase = require("./db");
const sgMail = require("@sendgrid/mail");

//This file is the entry point for production mode
require("dotenv").config();

try {
  server.get("/api/projects", (req, res) => {
    connectToDatabase();

    Project.find((err, projects) => {
      res.send(projects);
    });
  });
} catch (ex) {
  console.log("API Error", ex);
}

try {
  server.post("/api/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    console.log(`${name} <${email}> ${message}`);

    sgMail.setApiKey(process.env.SENDGRID_API);

    const msg = {
      to: process.env.EMAIL_ADDRESS,
      from: "mail@jesal-patel.com",
      subject: `${name} <${email}>`,
      text: message
    };

    //It was all in the await call and making the function async! All this time!
    await sgMail.send(msg);

    res.end("Message has been sent");
  });
} catch (ex) {
  console.log("Email Not Sent", ex);
}

module.exports = server;
