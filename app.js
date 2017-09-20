'use strict';

var pointsScored = 0;

// Prompts user for their name. If the user does not enter a value, they will be prompted again.
var userName = prompt('Hi there! What is your name?');
while (userName.length === 0) {
  userName = prompt('You did not enter a name. What is your name?');
}
console.log(userName + ' is playing the game!');
document.getElementById('username').innerHTML = userName;

// Tells user about the game
alert('Hello, ' + userName + '! Let\'s play a game to see how well you know Joy. Type \"yes\" or \"no\" to the following five questions.');

// Question 1
var answer1 = prompt('Does Joy like pineapples on pizza?').toUpperCase();

while (answer1 !== 'Y' && answer1 !== 'YES' && answer1 !== 'N' && answer1 !== 'NO') {
  answer1 = prompt('You did not answer in the correct format. Please answer with yes or no. Does Joy like pineapples on pizza?').toUpperCase();
}

if (answer1 === 'N' || answer1 === 'NO') {
  alert('You\'re right, of course!');
  console.log(userName + ' guessed that Joy does not like pineapple on pizza. Correct!');
  pointsScored++;
}
else {
  alert('Seriously? You\'re wrong; Joy has some class.');
  console.log(userName + ' guessed that Joy likes pineapple on pizza. Gross!');
}

document.getElementById('q1result').innerHTML = answer1;

// Question 2
var answer2 = prompt('Does Joy have a dog?').toUpperCase();

while (answer2 !== 'Y' && answer2 !== 'YES' && answer2 !== 'N' && answer2 !== 'NO') {
  answer2 = prompt('You did not answer in the correct format. Please answer with yes or no. Does Joy have a dog?').toUpperCase();
}

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('You\'re right, she does! She has a labradoodle named Toby.');
  console.log(userName + ' guessed correctly that Joy does have a dog.');
  pointsScored++;
}
else {
  alert('You are wrong!');
  console.log(userName + ' guessed that Joy does not have a dog. Wrong!');
}

document.getElementById('q2result').innerHTML = answer2;

// Question 3
var answer3 = prompt('Does Joy have a cat?').toUpperCase();

while (answer3 !== 'Y' && answer3 !== 'YES' && answer3 !== 'N' && answer3 !== 'NO') {
  answer3 = prompt('You did not answer in the correct format. Please answer with yes or no. Does Joy have a cat?').toUpperCase();
}

if (answer3 === 'Y' || answer3 === 'YES') {
  alert('You\'re right, she does! Her cat\'s is named Snowdrop.');
  console.log(userName + ' guessed correctly that Joy has a cat.');
  pointsScored++;
}
else {
  alert('You are wrong!');
  console.log(userName + ' guessed that Joy does not have a cat. Wrong!');
}

document.getElementById('q3result').innerHTML = answer3;

// Question 4
var answer4 = prompt('Was Joy born in a barn?').toUpperCase();

while (answer4 !== 'Y' && answer4 !== 'YES' && answer4 !== 'N' && answer4 !== 'NO') {
  answer4 = prompt('You did not answer in the correct format. Please answer with yes or no. Was Joy born in a barn?').toUpperCase();
}

if (answer4 === 'N' || answer4 === 'NO') {
  alert('You\'re right! She was not born in a barn.');
  console.log(userName + ' guessed correctly that Joy was not born in a barn.');
  pointsScored++;
}
else {
  alert('You jerk, how could you think that??');
  console.log(userName + ' is a big wrong jerk and guessed that Joy is born in a barn.');
}

document.getElementById('q4result').innerHTML = answer4;

// Question 5
var answer5 = prompt('Is Joy awesome?').toUpperCase();

while (answer5 !== 'Y' && answer5 !== 'YES' && answer5 !== 'N' && answer5 !== 'NO') {
  answer5 = prompt('You did not answer in the correct format. Please answer with yes or no. Is Joy awesome?').toUpperCase();
}

if (answer5 === 'Y' || answer5 === 'YES') {
  alert('Of course, you are correct.');
  console.log(userName + ' guessed correctly that Joy is awesome.');
  pointsScored++;
}
else {
  alert('You are wrong!');
  console.log(userName + ' thinks Joy is not awesome!! OMG.');
}

document.getElementById('q5result').innerHTML = answer5;


// Displays points earned and a message accordingly
document.getElementById('points').innerHTML = pointsScored;
if (pointsScored >= 4) {
  document.getElementById('resultsmessage').innerHTML = 'you are awesome';
}
else if (pointsScored === 3) {
  document.getElementById('resultsmessage').innerHTML = 'you did okay';
}
else {
  document.getElementById('resultsmessage').innerHTML = 'you suck';
}
