const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wpaozan@gmail.com',
    pass: 'gjoaqggmzkrqswzx',
  },
});

function sendEmail(recipient, subject, message) {
  const mailOptions = {
    from: 'wpao',
    to: recipient,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
