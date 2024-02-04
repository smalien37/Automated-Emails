const ExcelJS = require('exceljs');
const path = require('path');
const xlsx = require('xlsx');
const updateLogFile = require('./updateLogs.js')
const excelFilePath = `./emailer.xlsx`;
const workbook = xlsx.readFile(excelFilePath);

function excelReadEmail(){
    // Assuming you have only one sheet, get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Parse sheet data
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Display the parsed data
    console.log(jsonData);

    const emailArray = [];

    // Loop through the array and extract 'Email' property
    jsonData.forEach(item => {
      const email = item.Email;
      emailArray.push(email); // Add email to the array
    });
    return emailArray
}



function excelReadName(){
    // Assuming you have only one sheet, get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Parse sheet data
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Display the parsed data
    console.log(jsonData);

    const firstName = [];

    jsonData.forEach(item => {
      const first = item.First;
      firstName.push(first); // Add email to the array
    });

    return firstName
}

function excelWrite(){
    

}


module.exports = {
  excelReadEmail,
  excelReadName,
};



