
// module.exports = ()

var config = new aws.Config({
    accessKeyId: process.env.SES_ACCESS,
    secretAccessKey: process.env.SES_SECRET,
    region: "eu-west-1"
  });
  aws.config = config;
  

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