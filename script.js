// Solving FizzBuzz
// Write a program that takes a user's input and prints the numbers from one to the number the user entered. However, for multiples of three print fizz instead of the number and for the multiples of fives print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// Plan
// allowing user to enter number.
// Prompt
// list of numbers 1 to the number that we enter
// 3 = Fizz
// 5 = Buzz
// 15 = FizzBuzz

//Pseudocode
// 1. When a user inputs a number.
// 2. Loop from 1 to the entered number.
// 3. If the current number is divisible by 3 then print "Fizz"
// 4. If the current number is divisible by 5 then print "Buzz"
// 5. If the current number is divisible by 3 and 5 , then print "FizzBuzz"
// 6. If no divisible for both numbers, then print only the numbers.



let input = prompt('Enter your chosen number to "FizzBuzz": ')

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log ("Fizz");
    } else if (i % 5 === 0) {
        console.log ("Buzz");
    } else {
        console.log(i);
    }
}