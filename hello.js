console.log("Hello Word");
console.log("My Name Is Satyajit")

// let array = [34, 65, 90, 75, 53, 73, 77];

// //let space = [];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if ( array[index]> element)
//     {
//         console.log(element);
//     }
   
    
// }
/*
const numbers = [34, 35, 67, 89, 23, 23, 45];

if (numbers.length < 2) {
    console.log("Array must contain at least two numbers.");
} else {
    let largest1 = numbers[0];
    let largest2 = numbers[1];

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] > largest1) {
            largest2 = largest1;
            largest1 = numbers[i];
        } else if (numbers[i] > largest2 && numbers[i] !== largest1) {
            largest2 = numbers[i];
        }
    }

    console.log("The two largest numbers are:", largest1, "and", largest2);
}
*/

let array2 = [34, 87, 90, 65, 4, 66, 75, 45, 34];
let temp = 0;
for (let index = 0; index < array2.length - 1; index++)
{
    for (let index2 = 0; index2 < array2.length - 1 - index; index2++)
    {
        if (array2[index2] > array2[index2 + 1])
        {
            temp = array2[index2];
            array2[index2] = array2[index2 + 1];
            array2[index2 + 1] = temp;
            
        }
    }
}
console.log(array2);