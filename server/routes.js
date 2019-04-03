const server = require("./server");
const Project = require("./project_schema");
var connectToDatabase = require("./db");
// const nodemailer = require("nodemailer");
const aws = require("aws-sdk");

//This file is the entry point for production mode
require("dotenv").config();

aws.config.update({
  accessKeyId: process.env.SES_ACCESS,
  secretAccessKey: process.env.SES_SECRET,
  region: "eu-west-1"
});

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
  server.post("/api/send-email", (req, res) => {
    const { name, email, message } = req.body;

    console.log(`${name} <${email}> ${message}`);

    const ses = new aws.SES({
      apiVersion: "latest"
    });

    ses.sendEmail(
      {
        Source: "mail@jesal-patel.com",
        Destination: {
          ToAddresses: [process.env.EMAIL_ADDRESS]
        },
        Message: {
          Subject: {
            Data: `${name} <${email}>`
          },
          Body: {
            Html: {
              Data: message
            }
          }
        }
      },
      function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Email sent:");
          res.send(data);
        }
      }
    );

    res.end("Message has been sent");
  });
} catch (ex) {
  console.log("Email Not Sent", ex);
}

module.exports = server;

// const auth = {
//   api_user: "jesal24",
//   api_key: process.env.SENDGRID_API
// };

// const transporter = nodemailer.createTransport(sgTransport(auth));

// const auth = {
//   type: "oauth2",
//   user: process.env.EMAIL_ADDRESS,
//   clientId: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//   accessToken:
//     "ya29.GlvfBrSf9-gWJpG16zw09dAvkEyA8qmDl1UEN2L6V-S3_N5Atgqf0gNWp3TNmb7woJ1jFnJaAhDFD849UcPRLc9TS29GQ1ZLmERn-ivieX_zVinTMhFZyIE3LkdC"
// };

// const mailOptions = {
//   from: process.env.EMAIL_ADDRESS,
//   to: process.env.EMAIL_ADDRESS,
//   subject: `${name} <${email}>`,
//   text: message
// };

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: auth,
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// transporter.sendMail(mailOptions, (error, response) => {
//   error ? console.log(error) : console.log(JSON.stringify(res));
// });

// sgMail.setApiKey(process.env.SENDGRID_API);

// const msg = {
//   to: process.env.EMAIL_ADDRESS,
//   from: process.env.EMAIL_ADDRESS,
//   subject: `${name} <${email}>`,
//   text: message
// };

// sgMail.send(msg);
