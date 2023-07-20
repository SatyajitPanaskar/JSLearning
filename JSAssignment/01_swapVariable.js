var sweety = "Sweety";
var cutie = "Cutie";
console.log("Before Swap => ", sweety, cutie);
var temp = sweety;
sweety = cutie;
cutie = temp;
console.log("After Swap => ", sweety, cutie);
console.log("===============================================");

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("before swap => ", num1, num2, num3);
var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("After Swap =>", num1, num2, num3);
console.log("===============================================");

console.log("Using Function......!");
function swap(n1,n2 ,n3)
{
     var temp = n1;
    n1 = n2;
    n2 = n3;
    n3 = temp;
    console.log("Before Swap =>", num1,  "After Swap =>", n1);
    console.log("Before Swap =>" , num2, "After Swap =>",n2 );
    console.log("Before Swap =>", num3, "After Swap =>", n3);
   }
var num1 = 200;
var num2 = 300;
var num3 = 400;
swap(num1, num2, num3);
console.log("===============================================");


