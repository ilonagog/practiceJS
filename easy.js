//1
// DESCRIPTION:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

//Answer:
// function neutralise(str1, str2) {
//   if (str1.length !== str2.length) {
//     return "Strings must be the same length";
//   }

//   let result = "";

//   for (i = 0; i < str1.length; i++) {
//     const char1 = str1.charAt(i);
//     const char2 = str2.charAt(i);

//     if (char1 === "+" && char2 === "+") {
//       result += "+";
//     } else if (char1 === "-" && char2 === "-") {
//       result += "-";
//     } else {
//       result += "0";
//     }
//   }
//   return result;
// }
// const result = neutralise("++-+", "--+-");
// console.log(result);

//2
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//Answer:

function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution("abc", "bc")); //true
console.log(solution("abcde", "de")); //true

//3
//Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

//Answer:

// function flickSwitch(arr){
//     let flickWord = false;
//     const list = arr.map((item)=>{
//       if(item === "flick"){
flickWord = !flickWord;
//         return !flickWord;
//       }else{
//         return flickWord
//       }
//     })
//

//   }
//    const myList =["code", "flick", "data"];
//   const result = flickSwitch(myList);
//   console.log(result)
