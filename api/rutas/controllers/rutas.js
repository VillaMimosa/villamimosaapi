"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const sendMail = async (subject, html, to) => {
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "rafelmartorell@gmail.com",
      pass: "Aa2051346307",
    },
  });

  var mailOptions = {
    from: "rafelmartorell@gmail.com",
    to: to,
    subject: subject,
  };

  mailOptions.html = html;

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Correo: " + to + "\n" + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  // GET /hello
  async correo(ctx) {
    ctx.send(ctx.request.body);
    sendMail("Prueba", ctx.request.body.html, "rafelmartorell@gmail.com");
  },
};
