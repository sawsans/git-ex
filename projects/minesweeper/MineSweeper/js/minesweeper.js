console.log('MineSweeper Game!!!');
'use strict';

var gBoard;

var gState = {
    isGameOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

gLevel = { 
    SIZE: 4,
    MINES: 2 };

function initGame(size) {

    //location.reload();
    
    gState = {
        isGameOn: false,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    }
    
    size = parseInt(size);

    switch(size) {
        case 4:
            max = 16;
            mine = 2;
            gLevel.MINES = 2;
            gLevel.SIZE = 4;
            break;
        case 6:
            max = 36;
            mine = 5;
            gLevel.MINES = 5;
            gLevel.SIZE = 6;
            break;
        case 8:
            max = 64;
            mine = 15;
            gLevel.SIZE = 8;
            gLevel.MINES = 15;
            break;
        default:
            max = 16;
            mine = 2;
            gLevel.SIZE = 4;
            gLevel.MINES = 2;
    }

    gBoard = buildBoard();
    gState.isGameOn = true;
    renderBoard(gBoard);
    
    console.table(gBoard);
}
// CR: Not a good place for vars. ORDER!
var gRandomMineIndexes;
var gRandomIndexes = [];

function buildBoard() {

     var board = [];
     var tmpMineIndexes = [];
     for (var i = 0; i < gLevel.SIZE; i++) {
         board.push([]);
         for (var j = 0; j < gLevel.SIZE; j++) {
           board[i][j] = 0;
         }
     }
     
     gRandomIndexes = getRandomIndexs();

     //console.log('gRandomIndexes.length',gRandomIndexes.length);
     //console.log(gRandomIndexes);
     // CR : Very complcaited solution
     // CR: Better if sperated to other function 
     for(var k = 0; k < gRandomIndexes.length; k++) {
         var cnt = 1;
         var tmpCnt = 0;
            for(var i = 0; i < gLevel.SIZE;i++ ) {
                for(var j = 0;j < gLevel.SIZE; j++) {
                    tmpCnt++;
                    var numberCell = i + j + cnt; 
                    if(tmpCnt === gRandomIndexes[k]){
                     board[i][j] = '☀';
                     tmpMineIndexes.push({'i':i,'j':j});
                    }   
                }
                cnt += 3;
            }
    }
    //After drawing the first table with (*) in random places and 0 in all the rest
    //now there's a need to count the neigbors around each (*)
     setMinesNegsCount(board,tmpMineIndexes);
 
   return board;
 }

//return randoms indexes for the mine
function getRandomIndexs(){
    var rand = 0,max = 16,min = 1,mine = 2;
    indexes = [];//in order to reset the array values.
    randIndexes = [];

    switch(gLevel.SIZE) {
        case 4:
            max = 16;
            mine = 2;
            
            break;
        case 6:
            max = 36;
            mine = 5;
            break;
        case 8:
            max = 64;
            mine = 15;
            break;
        default:
            max = 16;
    }

    //loop for filling the array of indexes 
    indexes = [];
    for (var x = 0; x < max; x++) {
        indexes[x] = x + 1;
    }
    
    randIndexes = [];

    for(var c = 0; c < gLevel.MINES; c++)  {

    var idx = Math.floor(Math.random() * (indexes.length));
    rand = indexes[idx];
    indexes.splice(rand,1);
    if(c !== 0 && randIndexes[c - 1] !== rand)
        randIndexes.push(rand);
    else if(c === 0)  randIndexes.push(rand);
    else if(randIndexes[c - 1] === rand) c = c - 1;

    }
    
    return randIndexes;
}

function renderBoard(board) {
    var strHtml = ''

    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            strHtml += '<td id = "cell-' + i + '-' + j + '" class="notClicked" onmousedown="markCell(event);" onClick="clickedCell(this);">';
            strHtml += board[i][j];
            strHtml += '</td>';
        }
        strHtml += '</tr>';
    }
    
    //console.table(board);
    var elBoard = document.querySelector('#board')
    elBoard.innerHTML = strHtml;
}

function markCell(event){
    
    //only if it is a rught click mouse do the rest
    if(event.button == 2){
        var tdID = event.path[0].id;
        var td = document.querySelector('#'+tdID);
        // CR:  curly braces!!
        if(td.classList.contains('notClicked'))
        {
           td.classList.toggle('markedCell');
           if(td.classList.contains('markedCell'))   gState.markedCount++;
           else if (gState.markedCount > 0) gState.markedCount--;
        }
  }
}

function clickedCell(elCell){
    
    var coord = {};
    var strCellId = elCell.id;

    coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    
    var td = document.querySelector('#'+strCellId);
    // CR: better to all this info in your model    
    if(td.classList.contains('notClicked') && !td.classList.contains('markedCell')){
        td.classList.remove('notClicked');
        td.classList.add('clicked');
        gState.shownCount++;

    //function to check if it is a game over case
    gameOver(td.innerHTML);
    //if not then check if it is an empty cell and need to expand to its neighber
    if(td.innerHTML === '0')  showCellsNearEmptyCell(gBoard,coord);
  }
  return coord;
}

function gameOver(cellValue){
    var countShownCells = 0;
    var countMarkedCells = 0;

    var totalCells = gLevel.SIZE * gLevel.SIZE - getNumberOfMine();

    for(var i = 0;i < gLevel.SIZE; i++){
        for(var j = 0;j < gLevel.SIZE;j++){
            var strID = '#cell-'+i+'-'+j;
            var td = document.querySelector(strID);
            if(td.classList.contains('markedCell'))     countMarkedCells++;
            if(td.classList.contains('clicked'))     countShownCells++;

    }
}
    var k = (getNumberOfMine() === countMarkedCells && totalCells === countMarkedCells)
    //if the cell bieng clicked has a mine the game is over
    if(cellValue === '☀' || k) {
        revealAllCells();
        gState.isGameOn = false;
        setTimeout(function(){ alert('Game Over '); }, 500);
     }
}

function getNumberOfMine()  {
    
    var countNumMine = 0;
    for(var i = 0;i < gState.SIZE; i++){
        for(var j = 0;j < gState.SIZE; j++){
            if(gBoard[i][j] === '☀')  countNumMine++;
        }   
    }
  return countNumMine;
}



//this func gets a board and an array of coord as an objects {i:i,j:j}

function setMinesNegsCount(board,mIndexes){
    console.log(mIndexes);
        for(var k = 0;k < mIndexes.length; k++) {
            for(var i = mIndexes[k].i - 1; i <= mIndexes[k].i + 1; i++) {
                if (i < 0 || i >= board.length) continue;
                for (var j = mIndexes[k].j - 1; j <= mIndexes[k].j + 1; j++) {
                    if (j < 0 || j >= board[i].length) continue;
                    if (i === mIndexes[k].i && j === mIndexes[k].j) continue;
                    
                    if(!isNaN(board[i][j]))    board[i][j]++;
                }
            }
            //console.table(board);
       }
}

function showCellsNearEmptyCell(board, indexes){
    
    var x = indexes.i, y = indexes.j;
    console.table(board);
    console.log('showCellsNearEmptyCell ',indexes);
    console.log('x ',x);
    console.log('y ',y);

    for(var i = x - 1; i <= x + 1; i++){
        if (i < 0 || i >= board.length) continue;
        for(var j = y - 1; j <= y + 1; j++){
            if(j < 0 || j >= board[i].length) continue;
            if(i === x && j === y) continue;
            // CR: use consts (BOMB)
            if(board[i][j] !== '☀') {
                //CR : {i:i ,j:j}, no need for '' 
                var tmpStrCell = {'i':i,'j':j};
                var strCellId = getSelector(tmpStrCell);
                var td = document.querySelector(strCellId);
                td.classList.remove('notClicked');
                td.classList.add('clicked');

            }
            

        }
    }
    
}

function revealAllCells(){
    for(var i = 0;i < gLevel.SIZE;i++){
        for(var j = 0;j < gLevel.SIZE;j++){
            var strCellId = getSelector({'i':i,'j':j});
            var td = document.querySelector(strCellId);
            td.classList.remove('notClicked');
            td.classList.add('clicked');
        }
    }
}

function getSelector(coord) {
    return '#cell-' + coord.i + '-' + coord.j ;
}
