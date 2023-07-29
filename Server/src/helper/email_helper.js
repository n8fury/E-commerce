const nodemailer = require('nodemailer');
const { smtpUserName, smtpPassword } = require('../secret');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		// TODO: replace `user` and `pass` values from <https://forwardemail.net>
		user: smtpUserName,
		pass: smtpPassword,
	},
});

const emailWithNodemailer = async (emailData) => {
	try {
		const mailOptions = {
			from: smtpUserName, // sender address
			to: emailData.email, // list of receivers
			subject: emailData.subject, // Subject line
			html: emailData.html, // html body
		};
		const info = await transporter.sendMail(mailOptions);
		console.log('message sent : %s', info.response);
	} catch (error) {
		console.log('error occurred while sending email', error);
		throw error;
	}
};

module.exports = emailWithNodemailer;
