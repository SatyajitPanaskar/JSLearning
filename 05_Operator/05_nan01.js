console.log(`-------------------------Not A Number------------------------------`);

console.log(`--------------------Step 1 -----------------------`);

var num1 = 0;
var num2 = 0;
var result = num1 / num2;
console.log(`Result is "${result}" and typeOf Operator is "${typeof result}"`);

console.log(`--------------------Step 2 -----------------------`);
var num3 = 100;
console.log(num3, typeof num3);
var result = +num3;
console.log(`Result is "${result}" and typeOf operator is "${typeof result}"`);

console.log(`--------------------Step 3 -----------------------`);

var num4 = "Rushi";
var result = +num4;
console.log(`String is "${num4}" type of result is "${result}" and typeOf operator is "${typeof result}"`);

console.log(`--------------------Step 4 -----------------------`);

var num5 = true;
var result = +num5;
console.log(`String is "${num5}" type of result is "${result}" and typeOf operator is "${typeof result}"`);

console.log(`--------------------Step 5 -----------------------`);

var num6 = 50;
var result = +true;
console.log(`String is "${num6}" type of result is "${result}" and typeOf operator is "${typeof result}"`);

console.log(`--------------------Step 6 -----------------------`);

var num7 = 50;
var result = -true;
console.log(`String is "${num7}" type of result is "${result}" and typeOf operator is "${typeof result}"`);


console.log(`--------------------Step 7 -----------------------`);

var num8 = 50;
var result = +false;
console.log(`String is "${num8}" type of result is "${result}" and typeOf operator is "${typeof result}"`);

console.log(`--------------------Implicit Conversion String -----------------------`);

console.log(`--------------------Step 1 -----------------------`);
var num1 = 20 + "rushi";
var result = +num1;
console.log(`String is "${num1}" type of result is "${result}" and typeOf operator is "${typeof result}"`);


console.log(`--------------------Step 2 -----------------------`);
var num2 = "Rushi" + "rushi";
var result = +num2;
console.log(`String is "${num2}" type of result is "${result}" and typeOf operator is "${typeof result}"`);


console.log(`--------------------Step 3 -----------------------`);
var num3 = 20 + 30;
var result = +num3;
console.log(`String is "${num3}" type of result is "${result}" and typeOf operator is "${typeof result}"`);


console.log(`--------------------Step 4 -----------------------`);
var num4 = 20 + true;

console.log(`String is "${num4}" type of result is "${num4}" and typeOf operator is "${typeof num4}"`);
console.log(`--------------------Same -----------------------`);
var num5 = 20 + true+true;

console.log(`String is "${num5}" type of result is "${num5}" and typeOf operator is "${typeof num5}"`);


console.log(`--------------------Step 5 -----------------------`);
var num6 = 20 - true;

console.log(`String is "${num6}" type of result is "${num6}" and typeOf operator is "${typeof num6}"`);

console.log(`--------------------Step 6 -----------------------`);
var num7 = "rushi" + true;

console.log(`String is "${num7}" type of result is "${num7}" and typeOf operator is "${typeof num7}"`);

console.log(`--------------------Step 7 -----------------------`);
var num8 = "60" + true;

console.log(`String is "${num8}" type of result is "${num8}" and typeOf operator is "${typeof num8}"`);


console.log(`--------------------Explicit Conversion String -----------------------`);
console.log(`--------------------Step 1 -----------------------`);

var num1 = 20;
var result = +num1;
console.log(`String is "${num1}" type of result is "${result}" and typeOf operator is "${typeof result}"`);

console.log(`--------------------Step 2 -----------------------`);

var num1 = 20;
var result = +num1;
console.log(`String is "${num1}" type of result is "${result}" and typeOf operator is "${typeof result}"`);
var result12 = Number(num1);
console.log(`String is "${num1}" type of result is "${result12}" and typeOf operator is "${typeof result12}"`);

console.log(`--------------------Step 3 -----------------------`);

var num2 = "virat";
var result = Number(num2);
console.log(`String is "${num2}" type of result is "${result}" and typeOf operator is "${typeof result}"`);



