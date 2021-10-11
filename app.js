console.log("Hello, world!")

function sum(a, b){
    if (Number.isInteger(a) && Number.isInteger(b)){
        return a + b
    }
    return null
}

function subtract(a, b){
    if (Number.isInteger(a) && Number.isInteger(b)){
        return a - b
    }
    return null
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

let a = 5
let b = 8
console.log(`${a} + ${b} = ${sum(a,b)}`)
console.log(`${a} - ${b} = ${subtract(a,b)}`)
console.log(`${a} * ${b} = ${multiply(a,b)}`)
console.log(`${a} / ${b} = ${divide(a,b)}`)
