// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var splChars="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



function writePassword() {
  var pwdLength = 0;
  var userChoices = "";
  pwdLength = prompt("Enter the lenth of password required (min 8 - max 128)");
  if (isNaN(pwdLength) || pwdLength < 8 || pwdLength >= 128) 
  {    
    if (confirm("Entered lenth of password is less than 8 OR more than 128. Do you want to try again?")) {
      writePassword();
    }
  }
  else {
    if(confirm("Want to incule Uppercase Characters?"))
    {
      userChoices = upperCase;
    }
    if(confirm("Want to incule Lowercase Characters?"))
    {
      userChoices = userChoices + lowerCase;
    }
    if(confirm("Want to incule Numbers?"))
    {
      userChoices = userChoices + numbers;
    }
    if(confirm("Want to incule Special Characters?"))
    {
      userChoices = userChoices + splChars;
    }
    if(userChoices.length>0)
    {
      var password = generatePassword(userChoices, pwdLength);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    else {
      if (confirm("You need to choose an option to continue. Do you want to try again?")) {
        writePassword();
      }
    }

  } 
}


generateBtn.addEventListener("click", writePassword);


function generatePassword(userChoices, pwdLength)
{
  var chars = userChoices;
  var passwordLength = pwdLength;
  var genPassword = "";
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    genPassword += chars.substring(randomNumber, randomNumber + 1);
  }
  if (genPassword.length > 0) {
    return genPassword;
  }
  else {
    if (confirm("Error occurred while generating password. Do you want to try again?")) {
      writePassword();
    }
  }

}