let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

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
            result = multiply(a, b);
        break;

        case '/':
        case ':':
            result = divide(a, b);
        break;

        default:
            result = -Infinity;
        break;
    }

    return result;
}