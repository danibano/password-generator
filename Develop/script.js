// Assignment Code

var generateBtn = document.querySelector("#generate");
var numberOfCharacters;
var okToUseSpecialChars;
var okToUseLowLets;
var okToUseUpLets;
var okToUseNumbs;
var finalPassword = "";
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "`", "~", "[", "]", "{", "}", ";", ":", ",", ".", "<", ">", "/", "?"];
var lowerLetters = ("abcdefghijklmnopqrstuvwxyz").split("");
var upperLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numbers = ("0123456789").split("");


function askQuestions (){
  
  var response = prompt ("How many characters");
  numberOfCharacters = parseInt(response);

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Must be between 8 - 128 characters.")
    askQuestions()
  } else {
    okToUseSpecialChars = confirm("Do you want to use special characters?");

    okToUseLowLets = confirm("Do you want to use lower case letters?");
  
    okToUseUpLets = confirm("Do you want to use upper case letters?");
  
    okToUseNumbs = confirm("Do you want to use numbers?");
  }
}


function generatePassword(){
  var finalPassword = "";
  askQuestions();

  for( var i = 0; i < numberOfCharacters; i++){
    if (okToUseSpecialChars) {
      finalPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    if (okToUseLowLets) {
      finalPassword += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    }

    if (okToUseUpLets) {
      finalPassword += upperLetters[Math.floor(Math.random() * upperLetters.length)];
    }

    if (okToUseNumbs) {
      finalPassword += numbers[Math.floor(Math.random() * numbers.length)];
    }
  }

  return finalPassword.slice(0,numberOfCharacters);
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);