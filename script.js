const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll('.operator');
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';


const updateScreen = (number) => {
    calculatorScreen.value = number;
}


const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
        console.log('numbrr');
    });
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+': 
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case '-':
            result = prevNumber - currentNumber;
            break
        case '*': 
            result = prevNumber * currentNumber;
            break
        case '/':
            result = prevNumber / currentNumber;
            break
        default:
            return
    }
    currentNumber = result;
    calculationOperator = '';
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

operator.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
        console.log('opepope');
    });
});


equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    console.log('calculate');
});
    


const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
    console.log('acccaca');
        console.log(target.value);

});
    


inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
    console.log('titik');
    console.log(event.target.value);
});
