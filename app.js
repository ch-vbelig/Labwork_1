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
    if (Number.isInteger(a) && Number.isInteger(b)){
        return a * b
    }
    return null
}

function divide(a, b){
    if (Number.isInteger(a) && Number.isInteger(b)){
        return a / b
    }
    return null
}

let a = 5
let b = 8

if (sum(a,b) !== null){
    console.log(`${a} + ${b} = ${sum(a,b)}`)
    console.log(`${a} - ${b} = ${subtract(a,b)}`)
    console.log(`${a} * ${b} = ${multiply(a,b)}`)
    console.log(`${a} / ${b} = ${divide(a,b)}`)
}
