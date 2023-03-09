// let firstNumber = +prompt("Enter first number", '');
// let secondNumber = +prompt("Enter second number", '');
// let thirdNumber = +prompt("Enter third number", '');

// let average = (firstNumber + secondNumber + thirdNumber) / 3;

// alert(`Average number = ${average}`);

///////////////

// if (firstNumber == '') {
//     countOfNumbers = countOfNumbers - 1;
//     firstNumber = 0;
// } else countOfNumbers = arrNumbers.length;
// console.log(countOfNumbers)

// if (secondNumber === NaN, '', undefined, null) {
//     countOfNumbers = countOfNumbers - 1;
//     secondNumber = 0;
// } else countOfNumbers = arrNumbers.length;

// if (thirdNumber === NaN, '', undefined, null) {
//     countOfNumbers = countOfNumbers - 1;
//     secondNumber = 0;
// } else countOfNumbers = arrNumbers.length;


let firstNumber = +prompt("Enter first number", '');
let secondNumber = +prompt("Enter second number", '');
let thirdNumber = +prompt("Enter third number", '');

let arrNumbers = [firstNumber, secondNumber, thirdNumber];
let countOfNumbers = arrNumbers.length;

let average = (firstNumber + secondNumber + thirdNumber) / countOfNumbers;
alert(`Average number = ${average}`);
