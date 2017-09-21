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
  console.log(userName + ' guessed that Joy does not like pineapple on pizza, because she is not a monster. Correct!');
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

// Question 6
var answer6 = Math.round(prompt('How lucky are you? Guess a whole number between 1 and 10! You get four tries.'));
var randomNumber = Math.floor(Math.random() * 10 + 1);
var q6NumberOfGuesses = 1;
var q6ArrayOfGuesses = [];

while (isNaN(answer6) || answer6 > 10 || answer6 < 1) {
  answer6 = Math.round(prompt('You did not enter a number between 1 and 10. Try again!'));
}

while (answer6 !== randomNumber && q6NumberOfGuesses < 4) {
  var q6GuessesLeft = 4 - q6NumberOfGuesses;
  q6ArrayOfGuesses[q6NumberOfGuesses - 1] = answer6;
  if (answer6 < randomNumber) {
    alert(answer6 + ' is too low!');
  }
  else {
    alert(answer6 + ' is too high!');
  }
  answer6 = Math.round(prompt('Try again. You have ' + q6GuessesLeft + ' tries left.'));
  while (isNaN(answer6) || answer6 > 10 || answer6 < 1) {
    answer6 = Math.round(prompt('You did not enter a number between 1 and 10. Try again!'));
  }
  q6NumberOfGuesses++;
}

if (answer6 === randomNumber) {
  alert('You are right! You tried ' + q6NumberOfGuesses + ' times.');
  q6ArrayOfGuesses[q6NumberOfGuesses - 1] = answer6;
  pointsScored++;
  console.log(userName + ' guessed ' + q6NumberOfGuesses + ' times and got the right answer to the number guessing game, which was ' + randomNumber + '! ' + userName + ' guessed: ' + q6ArrayOfGuesses.join(', ') + '.');
}
else {
  alert('You tried four times and still did not get the right number. You\'re not lucky and/or smart!');
  q6ArrayOfGuesses[q6NumberOfGuesses - 1] = answer6;
  console.log(userName + ' guessed four times and still did not get the right answer to the number guessing game. ' + userName + '\'s guesses were ' + q6ArrayOfGuesses.join(', ') + '.');
}

document.getElementById('q6randomnumber').innerHTML = randomNumber;
document.getElementById('q6timesguessed').innerHTML = q6NumberOfGuesses;
document.getElementById('q6result').innerHTML = q6ArrayOfGuesses.join(', ');

// Question 7
var answer7 = prompt('Can you guess one of Joy\'s top three favorite countries to visit? You get six tries!').toUpperCase();
var topThreeCountries = ['BELIZE', 'MEXICO', 'CHINA'];
var q7NumberOfGuesses = 1;
var q7ArrayOfGuesses = [];

while (answer7.length === 0) {
  answer7 = prompt('You did not enter an answer. Try again!').toUpperCase();
}

while (topThreeCountries.indexOf(answer7) < 0 && q7NumberOfGuesses < 6) {
  var q7GuessesLeft = 6 - q7NumberOfGuesses;
  q7ArrayOfGuesses[q7NumberOfGuesses - 1] = answer7;
  answer7 = prompt('That\'s not right; try again. You have ' + q7GuessesLeft + ' tries left.').toUpperCase();
  while (answer7.length === 0) {
    answer7 = prompt('You did not enter an answer. Try again!').toUpperCase();
  }
  q7NumberOfGuesses++;
}

if (topThreeCountries.indexOf(answer7) >= 0) {
  alert('You are right! You tried ' + q7NumberOfGuesses + ' times.');
  q7ArrayOfGuesses[q7NumberOfGuesses - 1] = answer7;
  pointsScored++;
  console.log(userName + ' guessed ' + q7NumberOfGuesses + ' times and got the correct answer. ' + userName + ' guessed the following: ' + q7ArrayOfGuesses.join(', ') + '. Joy\'s top three countries to visit are: ' + topThreeCountries.join(', ') + '.');
}
else {
  alert('You tried six times and still did not get the right answer. Seriously, now!');
  q7ArrayOfGuesses[q7NumberOfGuesses - 1] = answer7;
  console.log(userName + ' guessed six times and still did not guess one of Joy\'s favorite countries to visit. ' + userName + '\'s guesses were ' + q7ArrayOfGuesses.join(', ') + ', and the correct answers were: ' + topThreeCountries.join(', ') + '.');
}

document.getElementById('q7favoritecountries').innerHTML = topThreeCountries.join(', ');
document.getElementById('q7timesguessed').innerHTML = q7NumberOfGuesses;
document.getElementById('q7result').innerHTML = q7ArrayOfGuesses.join(', ');


// Displays points earned and a message accordingly
document.getElementById('points').innerHTML = pointsScored;
if (pointsScored >= 5) {
  document.getElementById('resultsmessage').innerHTML = 'you are awesome';
}
else if (pointsScored === 3 || pointsScored === 4) {
  document.getElementById('resultsmessage').innerHTML = 'you did okay';
}
else {
  document.getElementById('resultsmessage').innerHTML = 'you suck';
}
