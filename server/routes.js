const server = require("./server");
const Project = require("./project_schema");
var connectToDatabase = require("./db");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";

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

server.post("/send-email", function(req, res) {
  const { name, email, message } = req.body;

  console.log(`${name} <${email}>`);

  sgMail.setApiKey(process.env.SENDGRID_API);

  const msg = {
    to: process.env.EMAIL_ADDRESS,
    from: `${name} <${email}>`,
    subject: "Email via JesalPatel website",
    text: message
  };

  sgMail.send(msg);

  if (dev) {
    res.redirect("localhost:3000/contact");
  } else {
    res.redirect("/contact");
  }
});

module.exports = server;
