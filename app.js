'use strict';

var pointsScored = 0;
var arrayOfQuestions = [
  'Does Joy like pineapples on pizza?',
  'Does Joy have a dog?',
  'Does Joy have a cat?',
  'Was Joy born in a barn?',
  'Is Joy awesome?'];

var arrayOfCorrectAnswers = [
  'N',
  'Y',
  'Y',
  'N',
  'Y'];

var arrayOfCorrectAnswers2 = [
  'NO',
  'YES',
  'YES',
  'NO',
  'YES'
];

var arrayOfPossibleResponses = [
  'You are right!',
  'You are wrong.'];

var arrayOfUserAnswers = [];

var arrayOfBrowserResults = [
  'q1result',
  'q2result',
  'q3result',
  'q4result',
  'q5result'];

// Prompts user for their name. If the user does not enter a value, they will be prompted again.
var userName = prompt('Hi there! What is your name?');
while (userName.length === 0) {
  userName = prompt('You did not enter a name. What is your name?');
}
console.log(userName + ' is playing the game!');
document.getElementById('username').innerHTML = userName;

// Tells user about the game
alert('Hello, ' + userName + '! Let\'s play a game to see how well you know Joy. Type \"yes\" or \"no\" to the following five questions.');

function yesNoQuestions () {
  var i;
  for (i = 0; i < 5; i++) {
    var answerNumber = prompt(arrayOfQuestions[i]).toUpperCase();

    while (answerNumber !== 'Y' && answerNumber !== 'YES' && answerNumber !== 'N' && answerNumber !== 'NO') {
      answerNumber = prompt('You did not answer in the correct format. ' + arrayOfQuestions[i]).toUpperCase();
    }

    arrayOfUserAnswers[i] = answerNumber;

    if (answerNumber === arrayOfCorrectAnswers[i] || answerNumber === arrayOfCorrectAnswers2[i]) {
      alert(arrayOfPossibleResponses[0]);
      pointsScored++;
      console.log(arrayOfQuestions[i] + ' ' + userName + ' answered ' + arrayOfUserAnswers[i] + '. The correct answer is ' + arrayOfCorrectAnswers2[i] + '. Congrats!');
    }
    else {
      alert(arrayOfPossibleResponses[1]);
      console.log(arrayOfQuestions[i] + ' ' + userName + ' answered ' + arrayOfUserAnswers[i] + '. The correct answer is ' + arrayOfCorrectAnswers2[i] + '.');
    }
    document.getElementById(arrayOfBrowserResults[i]).innerHTML = answerNumber;
  }
}
yesNoQuestions();

// Question 6
function function6() {
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
}

function6();

// Question 7
function function7() {
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
}

function7();

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
