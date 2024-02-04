const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const updateLogFile = require('./helper/updateLogs.js')
const getEmails = require('./helper/fileReader.js')
const getCredentials= require('./helper/fileReader.js')
const htmlBody = require('./helper/emailBody.js')

const gmailCredentials = {
  user: getCredentials.credentials['email'],
  pass: getCredentials.credentials['password']
};
const clientEmails = getEmails.emails;
const emailSubject = htmlBody.subjectLine;
const emailBody = htmlBody.htmlBody;

r
const getAllFilePaths = (folderPath) => {
  const filePaths = [];
  const files = fs.readdirSync(folderPath);
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isFile()) {
      if (path.extname(filePath).toLowerCase() === '.pdf'){ filePaths.push(filePath);}
    }
  });
  return filePaths;
};

const folderPath = './attachments';
const attachmentPaths = getAllFilePaths(folderPath);


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: gmailCredentials
});


const attachments = attachmentPaths.map(path => ({
  filename: path.split('/').pop(), // use the base file name as the attachment name
  path
}));

clientEmails.forEach((clientEmail) => {
  const mailOptions = {
    from: {
        address: getCredentials.credentials['email'],
        name: getCredentials.credentials['name']
    },
    to: clientEmail,
    subject: emailSubject,
    html: emailBody,
    attachments
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error sending email to ${clientEmail}:`, error);
      updateLogFile(`Error sending email to ${clientEmail}:`);
      updateLogFile(error + `\n -------------------------------------------------------------------------------------------------------------`);

    } else {
      console.log(`Email sent to ${clientEmail}:`, info.response);
      updateLogFile(`Email sent to ${clientEmail}:`);
      updateLogFile(info.response + `\n -------------------------------------------------------------------------------------------------------------`);
    }
  });
});





