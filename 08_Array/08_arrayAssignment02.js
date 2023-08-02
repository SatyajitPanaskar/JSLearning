console.log(`-------------------Assignment 02 ----------------`);

const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Array element list is : ${arrayNumber}`);

console.log(`--------------Step 1 ------------------`);

let length = arrayNumber.length;
console.log(`The total element available =>`, length);

console.log(`--------------Step 2 ------------------`);

let firstElement = arrayNumber[0];
let lastElement = arrayNumber[arrayNumber.length-1];
console.log(`The first element is => "${firstElement}" and The Last element is => "${lastElement}"`);

console.log(`--------------Step 3 ------------------`);

let thirdLastElement = arrayNumber[arrayNumber.length - 3];
console.log(`The Last Third Last element => "${thirdLastElement}"`);

console.log(`--------------Step 4 ------------------`); 
// find the all EVEN numbers using for loop and log on consol.
const arrayNumber1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var numSpace = [];
for (let index = 0; index < arrayNumber1.length; index++)
{
    const element = arrayNumber1[index];
    
    if (element % 2 == 0)
    {
        numSpace.push(element);
        
    }
}
console.log(`All the Even Numbers =>`, numSpace);


console.log(`--------------Step 5 ------------------`);
// find the all ODD numbers using for loop and log on consol.
const arrayNumber2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var numSpace = [];
for (let index = 0; index < arrayNumber2.length; index++)
{
    const element = arrayNumber2[index];
    
    if (element % 2 == 1)
    {
        numSpace.push(element);
        
    }
}
console.log(`All the Odd Numbers =>`, numSpace);

console.log(`--------------Step 6 ------------------`);
// find all the even positioned element from arraynumber , sum it and log on consol.
numSpace = [];
let temp = 0;
for (let index = 0; index < arrayNumber.length; index=index+2)
{
    const element = arrayNumber[index];
    temp = element + temp;
    numSpace.push(temp);

}
console.log(arrayNumber);
//console.log(numSpace);
//temp = numSpace + temp;
console.log(`All even positioned element sum =>`, temp);


console.log(`--------------Step 7 ------------------`);
// find all the ODD positioned element from arraynumber , sum it and log on consol.
numSpace = [];
let temp1 = 0;
for (let index = 1; index < arrayNumber.length; index=index+2)
{
    const element = arrayNumber[index];
    temp1 = element + temp1;
    numSpace.push(temp1);

}
console.log(arrayNumber);
//console.log(numSpace);
//temp = numSpace + temp;
console.log(`All even positioned element sum =>`, temp1);


console.log(`--------------Step 8 ------------------`);
// find sum of all element from arraynumber and log on consol.
numSpace = [];
let temp2 = 0;
for (let index = 0; index < arrayNumber.length; index++)
{
    const element = arrayNumber[index];
    temp2 = element + temp2;
    numSpace.push(temp2);

}
console.log(arrayNumber);
//console.log(numSpace);
//temp = numSpace + temp;
console.log(`The sum of all array element  =>`, temp2);



console.log(`--------------Step 9 ------------------`);
// find the number  which are multiple of 5

var numSpace = [];
for (let index = 0; index < arrayNumber.length; index++)
{
    const element = arrayNumber[index];
    
    if (element % 5 == 0)
    {
        numSpace.push(element);
        
    }
}
console.log(` The Number Which are multiple of 5 =>`, numSpace);

console.log(`--------------Step 10  ------------------`);

// The number 115 available in arrayNumber ?

let checkNum = arrayNumber.includes(115);
console.log(`The number 115 available => `,checkNum);

console.log(`--------------Step 11  ------------------`);

// The number 23 available in arrayNumber ?
let checkNum1 = arrayNumber.includes(23);
console.log(`The number 23 available =>`, checkNum1);

console.log(`--------------Step 12  ------------------`);
// Insert number -> 55,66 before index 3 and log array on console .

console.log(arrayNumber);
let addNum = arrayNumber.splice(3, 0, 55, 66);
console.log(`Insert number -> 55,66 before index 3 =>`);
console.log(arrayNumber);

console.log(`--------------Step 13  ------------------`);
// Delete 3 element starting from index 4 and log arrayNumer on cosole.

console.log(arrayNumber);
let dltnum = arrayNumber.splice(0, 3);
console.log(`Delete 3 element Starting from index 4 =>`);
console.log(arrayNumber);

