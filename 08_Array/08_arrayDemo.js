/*console.log(`----------Practice Array Demo --------`);
var arrayDemo = [12, 34, 54, 67, 49, 42, 57, 54, 47, 42, 12];
console.log(`Array list is :`, arrayDemo); 
      
console.log(`--------Array length------`);
var result = arrayDemo.length;
console.log(`Array length is : "${result}"`);
console.log(`---------Using for loop in array-------`);
*/
console.log(`---Remove duplicate element from array using for loop-----`);
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
console.log(`---Orginal Array :`,array);
let duplicateElement = [];
let temp = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!duplicateElement.includes(element))
    {
        duplicateElement.push(element);
    }    
}
console.log("----Array after removing duplicate number--------");
console.log(duplicateElement);

/*
console.log(`---Remove duplicate element from array using for loop-----`);
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
console.log(`---Orginal Array :`,array);
let dupicateEle = [];
var find = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    find = array.indexOf(element);
    index++;
    if (find !== -1 && dupicateEle !== -1)
    {
        dupicateEle.push(element);
    }
    
} console.log("----Array after removing duplicate number--------");
console.log(dupicateEle);


var arrayDemo = [12, 34, 54, 67, 49, 42, 57, 54, 47, 42, 12];
var duplicateArray = [];

for (var i = 0; i < arrayDemo.length; i++) {
  var element = arrayDemo[i];
  var foundIndex = arrayDemo.indexOf(element, i + 1);

  if (foundIndex !== -1 && duplicateArray.indexOf(element) === -1) {
    duplicateArray.push(element);
  }
}

console.log("Duplicate Array:", duplicateArray);


console.log(`--------includes() method--------`);
console.log(`if check wether the array contains the given value or not`);

const demoArray = [23, 45, 65, 33, 2, 45, 4, 5, 6, 6, 6, 66, 7, 77, 77];

var checkNum = demoArray.includes(45);
console.log(` check value or not => ${checkNum}`);
var checkNum1 = demoArray.includes(65);
console.log(` check value or not => ${checkNum1}`);
var checkNum = demoArray.includes(405);
console.log(` check value or not => ${checkNum}`);

console.log(`--------IndexOf() method-----`);
console.log(`The index of method returns the index of the first occurrence 
of the substring or element that we siecify that argument`);

var indexOFArray = demoArray.indexOf(77);
console.log(`Index of given address :${indexOFArray}`);

console.log(`---------traverse the array in revrse order------`);

for (let index = demoArray.length-1; index >=0; index--) {
    const element = demoArray[index];
    console.log(element);
}
console.log(`------USing for of loop-----`);
for (const element of demoArray)
{
    console.log(element);
}
console.log(`-------using join() method-------`);

console.log(demoArray.join("|"));

console.log(`-------using spread operator-------`);
console.log(demoArray);
console.log(...demoArray);

*/
