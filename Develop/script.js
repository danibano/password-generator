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
  
  var response = prompt ("How many characters?").trim();
  numberOfCharacters = parseInt(response);

  if (numberOfCharacters < 8 || numberOfCharacters > 128 || response.length === 0) {
    alert("Must be between 8 and 128 characters.")
    askQuestions()
  } else if ( isNaN(numberOfCharacters)) {
    alert("Please type a number not the word. Example: 10 not 'ten'")
    askQuestions ()
  } else {
    okToUseSpecialChars = confirm("Do you want to use special characters?");

    okToUseLowLets = confirm("Do you want to use lower case letters?");
  
    okToUseUpLets = confirm("Do you want to use upper case letters?");
  
    okToUseNumbs = confirm("Do you want to use numbers?");
  }

  if (okToUseSpecialChars == false && okToUseLowLets == false && okToUseUpLets == false && okToUseNumbs == false) {
    alert("Must choose at least one criteria.")
    askQuestions()
  }

}


function generatePassword(){
  var temppass = [];
  var finalPassword = "";
  askQuestions();

    if (okToUseSpecialChars) {
      temppass.push(...specialChars);
    }

    if (okToUseLowLets) {
      temppass.push(...lowerLetters);
    }

    if (okToUseUpLets) {
      temppass.push(...upperLetters);
    }

    if (okToUseNumbs) {
      temppass.push(...numbers);
    }


  for( var i = 0; i < numberOfCharacters; i++) {
    finalPassword = finalPassword + temppass[Math.floor(Math.random() * temppass.length)]

  }
  

  return finalPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);