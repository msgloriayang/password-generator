// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialchar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\"]
var pw = 0
var results = ""
var choices = []

function generatePassword (){
while (pw < 8 || pw > 128 || pw === "" || isNaN (pw)){
  pw=prompt("please pick a password between 8 and 128 characters")
} 
var lowercaseConfirm = confirm ("would you like lowercase letters in your password?")
if (lowercaseConfirm === true) {
  choices = choices.concat (lowercase)
}
var uppercaseConfirm = confirm ("would you like uppercase letters in your password?")
if (uppercaseConfirm === true) {
  choices = choices.concat (uppercase)
}
var numbersConfirm = confirm ("would you like numbers in your password?")
if (numbersConfirm === true) {
  choices = choices.concat (numbers)
}
var specialcharConfirm = confirm ("would you like special characters in your password?")
if (specialcharConfirm === true) {
  choices = choices.concat (specialchar)
}
if (lowercaseConfirm === false&&uppercaseConfirm===false&&numbersConfirm===false&&specialcharConfirm===false){
  alert ("atleast one character must be selected in order to generate password")
  window.location.reload ()
}
for (var i=0, n=choices.length;i<pw;i++) {
  results+=choices[Math.floor(Math.random()*n)]
}
return results
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
