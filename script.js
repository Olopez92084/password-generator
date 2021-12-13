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

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]

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
  var length = prompt('How many characters would you like the password to be?');
  if (Number.isNaN(length)){
    alert('Password length must be a number.');
    return null; }

  if (length < 8) {alert('Password must be at least 8 characters');
    return null;}
  if (length > 128) {alert('Password length cannot exceed 128 characters');
    return null;}
    else {alert("Your password will be " + length + " characters long.");}

  var hasspecialCharacters = confirm('Click OK to confirm using special characters.');
  var hasnumericCharacters = confirm('Click OK to confirm using numeric characters.');
  var haslowerCasedCharacters = confirm('Click OK to confirm using lower cased characters.');
  var hasupperCasedCharacters = confirm('Click OK to confirm using upper cased characters.');

  if (hasspecialCharacters === false &&
      hasnumericCharacters === false &&
      haslowerCasedCharacters === false &&
      hasupperCasedCharacters === false)
      {alert('Must select at least one character type');
    return null;}

    var passwordOptions = {length: length, 
    hasspecialCharacters: hasspecialCharacters,
    hasnumericCharacters: hasnumericCharacters,
    haslowerCasedCharacters: haslowerCasedCharacters,
    hasupperCasedCharacters: hasupperCasedCharacters};
    
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

  if (options.hasspecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters),
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasnumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters),
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.haslowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters),
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.hasupperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters),
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
 
  for (var i = 0; i < possibleCharacters.length; i++) {result[i] = guaranteedCharacters[i];}
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);