// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
  // Check if the password is less than 8 characters long
  const tooShort = password.length < 8;

  // Check if the password contains any spaces
  const hasSpace = password.indexOf(" ") !== -1;

  // Check if the password contains the username
  const tooSimilar = password.indexOf(username) !== -1;

  // Return true if the password passes all checks, false otherwise
  return !tooShort && !hasSpace && !tooSimilar;
}
