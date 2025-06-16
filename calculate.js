const math = require("./math")
const prompt = require("prompt-sync")()

let n = prompt("enter no :")
console.log(`factorial of 5 is ${math.factorial(n)}`)
let a = parseInt(prompt("enter first no "))
let b = parseInt( prompt("enter second no "))
let c = parseInt( prompt("enter third no "))
console.log(`sum of ${a} and ${b} is ${math.sum(a,b)}`)
console.log(`sum of ${a} ,${b}and ${c} is ${math.sumofthree(a,b,c)}`)
// console.log(`sum of 12,14 and 15 is ${math.sumofthree(12,14,15)}`)

