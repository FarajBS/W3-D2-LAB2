let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 20, 40];

// Q1
let result1 = numbers.sort()
console.log(result1);

// =========================================================================================================================================== //

// Q2
let result2 = numbers.map((element) => element ** 2);
console.log(result2);

// =========================================================================================================================================== //

// Q3
let result3 = numbers.find((element) => element > 25);
console.log(result3);

// =========================================================================================================================================== //

// Q4
let result4 = numbers.filter((element) => element > 5);
console.log(result4);

// =========================================================================================================================================== //

// Q5
let result5 = numbers.includes(3);
console.log(result5);

// =========================================================================================================================================== //

// Q6
let result6 = numbers.filter((element) => element % 2 == 0);
console.log(result6);

// =========================================================================================================================================== //

// Q7
let numLen  = numbers.length;  // = 12
let result7 = numbers.slice(6, 7)
console.log(result7);

// =========================================================================================================================================== //

// Q7
let result8 = numbers.slice(6, 8)
console.log(result8);

// =========================================================================================================================================== //

// Q9
let result9 = numbers.filter((element) => element +=  element * element);
console.log(result9);

// =========================================================================================================================================== //
// Q10
let resultFind  = numbers.find((element) => (element > 5));
let result10    = numbers.indexOf(resultFind);
console.log(result10);

// =========================================================================================================================================== //

// Q11

let result11 = numbers.pop();
console.log(numbers);

// =========================================================================================================================================== //

// Q12
let result12 = numbers.push(100);
console.log(numbers);

// =========================================================================================================================================== //

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Q13


let result13A = names.filter((element) => element.startsWith("A"));
console.log(result13A);

let result13B = names.join('-');
console.log(result13B);

// =========================================================================================================================================== //

let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];

// Q13

let result14A = fruits.startsWith("b");
console.log(result14A);

let result14B = fruits.push("yellow");
console.log(fruits);

// =========================================================================================================================================== //

let words = ['hello', 'world', 'javascript', 'array', 'function'];

// Q15

// let result15A = 

let result15B = words.includes("javascript");

// =========================================================================================================================================== //

                                                                // Functions Lab //

// For Sum
function sum(num1, num2) {
    return num1 + num2;
};

let funSum = sum(5, 5);
console.log(funSum);

// =========================================================================================================================================== //

// For Sub
function sub(num1, num2) {
    return num1 - num2;
};

let funSub = sub(10, 5);
console.log(funSub);

// =========================================================================================================================================== //

// For Multiplication
function multiplication(num1, num2) {
    return num1 * num2;
};

let funMultiplication = multiplication(5, 5);
console.log(funMultiplication);

// =========================================================================================================================================== //

// For Division
function divison(num1, num2) {
    return num1 / num2;
};

let funDivision = divison(25, 5);
console.log(funDivision);

// =========================================================================================================================================== //

// For Remainder Of Division
function remainderOfDivision(num1, num2) {
    return num1 % num2;
};

let funRemainderOfDivision = remainderOfDivision(10, 2);
console.log(funRemainderOfDivision);