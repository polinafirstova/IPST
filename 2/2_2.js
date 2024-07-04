let num1 = 0
let num2 = 1

console.log(num1)
console.log(num2)

fibonacci(num1, num2)

function fibonacci(num1, num2) {
    if (num1 + num2 <= 200) {
        console.log(num1 + num2)
        fibonacci(num2, num1 + num2)
    }
}