
const nodemailer = require("nodemailer");
const aws = require("aws-sdk");

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

  const mailerRes = await mailer({ name, email, message });
  res.send(mailerRes);
};

const mailer = ({ name, email, message }) => {
  if (name === undefined && email === undefined && message === undefined) {
    res.status(403).send("");
    return;
  }
  const template = {
    from: "no-reply@jesal-patel.com",
    to: process.env.EMAIL_ADDRESS,
    subject: `A message from ` + `( ` + email + ` )` + ` via Jesal-Patel.com!`,
    text: message,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(template, (error, info) => {
      error ? reject(error) : resolve(info);
    });
  });
};
