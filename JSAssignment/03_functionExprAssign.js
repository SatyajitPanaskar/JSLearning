console.log(`------------------------Assignment 1 ------------------------------`);
console.log(`------------------------Step 1------------------------------`);

var square = function(num){
    var result = num * num;
    console.log(`The Square of 5 is => ${result1}`);
    console.log(`The Square of 6 is => ${result2}`);
    console.log(`The Square of 25 is => ${result3}`);
    console.log(`The Square of 100 is => ${result4}`);
    console.log(`The Square of 67.89 is => ${result5}`);
    console.log(`The Square of 59 is => ${result6}`);

}

var num1 = 5;
var result1 = num1 * num1;
var num2 = 6;
result2 = num2 * num2;
var num3 = 25;
var result3 = num3 * num3;
var num4 = 100;
var result4 = num4 * num4;
var num5 = 67.89;
var result5 = num5 * num5;
var num6= 59;
var result6 = num6 * num6;
square();
console.log(`------------------------Step 2------------------------------`);
console.log(`Type of function => `, typeof square);
console.log(`------------------------Step 3------------------------------`);
var length = 499;
var width = 917;
var result = length * width;
console.log(`The Area of rectangle is => ${result}`);

console.log(`------------------------Step 4------------------------------`);
var swapValues = function (arg1, arg2) {
    console.log(`Before Swapping the Values Are => ${arg1} And ${arg2}`);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
   
    console.log(`After Swapping the Values Are => ${arg1} And ${arg2}`);
    return res;
   
   
}

var res = swapValues("Mahi", "Raina");
var res = swapValues(55, 77);

console.log(`------------------------Step 5------------------------------`);

var strFunction = function () {
    console.log(`The givan Staring is => ${str}`);
    console.log(`Total Character available in string => ${result}`);
     console.log(`Character at index 6 => ${result1}`);
    console.log(`Character at index 11 => ${result2}`);
    console.log(`Last Character of given string => ${result3}`);
    console.log(`First Character of given string => ${result4}`);
    console.log(`Third last Character of given string => ${result5}`);
    console.log(`Total Number of Word in the given string => ${word} And Square of word is => ${result7}`);
   
}
var str = "JS The Most Popular language of internet";
var result = str.length;
var result1 = str.charAt(6);
var result2 = str.charAt(11);
var result3 = str.charAt(result-1);
var result4 = str.charAt(0);
var result5 = str.charAt(result-3);
var result6 = str.split(" ");
var word = result6.length;
var result7 = word * word;

strFunction();