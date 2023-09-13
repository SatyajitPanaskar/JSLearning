console.log(`------------ Set Demo ------------`);

console.log(`---set is a collection of unique element`);


let mySet = new Set();
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(7);
mySet.add(8);
mySet.add(6);
console.log(`Print the  array set =>`, mySet);
console.log(`-------------------------------------------------------------------`);
console.log(`--------has-has method are used to check the given values is present or not`);
let isAvailable = mySet.has(6);
console.log(`"6 " value is available: "${isAvailable}"`);
console.log(`-------------------`);
let isAvailable1 = mySet.has(9);
console.log(`"9"  value is available: "${isAvailable1}"`);
console.log(`-----------------------------------------------------------------------`);

console.log(`set size is: "${mySet.size}"`);

let array = [1, 5, 3, 6, 8, 8, 5, 4, 6];
let newSet = new Set();

for (const element of array)
{
    newSet.add(element);

}
console.log(array);
console.log(newSet);

console.log(`-----------------------------------------------------------------------`);

console.log(`------Using Spread oprator-----`);
console.log(`-------Removing duplicate element array----`);
var arrayNew = [1, 3, 5, 8, 2, 4, 6, 7, 5, 6, 4];
var arrayNew = [...new Set(arrayNew)];
console.log(arrayNew);
