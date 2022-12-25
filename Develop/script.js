// Assignment Code

// [] GIVEN I need a new, secure password
// [x] WHEN I click the button to generate a password
// [x] THEN I am presented with a series of prompts for password criteria
// [x] WHEN prompted for password criteria
// [x] THEN I select which criteria to include in the password
// [] WHEN prompted for the length of the password
// [] THEN I choose a length of at least 8 characters and no more than 128 characters
// [x] WHEN asked for character types to include in the password
// [x] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// [x] WHEN I answer each prompt
// [x] THEN my input should be validated and at least one character type should be selected
// [] WHEN all prompts are answered
// [] THEN a password is generated that matches the selected criteria
// [] WHEN the password is generated
// [] THEN the password is either displayed in an alert or written to the page

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

// use global variables to list out alll possible: mayber use an array
//special characters
//lower case letters
//upper case letters
//numbers

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

// use a loop to grab a random charcter x nunber of times

// finalPassword += 

//most can be done with arrays loops and functions apparently

//homework starts here
function generatePassword(){
  askQuestions();

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);