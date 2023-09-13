
console.log(`------Array---------`);

// The Array object, as with arrays in other programming languages,
// enables storing a collection of multiple items under a single variable name,
// and has members for performing common array operations.
console.log(`-----------Print Array ----------`);

let array = [12, 23, 34, 56, 76, 54, 32, 1];
console.log(`Print The array : ${array}`);
console.log(`1>----------------------------------------`);
console.log(`lentgh of array ${array.length}`);
console.log(`2>----------------------------------------`);
let arrayDemo = [543, 456, 778, 123, 456];
//The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
console.log(`concat array ${array.concat(arrayDemo)}`);
console.log(`3>----------------------------------------`);
//The indexOf() method of Array instances returns the first index at which a given element
// can be found in the array, or - 1 if it is not present.
console.log(`Index of ${array.indexOf(34)}`);
console.log(`4>----------------------------------------`);
//The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, 
//or - 1 if it is not present.The array is searched backwards, starting at fromIndex.
console.log(`Last Index of ${array.lastIndexOf(54)}`);
console.log(`5>----------------------------------------`);
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array,
//the first array element now becoming the last, and the last array element becoming the
//first.In other words, elements order in the array will be turned towards the direction
 //opposite to that previously stated.
console.log('array:', array);
 
const reversed = array.reverse();
console.log('reversed:', reversed);

for (let index = array.length-1; index >=0; index--) {
    const element = array[index];
    console.log("reverse array=>",element);
    
}
console.log(`6>----------------------------------------`);
/*//The slice() method of Array instances returns a shallow copy of a portion of an array
//into a new array object selected from start to end(end not included) where start
//and end represent the index of items in that array.The original array will not be
//modified.
Syntax
slice()
slice(start)
slice(start, end)*/
console.log(`Given array is : ${array}`);
console.log(array.slice(2));
console.log(array.slice(2, 4));
console.log(array.slice(1, 5));
console.log(array.slice(-2));
console.log(array.slice(2, -1));
console.log(array.slice());
console.log(`7>----------------------------------------`);
/* The splice() method of Array instances changes the contents of an array by
 removing or replacing existing elements and / or adding new elements
 Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item0)
splice(start, deleteCount, item0, item1)
splice(start, deleteCount, item0, item1, /* …,  itemN)
*/
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);


console.log(`8>----------------------------------------`);
//The pop() method of Array instances removes the last element from an array
//and returns that element. This method changes the length of the array.
console.log(array);
console.log(array.pop());
console.log(array);
console.log(`9>----------------------------------------`);
//The push() method of Array instances adds the specified elements to the end
// of an array and returns the new length of the array.

console.log(array);
console.log(array.push(34, 54));
console.log(array);
console.log(`10>----------------------------------------`);
//The shift() method of Array instances removes the first element from an array 
//and returns that removed element. This method changes the length of the array.
console.log(array);
console.log(array.shift());
 console.log(array);
console.log(`11>----------------------------------------`);
// The unshift() method of Array instances adds the specified elements to 
//the beginning of an array and returns the new length of the array.
console.log(array);
console.log(array.unshift(12, 13));
console.log(array);


