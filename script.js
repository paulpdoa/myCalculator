// buttons
const numbers = document.querySelectorAll('.numbers button');
const operations = document.querySelectorAll('.operations button');
const equal = document.querySelector('.equal');

let operationPressed = '';

let present;
let next;

// textboxes
const textboxMain = document.querySelector('.textboxMain');
const textboxBelow = document.querySelector('.textboxBelow');

// clicked buttons
numbers.forEach((number) => {
   number.addEventListener('click',() => {
       textboxMain.value += +number.value;
   })
})
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        operationPressed = operation.value;

        textboxBelow.value += textboxMain.value;
        present = textboxBelow.value;
        textboxMain.value = '';
        console.log(present);
        
    })
})
equal.addEventListener('click', () => {

    if(operationPressed === '+') {
        let addResult = +present + +textboxMain.value;

        textboxMain.value = '';
        textboxMain.value = addResult;
       
        
    } else if(operationPressed === '-') {
        let subtractResult = +textboxBelow.value - +textboxMain.value;
        
        textboxMain.value = '';
        textboxBelow.value = subtractResult;
    } else if(operationPressed === '*') {
        let multiplyResult = +textboxBelow.value * +textboxMain.value;
        
        textboxMain.value = '';
        textboxBelow.value = multiplyResult;      
    } else {
        let divideResult = +textboxBelow.value / +textboxMain.value;
        
        textboxMain.value = '';
        textboxBelow.value = divideResult;   
    }
})