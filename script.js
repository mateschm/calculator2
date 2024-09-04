function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;  
}

function divide(a, b) {
    if (b === 0) {
        return `ERROR`
    } else {
        return a / b;
    }
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case `+`:
            if (add(operand1, operand2).toString().length > 11) {
                return `ERROR`;
            } else {
                return add(operand1, operand2);
            }
        case `-`:
            if (substract(operand1, operand2).toString().length > 11) {
                return `ERROR`;
            } else {
                return substract(operand1, operand2);
            }
        case `*`:
            if (multiply(operand1, operand2).toString().length > 11) {
                return `ERROR`;
            } else {
                return multiply(operand1, operand2);
            };
        case `/`:
            if (divide(operand1, operand2).toString().length > 11) {
                return `ERROR`;
            } else {
                return divide(operand1, operand2);
            };
    }
}

const display = document.querySelector('.display')

let buttons = document.querySelector('.buttons');

let number1 = ``;
let number2 = ``;
let symbol = ``;
let symbolPressed;

buttons.addEventListener('click', (event) => {
    let target = event.target.innerText;

    switch (target) {
        case `=`: 
            if (number1 && symbol) {
                number2 = Number(display.innerText);
                display.innerText = operate(number1, symbol, number2);
                symbol = ``
                number1 = operate(number1, symbol, number2);
                break;
            } else {
                break;
            }
        case `C`:
            display.innerText = `0`;
            symbolPressed = false;
            number1 = ``;
            number2 = ``;
            break;
        case `0`:
            if (display.innerText.startsWith(`0.`) && display.innerText.length < 11) {
                display.innerText += target;
                break;
            } else if (symbolPressed && display.innerText.length < 11) {
                display.innerText = ``;
                display.innerText += target;
                symbolPressed = false;
                break;
            } else if (display.innerText.startsWith(`0`)) {
                break;
            } else if (display.innerText.length < 11) {
                display.innerText += target;
                break;
            }
        case `.`:
            if (display.innerText.includes(`.`)) {
                break;
            } else if (display.innerText.length < 11){
                display.innerText += target;
                break;
            }
        case `⌫`:
            if (display.innerText === `0`) {
                break;
            } else {
                if (display.innerText.length === 1) {
                    display.innerText = `0`;
                    break;
                } else { 
                display.innerText = display.innerText.substring(0, display.innerText.length-1);
                break;
                }
            }
        case `+`: 
            symbolPressed = true;
            if (number1) {
                number2 = Number(display.innerText);
                display.innerText = operate(number1, symbol, number2);
                number1 = operate(number1, symbol, number2);
                symbol = `+`
                number2 = ``;
                break;
            } else { 
                number1 = Number(display.innerText);
                symbol = `+`;
                break;
            }
        case `-`: 
            symbolPressed = true;
            if (number1) {
                number2 = Number(display.innerText);
                display.innerText = operate(number1, symbol, number2);
                number1 = operate(number1, symbol, number2);
                number2 = ``;
                symbol = `-`;
                break;
            } else { 
                number1 = Number(display.innerText);
                symbol = `-`;
                break;
            }
        
        case `*`: 
            symbolPressed = true;
            if (number1) {
                
                number2 = Number(display.innerText);
                display.innerText = operate(number1, symbol, number2);
                number1 = operate(number1, symbol, number2);
                number2 = ``;
                symbol = `*`;
                break;
            } else { 
            number1 = Number(display.innerText);
            symbol = `*`;
            break;
            }
        
        case `/`: 
            symbolPressed = true;
            if (number1) {
                number2 = Number(display.innerText);
                display.innerText = operate(number1, symbol, number2);
                number1 = operate(number1, symbol, number2);
                number2 = ``;
                symbol = `/`;
                break;
            } else { 
            number1 = Number(display.innerText);
            symbol = `/`;
            break;
            }
        default:
            if (symbolPressed) {
                display.innerText = ``;
                display.innerText += target;
                symbolPressed = false;
                break;
            } else if (display.innerText.startsWith(`0`)){
                if (display.innerText.startsWith(`0.`) && display.innerText.length < 11) {
                    display.innerText += target;
                    break;
                } else {
                    display.innerText = ``;
                    display.innerText += target;
                    break;
                }
            } else if (display.innerText.length < 11) {
                display.innerText += target;
                break;
            }
    } 
});