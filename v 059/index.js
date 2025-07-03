console.log("Exercise 9 : ")
console.log("Faulty Calculator : ")

let r = Math.random();
console.log(r)

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function expo(a, b) {
    return a ** b;
}

let p = 2
let q = 3

if(r >= 0.1) {
    console.log("Sum : " + sum(p, q))
    console.log("Difference : " + subtract(p, q))
    console.log("Multiplication : " + multiply(p, q))
    console.log("Division : " + divide(p, q))
}
else {
    console.log("Sum : " + subtract(p, q))
    console.log("Difference : " + divide(p, q))
    console.log("Multiplication : " + sum(p, q))
    console.log("Division : " + expo(p, q))
}