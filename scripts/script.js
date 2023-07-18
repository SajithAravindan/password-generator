//- Creation Date: 07/15/2023
//- Created by Sajith Aravindan

// Global Variables
var generateBtn = document.querySelector("#generate");//Button
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//UpperCase choice contents
var lowerCase= "abcdefghijklmnopqrstuvwxyz";//LowerCase choice contents
var numbers="0123456789";//Numeric choice contents
var splChars="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";//Special Chars choice contents
var passwordTextarea = document.querySelector("#password");//Textarea to displace generated Pwd


/* Function to initiate password generation process
Accepts & Validates user inputs
Calls the funtion to generate password and passes the user chioces as parameters
Wites the Generated password to User Interface - HTML*/
function writePassword() {  
  var pwdLength = 0;
  var userChoices = "";
  pwdLength = prompt("Enter the length of password required (min 8 - max 128)");//get the required length for password
  if (isNaN(pwdLength) || pwdLength < 8 || pwdLength >= 128) //chk for is a number , length > 8 and < 128
  {    
    if (confirm("Entered length of password is less than 8 OR more than 128. Do you want to try again?")) {
      writePassword();// loop again
    }
  }
  else {
    if(confirm("Want to incule Uppercase Characters?"))//confirmation to include Uppercase
    {
      userChoices = upperCase;
    }
    if(confirm("Want to incule Lowercase Characters?"))//confirmation to include Lowercase
    {
      userChoices = userChoices + lowerCase;
    }
    if(confirm("Want to incule Numbers?"))//confirmation to include Numbers
    {
      userChoices = userChoices + numbers;
    }
    if(confirm("Want to incule Special Characters?"))//confirmation to include Special Characters
    {
      userChoices = userChoices + splChars;
    }
    if(userChoices.length>0)// If user has selected any one option
    {
      //calls the funtion to generate pwd passing along the user choices.      
      var password = generatePassword(userChoices, pwdLength);
      passwordTextarea.value = password;//displays the generated password.
    }
    else {// prompt the user the error n gives a choice to continue.
      if (confirm("You need to choose an option to continue. Do you want to try again?")) {
        writePassword();
      }
    }

  } 
}

// Add event listener to button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
// Accepts parameters - Content(userChoices) and the length(pwdLength) to generate password
// Return the generated password 
function generatePassword(userChoices, pwdLength)
{
  var genPassword = "";
  for (var i = 1; i <= pwdLength; i++) {
    var randomNumber = Math.floor(Math.random() * userChoices.length);
    genPassword += userChoices.substring(randomNumber, randomNumber + 1);
  }
  //Exception handling
  if (genPassword.length > 0) {
    return genPassword;
  }
  else {// Loop back from begining 
    if (confirm("Error occurred while generating password. Do you want to try again?")) {
      writePassword();
    }
  }
}