console.log("--------------String---------------------");
var str = "Good Morning Rushi panaskar Dude";
console.log(str);

console.log("-------------- 1 Using Length Property---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.length;
console.log(`Length of String is ${result}`);

console.log("-------------- 2 Using charAt() method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.charAt(6);
console.log(`char at 6th index is => ${result}`);
var result = str.length;
var lastIndex = str.charAt(result-4);
console.log(`last char is => ${lastIndex}`);

console.log("--------------3 Using concat() method---------------------");
var str1 = "Rushi Panaskar";
var str2 = "Good Morning Dude";
var result = str1 + str2;
console.log(`Concat Two String is => ${result}`);
var result = str1.concat(str2);
console.log(`Using Concat method => ${result}`);

console.log("-------------- 4 Using indexOf() Method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.indexOf("Rushi");
console.log(`Index of Rushi => ${result}`);

console.log("--------------5 String lastIndexOf() Method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.lastIndexOf("u");
console.log(`Last IndexOF Dude => ${result}`);

console.log("--------------6 String toLowerCase() Method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.toLowerCase();
console.log(`String lower case => ${result}`);

console.log("--------------7 String toUpperCase() Method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.toUpperCase();
console.log(`String Upper Case => ${result}`);

console.log("-------------- 8String slice(beginIndex, endIndex) Method---------------------");
var Str = "Good Morning Rushi panaskar Dude";
var result = str.slice(13, 18);
console.log(`String slice is => ${result}`);

console.log("--------------9 String trim() Method---------------------");
var str = "  Good Morning Rushi panaskar Dude   ";
var result = str.trim();
console.log(`trim string => ${result}`);
var result = str.trimStart();
console.log(`strat trim String => ${result}`);
var result = str.trimEnd();
console.log(`End trim String => ${result}`);

console.log("--------------10 String split() Method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.split();
console.log(`Split the string => ${result}`);

console.log("--------------11 String replace() Method---------------------");
var str = "Good Morning Rushi panaskar Dude";
var result = str.replace("Rushi","Satyajit");
console.log(`Replace String => ${result}`);

console.log("--------------11 String replace() Method---------------------");