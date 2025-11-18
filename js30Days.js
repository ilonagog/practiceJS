// 1.  2667. Create Hello World Function: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// function createHelloWorld() {
//   return function () {
//     return "Hello World";
//   };
// }
// const result = createHelloWorld();
// console.log(result());

// 2 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// function createCounter(n) {
//   return function () {
//     return n++;
//   };
// }

// 3. 2704. To Be Or Not To Be
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// function expect (val){
//     return {
//         toBe: function (otherVal){
//             if (val === otherVal){
//                 return true;
//             }else{
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: function(otherVal){
//             if (val !== otherVal){
//                 return true;
//             }else{
//                 throw new Error("Equal");
//             }
//         }
//     };
// }

// 4 2665. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// function createCounter(init){
//     let value = init
//     return {
//         increment: function (){
//             return ++value;
//         },
//         decrement: function (){
//             return --value;
//         },
//         reset: function (){
//             value = init;
//             return value;
//         },
//     };
// };
