console.log('mister calculator');
'use strict'

var gNum1 = null,gNum2 = null, operator = '',gMemoryNum = null;

//this function add digit to the current number
//the function knows which gNum is the active one by checking if gNum2 is null.
function addDigit(digit) {
    
    var tempOutput = '';//string for now, in order to conticating it later
    
    if(gNum2 === null)  {
        if(gNum1 === null) tempOutput = gNum1 = digit;
        else    {
            gNum1 += digit;
            tempOutput = gNum1;
        }   
        
    }
    else {
        if(gNum2 === 'z')  tempOutput = gNum2 = digit;
        else {
            gNum2 += digit;
            tempOutput = gNum2;
        }
    }

    displayOutput(tempOutput);
}

//this function should display a given number into the output td in the table.
function displayOutput(str2BeDisplayed){
    
    var tdOutPut = document.querySelector('#output');
    tdOutPut.innerHTML = str2BeDisplayed;
}

function setOperator(op){
    gNum2 = 'z';
    operator = op ;
    displayOutput(op);
}

function calculate(){

    var result = '';
    gNum1 = +gNum1;
    gNum2 = +gNum2;
    
    if(gNum2 !== null && gNum1 !== null)    {
        
        switch(operator){
            case '+':
                result = gNum1 + gNum2;
            break;

            case '*':
                result = gNum1 * gNum2;
            break;

            case '/':
                result = gNum1 / gNum2;
            break;

            case '%':
                    result = gNum1 / 100;
            break;
            case '-':
                result = gNum1 - gNum2;
            break;

            // case '*':
            //     result = gNum1 * gNum2;
            // break;

            // case '*':
            //     result = gNum1 * gNum2;
            // break;




        }
        displayOutput(result);
        //after deisplayin the result now reset the values of gnum1 and gnum2
        gNum1 = null,gNum2 = null;
    }
}

//this function purpose is to give an answer to each one of the M buttons at the calculator(M+,M-,MC..)

function memorize(strOper){

    var temp = 0;
    //console.log('I am memorize func, nice to meet you.');
    var outputNum = +document.querySelector('#output').innerHTML;
    var output = document.querySelector('#output');


    switch(strOper){
        case 'mc':
            gMemoryNum = null;
            gNum1 = '';
        break;

        case 'mr':
            if(gMemoryNum !== null) output.innerHTML = gMemoryNum;
            else output.innerHTML = 0;

            gNum1 = '';
        break;

        case 'ms':
            
        break;

        case 'm+':
        if(gMemoryNum !== null) gMemoryNum += outputNum;
        else
        gMemoryNum = outputNum;

        gNum1 = '';


        break;

        case 'm-':
        if(gMemoryNum !== null) gMemoryNum -= outputNum;
        else
        gMemoryNum = 0;

        gNum1 = '';


        break;

    }


}


function resetDisplay(cOp){
   
    var outputNum = +document.querySelector('#output').innerHTML;
    var output = document.querySelector('#output');
   
    switch(cOp){
        case 'ce':
            
        break;

        case 'c':
            output.innerHTML = 0;
            gNum1 = '';
            gNum2 = null;
        break;
    }


}
