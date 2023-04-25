"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const sendMail = async (subject, html, atachment, to) => {
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "rafelmartorell@gmail.com",
      pass: "Aa2051346307",
    },
  });"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const sendMail = async (subject, html, atachment, to) => {
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
  mailOptions.attachments = atachment;

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
    var moment = require("moment");
    moment.locale("es");

    ctx.send(ctx.request.body);
    const { data } = ctx.request.body;

    const CHECKIN = "<strong>CHECKIN</strong>";
    const RentalDate =
      "<br></br>Fecha de alquiler: " + moment(data.rentalDate).format("LLLL");
    const ArribalVillaDate =
      "<br></br>Fecha de llegada a la villa: " +
      moment(data.arribalVillaDate).format("LLLL");
    const NumGuests = "<br></br>NÃºmero de hÃºespedes: " + data.numGuests;
    const ArribalDate =
      "<br></br>Fecha de llegada: " + moment(data.arribalDate).format("LLLL");
    const NumFlight = "<br></br>NÃºmero de vuelo: " + data.numFlight;
    const Name = "<br></br>Nombre: " + data.name;
    const Surname = "<br></br>Apellidos: " + data.surname;
    const Telefon =
      "<br></br>TelÃ©fono: +" + data.telefon.code + " " + data.telefon.phone;
    const DateOfBirth =
      "<br></br>Fecha de nacimiento: " +
      moment(data.dateOfBirth).format("LLLL");
    const Email = "<br></br>Correo: " + data.email;
    const Passport = "<br></br>Pasaporte: " + data.passport;
    const Direction = "<br></br>DirecciÃ³n: " + data.direction;
    const PostalCode = "<br></br>CÃ³digo postal: " + data.postalCode;
    const Country = "<br></br>PaÃ­s: " + data.country;
    const qr =
      "<embed src= 'cid:unique@nodemailer.com' width= '500' height= '375'>";
    const USERS = "<br></br><strong>NIÃOS</strong>";
    let users = "";
    data.users.forEach((user) => {
      users +=
        "<br></br>Nombre: " +
        user.name +
        ", nacimiento: " +
        moment(user.dateOfBirth).format("LLLL") +
        ", sabe nadar: ";
      if (user.swim) {
        users += " Si";
      } else {
        users += " No";
      }
    });
    const PETS = "<br></br><strong>MASCOTAS</strong>";
    let pets = "";
    data.pets.forEach((pet) => {
      pets +=
        "<br></br>Nombre: " +
        pet.name +
        ", nacimiento: " +
        moment(pet.dateOfBirth).format("LLLL") +
        ", tipo: ";
      switch (pet.type) {
        case "Dog":
          pets += " perro.";
          break;
        case "Cat":
          pets += " gato.";
          break;
        case "Other":
          pets += " otro.";
          break;
        default:
          break;
      }
    });
    const CHECKOUT = "<br></br><strong>CHECKOUT</strong>";
    const DepartureVillaDate =
      "<br></br>Fecha de salida de la villa: " +
      moment(data.departureVillaDate).format("LLLL");
    const DepartureDate =
      "<br></br>Fecha de salida: " + moment(data.departureDate).format("LLLL");
    const NumDepartureFlight =
      "<br></br>NÃºmero de vuelo: " + data.numDepartureFlight;

    let html =
      "<div>" +
      CHECKIN +
      RentalDate +
      ArribalVillaDate +
      NumGuests +
      ArribalDate +
      NumFlight +
      Name +
      Surname +
      Telefon +
      DateOfBirth +
      Email +
      Passport +
      Direction +
      PostalCode +
      Country +
      USERS +
      users +
      PETS +
      pets +
      CHECKOUT +
      DepartureVillaDate +
      DepartureDate +
      NumDepartureFlight +
      qr +
      "</div>";

    const atachment = [
      {
        filename: "QR." + data.type,
        path: data.image,
        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
    ];

    sendMail(
      "Nuevo formulario rellenado",
      html,
      atachment,
      "rafelmartorell@gmail.com"
    );
  },
};


  var mailOptions = {
    from: "rafelmartorell@gmail.com",
    to: to,
    subject: subject,
  };

  mailOptions.html = html;
  mailOptions.attachments = atachment;

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
    var moment = require("moment");
    moment.locale("es");

    ctx.send(ctx.request.body);
    const { data } = ctx.request.body;

    const CHECKIN = "<strong>CHECKIN</strong>";
    const RentalDate =
      "<br></br>Fecha de alquiler: " + moment(data.rentalDate).format("LLLL");
    const ArribalVillaDate =
      "<br></br>Fecha de llegada a la villa: " +
      moment(data.arribalVillaDate).format("LLLL");
    const NumGuests = "<br></br>Número de húespedes: " + data.numGuests;
    const ArribalDate =
      "<br></br>Fecha de llegada: " + moment(data.arribalDate).format("LLLL");
    const NumFlight = "<br></br>Número de vuelo: " + data.numFlight;
    const Name = "<br></br>Nombre: " + data.name;
    const Surname = "<br></br>Apellidos: " + data.surname;
    const Telefon =
      "<br></br>Teléfono: +" + data.telefon.code + " " + data.telefon.phone;
    const DateOfBirth =
      "<br></br>Fecha de nacimiento: " +
      moment(data.dateOfBirth).format("LLLL");
    const Email = "<br></br>Correo: " + data.email;
    const Passport = "<br></br>Pasaporte: " + data.passport;
    const Direction = "<br></br>Dirección: " + data.direction;
    const PostalCode = "<br></br>Código postal: " + data.postalCode;
    const Country = "<br></br>Paí­s: " + data.country;
    const qr =
      "<embed src= 'cid:unique@nodemailer.com' width= '500' height= '375'>";
    const USERS = "<br></br><strong>NIÑOS</strong>";
    let users = "";
    data.users.forEach((user) => {
      users +=
        "<br></br>Nombre: " +
        user.name +
        ", nacimiento: " +
        moment(user.dateOfBirth).format("LLLL") +
        ", sabe nadar: ";
      if (user.swim) {
        users += " Sí";
      } else {
        users += " No";
      }
    });
    const PETS = "<br></br><strong>MASCOTAS</strong>";
    let pets = "";
    data.pets.forEach((pet) => {
      pets +=
        "<br></br>Nombre: " +
        pet.name +
        ", nacimiento: " +
        moment(pet.dateOfBirth).format("LLLL") +
        ", tipo: ";
      switch (pet.type) {
        case "Dog":
          pets += " perro.";
          break;
        case "Cat":
          pets += " gato.";
          break;
        case "Other":
          pets += " otro.";
          break;
        default:
          break;
      }
    });
    const CHECKOUT = "<br></br><strong>CHECKOUT</strong>";
    const DepartureVillaDate =
      "<br></br>Fecha de salida de la villa: " +
      moment(data.departureVillaDate).format("LLLL");
    const DepartureDate =
      "<br></br>Fecha de salida: " + moment(data.departureDate).format("LLLL");
    const NumDepartureFlight =
      "<br></br>Número de vuelo: " + data.numDepartureFlight;

    let html =
      "<div>" +
      CHECKIN +
      RentalDate +
      ArribalVillaDate +
      NumGuests +
      ArribalDate +
      NumFlight +
      Name +
      Surname +
      Telefon +
      DateOfBirth +
      Email +
      Passport +
      Direction +
      PostalCode +
      Country +
      USERS +
      users +
      PETS +
      pets +
      CHECKOUT +
      DepartureVillaDate +
      DepartureDate +
      NumDepartureFlight +
      qr +
      "</div>";

    const atachment = [
      {
        filename: "QR." + data.type,
        path: data.image,
        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
    ];

    sendMail(
      "Nuevo formulario rellenado",
      html,
      atachment,
      "rafelmartorell@gmail.com"
    );
  },
};

