const display = document.getElementById('display');
const onButton = document.getElementById('on');
const clearButton = document.getElementById('clear');
const cancelButton = document.getElementById('cancel');
const displayableButtons = Array.from(document.getElementsByTagName('button'));

const signOfOperationRegex = /^[\/\x\-\+\=\%\√]|(x!)$/
const isANumberRegex = /^\d$/


displayableButtons.forEach(element => {
    if(isANumberRegex.test(element.textContent.trim()))
        element.style.backgroundColor = '#690375';

    if(signOfOperationRegex.test(element.textContent.trim()))
        element.style.backgroundColor = 'rgb(205 181 69)';
});




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

