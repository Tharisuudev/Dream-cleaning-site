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
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "88d94c7793ccbf",
    pass: "fdb01588928add",
  },
});
