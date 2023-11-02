import { Greeter } from './utils/index'
import { DataProcessor } from './api'

/**
 * 
 * This function returns the sum of two numbers
 * 
 * @param a first number
 * @param b second number
 * @returns a total of two numbers
 */
export function mySum(a: number, b: number) {
    return b + a;
}

/**
 * 
 * This function returns the sum of three numbers, and one number is optional.
 * 
 * @returns a total of two numbers
 */
export let calTotal: (a: number, b: number, c?: number) => number;
calTotal = (num1: number, num2: number) => {
    return num1 + num2
}

calTotal(mySum(5,5), 20)

const greet = new Greeter()
greet.greet()
greet.greetNewUser("John")
greet.greet()

// Usage
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd';
const dataProcessor = new DataProcessor(apiUrl);

dataProcessor.fetchBitcoinCashPrice()
  .then((price: any) => {
    if (price !== null) {
      console.log(`Bitcoin Cash Price in USD: ${price}`);
    } else {
      console.log('Failed to fetch the price.');
    }
  });