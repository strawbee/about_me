'use strict';

var pointsScored = 0;
var resultsMessage = document.getElementById('resultsmessage');

// Prompts user for their name. If the user does not enter a value, they will be prompted again.
var userName = prompt('Hi there! What is your name?');
while (userName.length === 0) {
  userName = prompt('You did not enter a name. What is your name?');
}
console.log(userName + ' is playing the game!');
document.getElementById('username').innerHTML = userName;

// Tells user about the game
alert('Hello, ' + userName + '! Let\'s play a game to see how well you know Joy. Type \"yes\" or \"no\" to the following five questions.');

// Questions 1 - 5
function yesNoQuestions () {
  var i;
  var userAnswer;

  var arrayOfQuestions = [
    // Question 1
    [ 'Does Joy like pineapples on pizza?',
      'N',
      'NO',
      'You are right, because Joy is not a monster.',
      'Gross, leave my web page.',
      '',
      'q1question',
      'q1result'
    ],
    // Question 2
    [ 'Does Joy have a dog?',
      'Y',
      'YES',
      'She does! His name is Toby and he is a labradoodle.',
      'You\'re wrong. She has an adorable doggo!',
      '',
      'q2question',
      'q2result'
    ],
    // Question 3
    [ 'Does Joy have a cat?',
      'Y',
      'YES',
      'Yes, she has a floofy cat named Snowdrop~',
      'Wrong! Joy loves her cat.',
      '',
      'q3question',
      'q3result'
    ],
    // Question 4
    [ 'Was Joy born in a barn?',
      'N',
      'NO',
      'Correct, she was not born in a barn!',
      'RUDE!',
      '',
      'q4question',
      'q4result'
    ],
    // Question 5
    [ 'Is Joy awesome?',
      'Y',
      'YES',
      'Of course she is!',
      'I hope you suffer a minor inconvenience.',
      '',
      'q5question',
      'q5result'
    ]
  ];

  for (i = 0; i < arrayOfQuestions.length; i++) {
    document.getElementById(arrayOfQuestions[i][6]).innerHTML = arrayOfQuestions[i][0];
    userAnswer = prompt(arrayOfQuestions[i][0]).toUpperCase();

    while (userAnswer !== 'Y' && userAnswer !== 'YES' && userAnswer !== 'N' && userAnswer !== 'NO') {
      userAnswer = prompt('You did not answer in the correct format. ' + arrayOfQuestions[i][0]).toUpperCase();
    }

    arrayOfQuestions[i][5] = userAnswer;

    if (userAnswer === arrayOfQuestions[i][1] || userAnswer === arrayOfQuestions[i][2]) {
      alert(arrayOfQuestions[i][3]);
      pointsScored++;
      console.log(arrayOfQuestions[i][0] + ' ' + userName + ' answered ' + arrayOfQuestions[i][5] + '. The correct answer is ' + arrayOfQuestions[i][2] + '. Congrats!');
    }
    else {
      alert(arrayOfQuestions[i][4]);
      console.log(arrayOfQuestions[i][0] + ' ' + userName + ' answered ' + arrayOfQuestions[i][5] + '. The correct answer is ' + arrayOfQuestions[i][2] + '.');
    }
    document.getElementById(arrayOfQuestions[i][7]).innerHTML = 'You answered: ' + userAnswer + '.';
  }
}
yesNoQuestions();

// Question 6
function question6() {
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

  document.getElementById('q6result').innerHTML = 'The random number was ' + randomNumber + '. You guessed ' + q6NumberOfGuesses + ' times, and you answered ' + q6ArrayOfGuesses.join(', ') + '.';
}

question6();

// Question 7
function question7() {
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

  document.getElementById('q7result').innerHTML = 'The correct answers were ' + topThreeCountries.join(', ') + '. You guessed ' + q7NumberOfGuesses + ' times, and you answered: ' + q7ArrayOfGuesses.join(', ') + '.';
}

question7();

// Displays points earned and a message accordingly
document.getElementById('points').innerHTML = pointsScored;

if (pointsScored >= 6) {
  resultsMessage.innerHTML = 'you are awesome';
}
else if (pointsScored === 4 || pointsScored === 5) {
  resultsMessage.innerHTML = 'you did okay';
}
else {
  resultsMessage.innerHTML = 'you suck';
}
