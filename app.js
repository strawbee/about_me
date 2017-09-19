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
var answer1 = prompt('Does Joy like pineapples on pizza?');

while (answer1.toUpperCase() !== 'Y' && answer1.toUpperCase() !== 'YES' && answer1.toUpperCase() !== 'N' && answer1.toUpperCase() !== 'NO') {
  answer1 = prompt('You did not answer in the correct format. Please answer with yes or no. Does Joy like pineapples on pizza?');
}

if (answer1.toUpperCase() === 'N' || answer1.toUpperCase() === 'NO') {
  alert('You\'re right, of course!');
  console.log(userName + ' guessed that Joy does not like pineapple on pizza. Correct!');
  pointsScored++;
}
else {
  alert('Seriously? You\'re wrong; Joy has some class.');
  console.log(userName + ' guessed that Joy likes pineapple on pizza. Gross!');
}

document.getElementById('q1result').innerHTML = answer1.toUpperCase();

// Question 2
var answer2 = prompt('Does Joy have a dog?');

while (answer2.toUpperCase() !== 'Y' && answer2.toUpperCase() !== 'YES' && answer2.toUpperCase() !== 'N' && answer2.toUpperCase() !== 'NO') {
  answer2 = prompt('You did not answer in the correct format. Please answer with yes or no. Does Joy have a dog?');
}

if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
  alert('You\'re right, she does! She has a labradoodle named Toby.');
  console.log(userName + ' guessed correctly that Joy does have a dog.');
  pointsScored++;
}
else {
  alert('You are wrong!');
  console.log(userName + ' guessed that Joy does not have a dog. Wrong!');
}

document.getElementById('q2result').innerHTML = answer2.toUpperCase();

// Question 3
var answer3 = prompt('Does Joy have a cat?');

while (answer3.toUpperCase() !== 'Y' && answer3.toUpperCase() !== 'YES' && answer3.toUpperCase() !== 'N' && answer3.toUpperCase() !== 'NO') {
  answer3 = prompt('You did not answer in the correct format. Please answer with yes or no. Does Joy have a cat?');
}

if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES') {
  alert('You\'re right, she does! Her cat\'s is named Snowdrop.');
  console.log(userName + ' guessed correctly that Joy has a cat.');
  pointsScored++;
}
else {
  alert('You are wrong!');
  console.log(userName + ' guessed that Joy does not have a cat. Wrong!');
}

document.getElementById('q3result').innerHTML = answer3.toUpperCase();

// Question 4
var answer4 = prompt('Was Joy born in a barn?');

while (answer4.toUpperCase() !== 'Y' && answer4.toUpperCase() !== 'YES' && answer4.toUpperCase() !== 'N' && answer4.toUpperCase() !== 'NO') {
  answer4 = prompt('You did not answer in the correct format. Please answer with yes or no. Was Joy born in a barn?');
}

if (answer4.toUpperCase() === 'N' || answer4.toUpperCase() === 'NO') {
  alert('You\'re right! She was not born in a barn.');
  console.log(userName + ' guessed correctly that Joy was not born in a barn.');
  pointsScored++;
}
else {
  alert('You jerk, how could you think that??');
  console.log(userName + ' is a big wrong jerk and guessed that Joy is born in a barn.');
}

document.getElementById('q4result').innerHTML = answer4.toUpperCase();

// Question 5
var answer5 = prompt('Is Joy awesome?');

while (answer5.toUpperCase() !== 'Y' && answer5.toUpperCase() !== 'YES' && answer5.toUpperCase() !== 'N' && answer5.toUpperCase() !== 'NO') {
  answer5 = prompt('You did not answer in the correct format. Please answer with yes or no. Is Joy awesome?');
}

if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES') {
  alert('Of course, you are correct.');
  console.log(userName + ' guessed correctly that Joy is awesome.');
  pointsScored++;
}
else {
  alert('You are wrong!');
  console.log(userName + ' thinks Joy is not awesome!! OMG.');
}

document.getElementById('q5result').innerHTML = answer5.toUpperCase();


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
