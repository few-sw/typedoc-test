import { Greeter } from './utils'

function mySum(a: number, b: number) {
    return b + a;
}

let calTotal: (a: number, b: number, c?: number) => number;
calTotal = (num1: number, num2: number) => {
    return num1 + num2
}

calTotal(mySum(5,5), 20)

const greet = new Greeter()
greet.greet()
greet.greetNewUser("John")
greet.greet()