// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharacters;
var okToUseSpecialChars;
var finalPassword = "";
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "`", "~", "[", "]", "{", "}", ";", ":", ",", ".", "<", ">", "/", "?"];
var lowerLetters = ("abcdefghijklmnopqrstuvwxyz").split("");
var upperLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numbers = ("0123456789").split("");

// use global variables to list out alll possible: mayber use an array
//special characters
//lower case letters
//upper case letters
//numbers

function askQuestions (){
  
  var response = prompt ("How many characters");
  var numberOfCharacters = parseInt(response);

  var okToUseSpecialChars = confirm("Do you want to use special characters?");
}

// use a loop to grab a random charcter x nunber of times

// finalPassword += 

//most can be done with arrays loops and functions apparently

//homework starts here
function generatePassword(){
  askQuestions();
  //var numberOfCharacters = parseInt( prompt("How many Characters?"))

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);