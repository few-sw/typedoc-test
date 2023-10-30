import { Greeter } from './utils'

/**
 * 
 * This function returns the sum of two numbers
 * 
 * @param a first number
 * @param b second number
 * @returns a total of two numbers
 */
function mySum(a: number, b: number) {
    return b + a;
}

/**
 * 
 * This function returns the sum of three numbers, and one number is optional.
 * 
 * @returns a total of two numbers
 */
let calTotal: (a: number, b: number, c?: number) => number;
calTotal = (num1: number, num2: number) => {
    return num1 + num2
}

calTotal(mySum(5,5), 20)

const greet = new Greeter()
greet.greet()
greet.greetNewUser("John")
greet.greet()