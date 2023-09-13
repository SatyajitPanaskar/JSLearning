// const e = require("express");

// function sumOfNumbers(num){

//     const numStr = num.toString();

//     let sum=0;

//     for (let i = 0; i < numStr.length; i++) {
       
//         const sepDegit = parseInt(numStr[i], 10);
//         sum += sepDegit;
//     }

//     return `The Addition of the Given Numbers ${num} => ${numStr.split('').join('+')} = ${sum}`
// }

// const num = 12345;
// const result = sumOfNumbers(num);
// console.log(result);

console.log(`---------------------------------------------------------------`);

function longestWord(str) {
    var word = str.split(" ");
    var longWord = "";
    var longLength = 0;
  
    for (let i = 0; i < word.length; i++) {
      const element = word[i];
  
      const seperateWord = element.replace(/[^a-zA-Z0-9]/g, "");
  
      if (seperateWord.length > longLength) {
        longWord = seperateWord;
        longLength = seperateWord.length;
      }
    }
  
    return longWord;
  }
  
  var str = "I am JavaScript developer";
  var inputStr = longestWord(str);
  
  console.log(`The longest word in given string is : ${inputStr} `);