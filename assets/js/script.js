// Assignment Code
//Define variables
var generateBtn = document.querySelector("#generate");
var passwordEL = document.querySelector("#password");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Asks questions to determine password criteria
function questions() {
  var isValid = false;
  do {
    var length = prompt("How long should your password be? Choose a number between 8 and 128 characters");
    var qNumbers = confirm("Should your password include numbers?");
    var qLowerCase = confirm("Should your password include lower case letters?");
    var qUpperCase = confirm("Should your password include upper case letters?");
    var qSpecial = confirm("Should your password include special characters?");
    var answers = {
      length: length,
      qNumbers: qNumbers,
      qLowerCase: qLowerCase,
      qUpperCase: qUpperCase,
      qSpecial: qSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!qNumbers)&&(!qLowerCase)&&(!qUpperCase)&&(!qSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return answers;
}
// Uses answers to generate password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var newPassword = "";

  if (passwordOptions.qNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.qLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.qUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.qSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }
  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    newPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(newPassword);

  return newPassword;
}

// Display password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);