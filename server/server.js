// require('dotenv').config({ path: __dirname + '/../.env' });

// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '../dist')));

// // All other requests are handled by serving the React app
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

// const { EMAIL_USER, EMAIL_PASS } = process.env;

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Ready to Send');
//   }
// });

// app.post('/contact', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;

//   const mail = {
//     from: name,
//     to: EMAIL_USER,
//     subject: 'Contact Form Submission',
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: 'ERROR' });
//     } else {
//       res.json({ status: 'Message Sent' });
//     }
//   });
// });
