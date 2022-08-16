const display = document.getElementById('display');
const onButton = document.getElementById('on');
const clearButton = document.getElementById('clear');
const displayableButtons = Array.from(document.getElementsByTagName('button'));

const signOfOperationRegex = /^[\/\x\-\+\=\%\√]|(x!)$/
const isANumberRegex = /^\d$/

let previous = 0;
let insertedNumber = '0';
let savedOperation = '';


displayableButtons.forEach(element => {
    if(isANumberRegex.test(element.textContent.trim()))
        element.style.backgroundColor = '#690375';

    if(signOfOperationRegex.test(element.textContent.trim()))
        element.style.backgroundColor = '#A59132';
});

onButton.addEventListener('click', function(e) {
    display.textContent = 'Started';
});

clearButton.addEventListener('click', function(e) {
    display.textContent = '0';
})

displayableButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        
        let textContent = button.textContent.trim();

        if(isANumberRegex.test(textContent)) {
            insertedNumber += textContent;
            showOnDisplay(textContent);
        }

        if(signOfOperationRegex.test(textContent)) {

            if(textContent === '=') {
               previous = parseInt(previous);
               insertedNumber = parseInt(insertedNumber);
               let result = operate(previous, insertedNumber, savedOperation);
               showOnDisplay(result, true);
            }

            else {
                previous = insertedNumber;
                insertedNumber = '';
                savedOperation = textContent;
                showOnDisplay(' ' + textContent + ' ');
            }
            
        }
    });
});

function showOnDisplay(element, wholeCancel = false) {
    if(wholeCancel)
        display.textContent = element;
    else 
        display.textContent +=  element;
}

let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let module = (a, b) => a % b;
let factorial = (a) => (a == 1) ? 1 : a * factorial(a - 1);

let operate = function(a, b, operator) {
    let result = 0;

    switch(operator) {
        case '+':
            result = sum(a, b);
        break;

        case '-':
            result = subtract(a, b);
        break;

        case '*':
        case 'x':
            result = multiply(a, b);
        break;

        case '/':
        case ':':
            result = divide(a, b);
        break;

        case '%':
            result = module(a, b);
        break;

        case '!':
            result = factorial(a);
        break;

        default:
            result = -Infinity;
        break;
    }

    return result;
}

