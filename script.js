// Special Characters and Numerals for password
var specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '?',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '/',
  '~',
  '`',
  '[',
  ']',
  '{',
  '}',
  ',',
  '.',
  '|',
];

var numericCharacters = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

function getPasswordOptions() {
  var length = parseInt(prompt('How many characters would you like the password to be?') );
  if (Number.isNaN(length)){
    alert('Password length must be a number.');
    return null;}

  if (length < 8) {alert('Password must be at least 8 characters');
    return null;}
  if (length > 128) {alert('Password length cannot exceed 128 characters');
    return null;}
  var hasSpecialCharacters = confirm('Click OK to confirm using special characters.');
  var hasNumericCharacters = confirm('Click OK to confirm using numeric characters.');
  var hasLowerCasedCharacters = confirm('Click OK to confirm using lower cased characters.');
  var hasUpperCasedCharacters = confirm('Click OK to confirm using upper cased characters.');

  if (hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false)
      {alert('Must select at least one character type');
    return null;}

    var passwordOptions = {length: length, hasSpecialCharacters: hasSpecialCharacters,
                           hasNumericCharacters: hasNumericCharacters,
                           hasLowerCasedCharacters: hasLowerCasedCharacters,
                           hasUpperCasedCharacters: hasUpperCasedCharacters};
    return passwordOptions;
}

function getRandom(array) {var randIndex = Math.floor(Math.random() * array.length);
var randElement = array[randIndex];
return randElement;}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  if (options.haslowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {result[i] = guaranteedCharacters[i];}
  return result.join('');
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
