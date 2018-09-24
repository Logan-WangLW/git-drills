'use strict';

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }

  return 2018 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }
  if (typeof age !== 'number' || typeof name !== 'string') {
    throw new TypeError('Invalid argument types, wanted a string and a number');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Arun', 31);
  console.log(greeting1);
} catch (e) {
  console.error(e.message);
}

function jediName(firstName, lastName) {
  const firstJedi = firstName.slice(0, 2);
  const lastJedi = lastName.slice(0, 3);
  return `${lastJedi}${firstJedi}`;
}

console.log(jediName('Logan', 'Wang'));

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

beyond(10);
beyond(-50);
beyond(0);
beyond(Infinity);

function decodeWord(word) {
  const firstLetter = word.charAt(0);
  let characterNumber;
  switch (firstLetter) {
    case 'a':
      characterNumber = 2;
      break;
    case 'b':
      characterNumber = 3;
      break;
    case 'c':
      characterNumber = 4;
      break;
    case 'd':
      characterNumber = 5;
      break;
    default:
      return ' ';
  }

  return word.charAt(characterNumber - 1);
}

function decode(sentence) {
  const words = sentence.split(' ');
  let decodedSentence = '';
  for (let i = 0; i < words.length; i += 1) {
    decodedSentence += decodeWord(words[i]);
  }

  return decodedSentence;
}

const actualDecoding = decode('craft block argon meter bells brown croon droop');
const expectedDecoding = 'for loop';
console.log(actualDecoding);
console.log(expectedDecoding === actualDecoding);

function daysInMonth(month, leapYear = false) {
  switch (month) {
    case 'February':
      return leapYear ? 29 : 28;
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return 31;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return 30;
    default:
      throw new Error('Must provide a valid month.');
  }
}

try {
  console.log(daysInMonth('February'));
  console.log(daysInMonth('December'));
  console.log(daysInMonth('Octber'));
} catch (e) {
  console.error(e.message);
}

// 1 := Rock
// 2 := Paper
// 3 := Scissors
function rockPaperScissors(playerHand) {
  if (typeof playerHand !== 'number' || playerHand > 3 || playerHand < 1) {
    throw new Error('Invalid arguments, need a number between 1 and 3');
  }

  const aiHand = Math.floor(Math.random() * 3) + 1;
  console.log(`AI got a ${aiHand}`);

  if (aiHand === playerHand) {
    console.log('Tie game');
    return;
  }

  if (
    (playerHand === 1 && aiHand === 3) ||
    (playerHand === 2 && aiHand === 1) ||
    (playerHand === 3 && aiHand === 2)
  ) {
    console.log('You win!');
    return;
  }

  console.log('You lose');
}

rockPaperScissors(1);
rockPaperScissors(2);
rockPaperScissors(3);
try {
  rockPaperScissors(200);
} catch (e) {
  console.error(e.message);
}
