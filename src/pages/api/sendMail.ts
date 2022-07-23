import * as dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

dotenv.config();

const sendMail = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.authorization) {
    fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.headers.authorization}`,
      { method: 'POST' }
    )
      .then((response) => response.json())
      .then((isValid) => {
        if (isValid.success) {
          const body = JSON.parse(req.body);
          const { name, subject, content } = body;
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
            },
          });

          const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: process.env.MAIL_USERNAME,
            subject: `[${Date().slice(0, 24)}] ${subject}`,
            text: `${name}: ${content}`,
          };

          transporter
            .sendMail(mailOptions)
            .then((result) => {
              if (result.accepted) res.status(200).end();
              else res.status(400).end();
            })
            .catch((err) => {
              console.log(err);
              res.status(500).end();
            });
        } else {
          res.status(401).end();
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  }
};
export default sendMail;
