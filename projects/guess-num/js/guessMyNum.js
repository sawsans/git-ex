'use strict';
console.log('Guess My Number!!!');

var randNum;
var isGuess = 1;

//console.log(getRandNumber());

function getRandNumber(){
    return Math.floor(Math.random() * (5 - 1) + 1);
}

function guessAnumber(){
    //only in case the user has guessed the guessed number then call getRandNumber function.
    if(isGuess) {
        randNum = getRandNumber();  
        isGuess = 0;
    }
    console.log('the randomized number is ',randNum);
    
    var guessNum = +prompt('Try to guess a number between 1 and 5');
    var elResult = document.querySelector('.result');
    
    if(isNaN(guessNum) || !guessNum) {
        guessNum = +prompt('Please a legal number between 1 and 5');
        // elResult.innerHTML = 'Please a legal number between 1 and 5';
    }

    if(guessNum - randNum < 0) {
        console.log('The number you guessed is too low!');
        elResult.innerHTML = 'The number you guessed is too low!';
    }
    else if(guessNum - randNum > 0) {
        console.log('The number you guessed is too high!');
        elResult.innerHTML = 'The number you guessed is too high!';
    }
    else if(guessNum === randNum ){//they're are equals
        console.log('CORRECT ANSWER :) YOU HAVE WON !!!');
        elResult.innerHTML = 'CORRECT ANSWER :) YOU HAVE WON !!!';
        isGuess = 1;
    }
    


}