const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const updateLogFile = require('./helper/updateLogs.js')
const getEmails = require('./helper/fileReader.js')
const getCredentials= require('./helper/fileReader.js')
const htmlBody = require('./helper/emailBody.js')


// Your Gmail credentials
const gmailCredentials = {
  user: getCredentials.credentials['email'],
  pass: getCredentials.credentials['password']
};

// List of client emails
// const clientEmails = ['nikstesla2@gmail.com'];
const clientEmails = getEmails.emails;


// Email content
const emailSubject = htmlBody.subjectLine;
const emailBody = htmlBody.htmlBody;

// File paths for attachments
// const attachmentPaths = ['./attachments/Resume.pdf'];

// Function to get all file paths in a folder
const getAllFilePaths = (folderPath) => {
  const filePaths = [];

  // Read the contents of the folder
  const files = fs.readdirSync(folderPath);

  // Loop through the files
  files.forEach((file) => {
    // Get the full path of each file
    const filePath = path.join(folderPath, file);

    // Check if it's a file (not a subfolder)
    if (fs.statSync(filePath).isFile()) {
      if (path.extname(filePath).toLowerCase() === '.pdf'){ filePaths.push(filePath);}
    }
  });

  return filePaths;
};

const folderPath = './attachments';
const attachmentPaths = getAllFilePaths(folderPath);

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: gmailCredentials
});

// Attachments array
const attachments = attachmentPaths.map(path => ({
  filename: path.split('/').pop(), // use the base file name as the attachment name
  path
}));

// Send emails
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





