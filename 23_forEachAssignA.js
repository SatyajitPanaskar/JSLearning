console.log(`------- Assignemnt A :  using forEach() with arrow function and callback-----------`);

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`1>--log the array element with its index using forEach() with arrow function`);


arrayNumbers.forEach(( index ,element) =>
{
   
    console.log(`Array Element index : ${element}, element =>  ${index}`);
   
});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(` `);
console.log(`2>---find the positive numbers--------`);
const positiveNumbers = [];
arrayNumbers.forEach((element) => {
    if (element >=0)
    {
        positiveNumbers.push(element);
        }
})
console.log("Positive Numbers:", positiveNumbers);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(` `);
console.log(`3>---find the Negative numbers--------`);
const negativeNumber = [];
arrayNumbers.forEach((element1) => {
    if (element1 < 0) {
        negativeNumber.push(element1);
    }
   
});
console.log(`Negative Numbers : [${negativeNumber}]`);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(` `);
console.log(`4>---find the Even Numbers --------`);

const evenNumbers = [];
arrayNumbers.forEach((element) => {
    if (element % 2 == 0) {
        evenNumbers.push(element);
    }
});
console.log(`Even Number : [ ${evenNumbers}]`);


console.log(`------------------------------------------------------------------------------------------------------`);
console.log(` `);
console.log(`5>---find the Sum of all element from arrayNumbers --------`);

let sum = 0;
arrayNumbers.forEach((element) => {
  
    sum = sum + element;

});
console.log(` Sum of all Numbers : [${sum}]`);


console.log(`------------------------------------------------------------------------------------------------------`);
console.log(` `);
console.log(`6>---log the only even index array --------`);


arrayNumbers.forEach((element,index) => {
    if (index % 2 == 0)
    {
    console.log(`Even Index  : ${index} and Value : ${element}`);
  }
   
});

