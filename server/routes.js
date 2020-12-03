const server = require("./server");
const Project = require("./project_schema");
// var connectToDatabase = require("./dbConnect");
const nodemailer = require("nodemailer");
const aws = require("aws-sdk");

//This file is the entry point for production mode
require("dotenv").config();

var config = new aws.Config({
  accessKeyId: process.env.SES_ACCESS,
  secretAccessKey: process.env.SES_SECRET,
  region: "eu-west-1"
});
aws.config = config;

// try {
//   server.get("/api/projects", (req, res) => {
//     connectToDatabase();

//     Project.find((err, projects) => {
//       res.send(projects);
//     });
//   });
// } catch (ex) {
//   console.log("API Error", ex);
// }

try {
  server.post("/api/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    console.log(`${name} <${email}> ${message}`);

    let transporter = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: "latest"
      })
    });

    const info = await transporter.sendMail(
      {
        from: "no-reply@jesal-patel.com",
        to: process.env.EMAIL_ADDRESS,
        cc: email,
        subject: "A message from Jesal-Patel.com!",
        text: message
      },
      (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info.envelope);
          console.log(info.messageId);
          res.end("Message has been sent");
        }
      }
    );
  });
} catch (ex) {
  console.log("Email Not Sent", ex);
}

module.exports = server;
