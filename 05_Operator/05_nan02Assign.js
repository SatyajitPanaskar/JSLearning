console.log(`----------------------Implicit Conversion----------------`);
console.log(`----------------------Implicit Conversion to String----------------`);
// console.log(`----------------------"// number string used with + gives string type"----------------`);
console.log(`-----------------------example 1-----------------------`);
var result = '3' + 2;
console.log(`Result is "${result}"`);
console.log(`because their is implicit conversion from String value is '3' to number '2' that why the result is "${result}"`);

console.log(`-----------------------example 2-----------------------`);

var result = '3' + true;
console.log(result);
console.log(`because their is implicit conversion from boolean value true to string 'true' that why the result is "${result}"`);

console.log(`-----------------------example 3-----------------------`);
var result = '3' + undefined;
console.log(result);
console.log(`because their is implicit conversion from String value is '3' to 'undefine' that why the result is "${result}"`);

console.log(`-----------------------example 4-----------------------`);
var result = '3'+null;
console.log(result);
console.log(`because their is implicit conversion from String value is '3' to 'null' that why the result is "${result}"`);

console.log(`----------------------Implicit boolean Conversion to Number----------------`);
// console.log(`----------------------"// if boolean is used, true is 1, false is 0 "----------------`);
console.log(`-----------------------example 1-----------------------`);
var result = '4'- true;
console.log(result);
console.log(`because their is implicit conversion from boolean value true is '1' to string '3' that why the result is "${result}"`);

console.log(`-----------------------example 2-----------------------`);
var result = 4 + true;
console.log(result);
console.log(`because their is implicit conversion from boolean value true is '1' to number '5' that why the result is "${result}"`);


console.log(`-----------------------example 3-----------------------`);
var result = 4 + false;
console.log(result);
console.log(`because their is implicit conversion from boolean value false is '0' to number '4' that why the result is "${result}"`);


console.log(`----------------------Implicit String Conversion to Number----------------`);
// console.log(`----------------------"// numeric string used with -,/,* result number type"----------------`);
console.log(`-----------------------example 1-----------------------`);
var result = '4' -'2';
console.log(result);
console.log(`because their is implicit conversion from string value is '4' to number addition '2' that why the result is "${result}"`);
console.log(`-----------------------example 2-----------------------`);
var result = '4' - 2;
console.log(result);
console.log(`because their is implicit conversion from string value is '4' to number subtraction '2' that why the result is "${result}"`);
console.log(`-----------------------example 3-----------------------`);
var result = '4' * 2;
console.log(result);
console.log(`because their is implicit conversion from string value is '4'to number multiplication '2' that why the result is "${result}" `);
console.log(`-----------------------example 4-----------------------`);
var result = '4' / 2;
console.log(result);
console.log(`because their is implicit conversion from string value is '4' to number division '2' that why the result is "${result}" `);


console.log(`-----------------------Assignment 2-----------------------`);
console.log(`-----------------------example 1-----------------------`);
var result = 0 == '';
console.log(result);
console.log(`because their is implicit conversion from string value is 'empty' to number equal '0' that why the result is boolean value "${result}" `);
var result1 = 0 === '';
console.log(result1);
console.log(`because their is implicit conversion from string value is 'empty' to number strict equal '0' that why the result is boolean value "${result1}" `);

console.log(`-----------------------example 2-----------------------`);
var result = 0 == '0';
console.log(result);
console.log(`because their is implicit conversion from string value is 'zero' to number equal '0' that why the result is boolean value "${result}" `);
var result = 0 === '0';
console.log(result);
console.log(`because their is implicit conversion from string value is 'zero' to number strict equal '0' that why the result is boolean value "${result}" `);


console.log(`-----------------------example 3-----------------------`);
var result = 0 == false;
console.log(result);
console.log(`because their is implicit conversion from bolean value is 'false'  to number equal '0' that why the result is boolean value "${result}" `);
var result = 0 === false;
console.log(result);
console.log(`because their is implicit conversion from bolean value is 'false'  to number strict equal '0' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 4-----------------------`);
var result = null == undefined;
console.log(result);
console.log(`because their is implicit conversion from value is 'null' to number equal 'undefine' that why the result is boolean value "${result}" `);
var result = null === undefined;
console.log(result);
console.log(`because their is implicit conversion from value is 'null' to number strict equal 'undefine' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 4-----------------------`);
var result = 1 == [1];
console.log(result);
console.log(`because their is implicit conversion from number value is '[1]' to number equal '1' that why the result is boolean value "${result}" `);
var result = 1 === [1];
console.log(result);
console.log(`because their is implicit conversion from number value is '[1]' to number strict equal '1' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 5-----------------------`);
var result = 1 == true;
console.log(result);
console.log(`because their is implicit conversion from number value is '1' to equal boolean value is 'true' that why the result is boolean value "${result}" `);
var result = 1 === true;
console.log(result);
console.log(`because their is implicit conversion from number value is '1' to strict equal boolean value is 'true' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 6-----------------------`);
var result = 1 == '1';
console.log(result);
console.log(`because their is implicit conversion from string value is '1' to number equal '1' that why the result is boolean value "${result}" `);
var result = 1 === '1';
console.log(result);
console.log(`because their is implicit conversion from string value is '1' to number strict equal '1' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 7-----------------------`);
var result = 1 == 1;
console.log(result);
console.log(`because their is implicit conversion from string value is '1' to number equal '1' that why the result is boolean value "${result}" `);
var result = 1 === 1;
console.log(result);
console.log(`because their is implicit conversion from string value is '1' to number strict equal '1' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 8-----------------------`);
var result = null ===null;
console.log(result);
console.log(`because their is implicit conversion from value is 'null' to number equal 'undefine' that why the result is boolean value "${result}" `);
var result = null ===  null;
console.log(result);
console.log(`because their is implicit conversion from value is 'null' to number strict equal 'undefine' that why the result is boolean value "${result}" `);

console.log(`-----------------------example 9-----------------------`);
var result = true == true;
console.log(result);
console.log(`because their is implicit conversion from boolean value is 'true' to equal boolean value is 'true' that why the result is boolean value "${result}" `);
var result = true === true;
console.log(result);
console.log(`because their is implicit conversion from boolean  value is 'true' to strict equal boolean value is 'true' that why the result is boolean value "${result}" `);
