// Assignment Code
var generateBtn = document.querySelector("#generate");

//confirm password length

function generatePassword() {
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length.\nPlease choose a password greater than 8 and less than 128 characters.");
   return "";
  }

//ask user for character types to be included in password

var includeLowercase = confirm("Include lowercase letters in password?");
var includeUppercase = confirm("Include uppercase letters in password?");
var includeNumbers = confirm("Include numbers in password?");
var includeSpecialCharacters = confirm("Include special characters in password?");

if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
  alert("Error, invalid character types.\nPlease include at least one type of character.");
  return "";
}

//create constant variables to be used for password and generate random password.

let passwordCharacters = [];
const specialCharacters = "!\"#$%&'()*++,-./:;<=>?@[\\]^_`{|}~";
const numbers = "1234567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUXWYZ";
const lowercase = "abcdefghijklmnopqrstuxwyz";


if (includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}

if (includeNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers.split(""));
}
if (includeLowercase) {
  passwordCharacters = passwordCharacters.concat(lowercase.split(""));
}
if (includeUppercase) {
  passwordCharacters = passwordCharacters.concat(uppercase.split(""));
}

//randomize const variables and return a generated password.

let results = "";
for (var i = 0; i < passwordLength; i++) {
let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
let randomCharacter = passwordCharacters[randomIndex];
results += randomCharacter;
}

return results;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
