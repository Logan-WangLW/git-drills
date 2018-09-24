'use strict';

function getYearOfBirth(age){
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }

  return 2018 - age;
}

function createGreeting(name, age){
  if (name === undefined || age === undefined){
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
  console.log(e.message);
}
