const fs = require('fs');

const getEmailArrayFromFile = (filePath) => {
  // Read the contents of the text file
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Split the file content into an array of emails (assuming one email per line)
  const emailArray = fileContent.split('\n').map(email => email.trim());

  // Remove any empty strings from the array
  return emailArray.filter(email => email !== '');
};

function readPropertiesFile(filePath2) {
  try {
    // Read the contents of the file
    const fileContent = fs.readFileSync(filePath2, 'utf-8');

    // Split the content into lines
    const lines = fileContent.split('\n');

    // Create an object to store key-value pairs
    const properties = {};

    // Process each line
    lines.forEach((line) => {
      // Ignore comments and empty lines
      if (!line.trim().startsWith('#') && line.trim() !== '') {
        // Split each line into key and value
        const [key, value] = line.split('=');

        // Trim whitespace and store in the properties object
        properties[key.trim()] = value.trim();
      }
    });

    return properties;
  } catch (error) {
    console.error('Error reading properties file:', error.message);
    return {};
  }
}

// Example usage:
const filePath = './helper/fileReader.txt';
const emails = getEmailArrayFromFile(filePath);

const filePath2 = './password.properties';
const credentials =  readPropertiesFile(filePath2);

// console.log(emails);

module.exports = {emails, credentials};