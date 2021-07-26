// buttons
const numbers = document.querySelectorAll('.numbers button');
const operations = document.querySelectorAll('.operations button');
const equal = document.querySelector('.equal');

let operationPressed = '';

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
        textboxMain.value = '';
        
    })
})
equal.addEventListener('click', () => {

    if(operationPressed === '+') {
        let addResult = +textboxBelow.value + +textboxMain.value;

        textboxMain.value = '';
        textboxBelow.value = addResult;
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

    // const result = +textboxBelow.value + +textboxMain.value;
    // textboxMain.value = '';
    // textboxBelow.value = result;

})
// function for adding number
   
console.log(operationPressed);