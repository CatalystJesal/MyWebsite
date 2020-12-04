// const server = require("./server");
const nodemailer = require("nodemailer");
const aws = require("aws-sdk");

// //This file is the entry point for production mode
// // require("dotenv").config();

var config = new aws.Config({
  accessKeyId: process.env.SES_ACCESS,
  secretAccessKey: process.env.SES_SECRET,
  region: "eu-west-1",
});

aws.config = config;

let transporter = nodemailer.createTransport({
  SES: new aws.SES({
    apiVersion: "latest",
  }),
});

export default async (req, res) => {
  const { name, email, message } = req.body;

  if (name === "" || email === "" || message === "") {
    res.status(403).send("");
    return;
  }

  const emailing = await transporter.sendMail(
    {
      from: "no-reply@jesal-patel.com",
      to: process.env.EMAIL_ADDRESS,
      cc: email,
      subject: "A message from Jesal-Patel.com!",
      text: message,
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
};

// try {
//   server.post("/api/contact", async (req, res) => {
//     const { name, email, message } = req.body;

//     console.log(`${name} <${email}> ${message}`);

//     let transporter = nodemailer.createTransport({
//       SES: new aws.SES({
//         apiVersion: "latest"
//       })
//     });

//     const info = await transporter.sendMail(
//       {
//         from: "no-reply@jesal-patel.com",
//         to: process.env.EMAIL_ADDRESS,
//         cc: email,
//         subject: "A message from Jesal-Patel.com!",
//         text: message
//       },
//       (err, info) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(info.envelope);
//           console.log(info.messageId);
//           res.end("Message has been sent");
//         }
//       }
//     );
//   });
// } catch (ex) {
//   console.log("Email Not Sent", ex);
// }

// module.exports = server;
