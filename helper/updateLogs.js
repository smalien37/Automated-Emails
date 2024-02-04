const fs = require('fs');

// Sample responses
// const responses = [
//   'Response 1: Thank you for your interest!',
//   'Response 2: We appreciate your feedback.',
//   'Response 3: Looking forward to hearing from you.'
// ];

// Log file path
const logFilePath = './responses.log';

// Function to update the log file
const updateLogFile = (response) => {
  const timestamp = new Date().toLocaleString();
  const logEntry = `---> [${timestamp}] **** ${response}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Error updating log file:', err);
    } else {
      console.log('Log file updated successfully.');
    }
  });
};

module.exports = updateLogFile;

// // Loop through responses and update the log file
// responses.forEach((response) => {
//   updateLogFile(response);
// });
