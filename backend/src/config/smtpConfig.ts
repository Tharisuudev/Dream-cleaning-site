import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//    host: process.env.HOST,
//    port: 2525,
//    secure: false,
//    auth: {
//      user: process.env.USER,
//      pass: process.env.PASS,
//    },
//  });

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "poolresponses2@gmail.com",
    pass: "ygkoqrskzhxusboq",
  },
});
