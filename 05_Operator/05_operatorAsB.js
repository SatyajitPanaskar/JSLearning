console.log(`---------------------------------Assignment 2---------------------------`);
console.log(`----------------------------Step 1 -------------------------------`);

var greaterNumber = function (num1, num2) {
    var result = num1 >= num2 ? num1 : num2;
    console.log(`Greater  Number between "${num1}" and "${num2}" is : ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`----------------------------Step 2-------------------------------`);

var isEvenOrOddNum = function (arg1)
{
    var result = arg1 % 2 == 0;
    
    console.log(`Check The number Even or ODD "${arg1}" : ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
isEvenOrOddNum(-36);

console.log(`----------------------------Step 3-------------------------------`);

var wordLength = function (arg1)
{   
    var wordLength = arg1.length;
    var result = wordLength    % 2 == 0 ? "EVEN" : "ODD";
    console.log(` length of "${arg1}" is : ${wordLength} and The String Is : ${result}`);
    
}
wordLength("Javascript");
wordLength("Developer");
wordLength("Google");