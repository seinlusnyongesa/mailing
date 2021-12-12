const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "SEINDER_EMAIL",
    pass: "SENDER_PASS"
  }
});

let mailDetails = {
  from: "SEINDER_EMAIL",
  to: "RECEIVER_EMAIL",
  subject: "Test mail",
  text: "this is a test mail"
};

transporter.sendMail(mailDetails, function(err, data) {
  if (err) {
    console.log(err);
    console.log("Error Occurs");
  } else {
    console.log("Email sent successfully");
  }
});
