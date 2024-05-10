const nodeEmai = require("nodemailer");

const transport = nodeEmai.createTransport({
  service: "gmail",
  auth: {
    user: "santhosgpsvg@gmail.com",
    pass: "Sandy_NS@200",
  },
});

const mailOptions = {
  from: "santhoshpsvg@gmail.com",
  to: "albisel786@gmail.com",
  subject: "sending email from node.js",
  text: "haiii",
};

transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
