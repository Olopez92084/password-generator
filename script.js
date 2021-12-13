// Special Characters and Numerals for password
function generatePassword(){
var specialCharacters = ['!','@','#','$','%','^','?','&','*','(',')','-','_','=','+','/','~','`','[',']','{','}',',','.','|',];

var numericCharacters = ['1','2','3','4','5','6','7','8','9','0',];

var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

var possibleCharacters = [];

numberOfCharacters = prompt('How many characters would you like the password to be?');
if (Number.isNaN(numberOfCharacters)){
  alert('Password length must be a number.');
  return null; }

if (numberOfCharacters < 8) {alert('Password must be at least 8 characters');
  return null;}
if (numberOfCharacters > 128) {alert('Password length cannot exceed 128 characters');
  return null;}
  else {alert("Your password will be " + numberOfCharacters + " characters long.");}

  hasspecialCharacters = confirm('Click OK to confirm using special characters.');
  hasnumericCharacters = confirm('Click OK to confirm using numeric characters.');
  haslowercasedCharacters = confirm('Click OK to confirm using lower cased characters.');
  hasuppercasedCharacters = confirm('Click OK to confirm using upper cased characters.');

  if (haslowercasedCharacters === false && 
    hasuppercasedCharacters === false && 
    hasnumbericCharacters === false && 
    hasspecialCharacters === false) {
    return "Please select at least one character type.";
  };

  if (haslowercasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasuppercasedCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasnumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasspecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

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