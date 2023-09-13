
console.log(`-----------------Assignment: 01 --------------`);

const arrayFruits = ["Banana", "orange", "Apple", "Mango", "Water Melon"];
console.log(`Array element list is : ${arrayFruits}`);
console.log(`--------------Step 1 ------------------`);
let firstElement = arrayFruits[0]
let lastElement = arrayFruits[arrayFruits.length-1];
console.log(`Array first Element :"${firstElement}" and Last element : "${lastElement}`);

console.log(`--------------Step 2 ------------------`);
arrayFruits.unshift("Papaya");
console.log(`Add new element on list : ${arrayFruits}`);

console.log(`--------------Step 3 ------------------`);
let removeElement = arrayFruits.splice(4,1);
console.log(`Remove Elemnt from the array : "${removeElement}"`);
console.log(`Remove Elemnt and new array list is :"${arrayFruits}"`);

console.log(`--------------Step 4 ------------------`);

let addElementLastPostion = arrayFruits.push("Pineapple");
console.log(`Add element is "Pineapple" the Last Index" =>`); 
console.log(arrayFruits);

console.log(`--------------Step 5 ------------------`);

let addElementsecondLast = arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(`"Add Element "Dragon Fruit" before "Water Melon" =>`);
console.log(arrayFruits);

console.log(`--------------Step 6 ------------------`);
let replaceElement = arrayFruits.splice(2, 1, "kiwi");
console.log(`Replace an element 'orange' with 'kiwi' =>`);
console.log(arrayFruits);

console.log(`--------------Step 7 ------------------`);
let start1to4 = arrayFruits.splice(4, 3);
console.log(`Element Start from 1 to 4 => `);
console.log(arrayFruits);


console.log(`--------------Step 8 ------------------`);
const arrayFruit = ["Banana", "orange", "Apple", "Mango", "Water Melon"];
let space = [];

for (let index = arrayFruit.length-1; index >=2; index--) {
    const element12 = arrayFruit[index];
    space.push(element12);
   
    
}
console.log(arrayFruit);
console.log(`last 3 Element => `);
console.log(space);