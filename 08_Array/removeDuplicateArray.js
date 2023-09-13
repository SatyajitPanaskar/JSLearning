console.log(`----- remove duplicate array element `);
 


function removeElement(arr)
{
    let array = [];
    for (let index = 0; index < arr.length; index++)
    {
        if (array.indexOf(arr[index]) === -1)
        {
            array.push(arr[index]);
       }
        
    }
    return array;
    
}
let inputArray = [1, 2, 3, 4, 4, 3, 2, 1, 3];
let res = removeElement(inputArray);
console.log(res);

let str = "-";
console.log(typeof str,str);

let str1 = 0;
console.log(typeof str1 , str1);
