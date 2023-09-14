// difference
// this function takes in two parameters and returns the difference of the two;

// difference(2,2); // 0
// difference(0,2); // -2

function difference(a, b) {
  return a - b;
}

// product
// this function takes in two parameters and returns the product of the two;

// product(2,2); // 4
// product(0,2); // 0

function product(a, b) {
  return a * b;
}

// printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

// printDay(4); // "Wednesday"
// printDay(41); // undefined

function printDay(num) {
  let dates = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return dates[num];
}

// lastElement
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

// lastElement([1,2,3,4]); // 4
// lastElement([]); // undefined

function lastElement(arr) {
  return arr[arr.length - 1];
}

// numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

// numberCompare(1,1); // "Numbers are equal"

// numberCompare(2,1); // "First is greater"

// numberCompare(1,2); // "Second is greater"

function numberCompare(a, b) {
  if (a === b) {
    return "Numbers are equal";
  } else if (a > b) {
    return "First is greater";
  }
  return "Second is greater";
}

// singleLetterCount
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

// singleLetterCount('amazing','A'); // 2
// singleLetterCount('Rithm School','o'); //

function singleLetterCount(str1, letter) {
  let finalCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() === letter.toLowerCase()) {
      finalCount++;
    }
  }
  return finalCount;
}

// multipleLetterCount
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
// multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
// multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function multipleLetterCount(str) {
  str = str.toLowerCase();
  let finalObj = {};
  for (let i = 0; i < str.length; i++) {
    if (finalObj[str[i]] === undefined) {
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}

// arrayManipulation
// this function should take in at most four parameters (an array, command, location, and value).
// If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.
// arrayManipulation([1,2,3], "remove", "end"); // 3

// arrayManipulation([1,2,3], "remove", "beginning"); // 1

// arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]

// arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

function arrayManipulation(arr, command, position, val) {
  if (command === "remove") {
    if (position === "end") {
      return arr.pop();
    }
    return arr.shift();
  } else if (command === "add") {
    if (position === "end") {
      arr.push(val);
      return arr;
    }
    arr.unshift(val);
    return arr;
  }
}

//   isPalindrome
//   A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); returns true
//   isPalindrome('testing'); // false

//   isPalindrome('tacocat'); // true

//   isPalindrome('hannah'); // true

//   isPalindrome('robert'); // false

function playRockPaperScissors() {
  const choice = ["rock", "paper", "scissor"];
  const computerChoice = choice[Math.floor(Math.random() * 3)];
  const playerChoice = prompt("Choose rock, paper, or scissors:");

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win!";
  } else {
    return "You lose!";
  }
}

const result = playRockPaperScissors();
console.log(result);
