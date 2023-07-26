
console.log(`----------------------Assignment 1 ------------------------`);
console.log(`----------------------Step 1.1 ------------------------`);

var squareOfWordLength = function (word)
{
    console.log(`Given String is : "${word}"`);
    var word = word.split("");
    var squareOfWordLength = word.length;
     console.log(`Total Character is : ${word}`);
     return squareOfWordLength;
}
var result = squareOfWordLength("JavaScript");
console.log(`Total length count is: ${result}`);
var result1 = result * result;
console.log(`Square of Length ${result1}`);
console.log(`__________________________________________________`);
var result = squareOfWordLength("Google Chrome");
console.log(`Total length count is: ${result}`);
var result1 = result * result;
console.log(`Square of Length ${result1}`);
console.log(`__________________________________________________`);
var result = squareOfWordLength("Developer Smart");
console.log(`Total length count is: ${result}`);
var result1 = result * result;
console.log(`Square of Length ${result1}`);

console.log(`----------------------Step 2 ------------------------`);

var FEString = function () {
    console.log(`Given String is : "${str}"`);
    console.log(`Given String length is : "${result}"`);
    console.log(`Total Number of Word in the given string  : "${wordCount}"`);
    console.log(`Devide by Total number of words : ${result1}`);
    console.log(`Multiplication by Total number of words : ${result2}`);
    
}
var str = "I am Angular Developer";
var result = str.length;
var word = str.split(" ");
var wordCount = word.length;
var result1 = result / wordCount;
var result2 = result * wordCount;
FEString();
console.log(`__________________________________________________`);
    



 

