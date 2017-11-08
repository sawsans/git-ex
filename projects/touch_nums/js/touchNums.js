'use strict';
console.log('touch-nums');

var gIndexes = [];
var rows,cols;

function fillIndexes(rows,cols) {
    gIndexes = [];//in order to reset the array values.
    var TDs = rows * cols;
    for (var i = 0; i < TDs; i++) {
        gIndexes[i] = i + 1;
    }
}

//this function return a random number, and then remove it from the array
//in this case it returns it from gIndexes array.
function getRandomNumber() {

    var randNum;
    var random = Math.floor(Math.random() * (gIndexes.length));
    randNum = gIndexes[random];
    gIndexes.splice(random, 1);
    return randNum;
}

function resetGame(){
    seconds = 0, minutes = 0, hours = 0;
    clickedNums = [];
    clearInterval(t);
    document.querySelector("#nextNumber").innerHTML = 1;
    document.querySelector("#timing").innerHTML = "00:00:00";
}

function showTable(r,c) {
    rows = r;
    cols = c;

    resetGame();
    clickedNums = [];
    fillIndexes(rows,cols);
    var drawTable = '';

    for (var i = 0; i < rows; i++) {
        drawTable += '<tr>';
        for (var j = 0; j < cols; j++) {
            var randNum = getRandomNumber();
            drawTable += '<td onClick="checkNumber(this)">' + randNum + '</td>';
        }
        drawTable += '</tr>';
    }
    document.querySelector("#gameBoard").innerHTML = drawTable;
}


var seconds = 0, minutes = 0, hours = 0, t;

function add() {

    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

    }
    document.querySelector("#timing").innerHTML = (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" + (seconds > 9 ? seconds : "0" + seconds));
}

var clickedNums;

function checkNumber(elTd) {

    var currNumber = +(elTd.innerHTML);
    var length = clickedNums.length;
    var TDs = rows*cols;
    console.log('checkNumber rows*cols',rows*cols);
    if (length < TDs) {
        //it means that the last index 
        
        if (!length && currNumber === 1) {
            t = setInterval(add, 1000);
            document.querySelector("#nextNumber").innerHTML = currNumber + 1;
            clickedNums.push(currNumber);
            elTd.style.color = '#fff';
        }
        else if (length >= 1) {
            if (clickedNums[length - 1] + 1 === currNumber) {
                clickedNums.push(currNumber);
                elTd.style.color = '#fff';
                if(currNumber < TDs)
                    document.querySelector("#nextNumber").innerHTML = currNumber + 1;
                if (clickedNums.length >= TDs){ 
                    clearInterval(t);
                }
            }
        }
    }
    else clearInterval(t);
}

showTable(4,4);
