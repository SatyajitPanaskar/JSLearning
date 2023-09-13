console.log(`--------------Assignment 01----------`);
console.log(`--------------Step: 01 Count the total number vowels----------`);

var totalVowels = function (str)
{ 
    var count = 0;
    var vowelas = [];
    let index = 0;

    while (index < str.length) 
    {
        let char = str.charAt(index);
        index++;
       
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
        {
            vowelas.push(char);
            count = count + 1;

        }
    }
    console.log(`The total vowels are "${vowelas.join(',')}"`);
    console.log(`Total number of vowelas is "${count}"`);
    console.log(`-----------------------------------------------------`);
    
}
totalVowels("I am very good IT Developer");
// totalVowels("Hard work always pays back");

console.log(`--------------Step: 02 Sum of cube of number----------`);

var sumOfNumber = function ()
{
    let count = 0;
    let result = 0;
    for (let index = 1; index <= 5; index++)
    {
        let count = index * index * index; 
        result = count + result;  
        
       console.log(`cube of ${index} is : ${count}`);  
    }  
    console.log(`Sum of cube of number from 1 to 5 is => ${result}`);
    

    
}
sumOfNumber();

console.log(`--------------Step: 03 Odd Position Chars ----------`);

var oddPositionedChar = function (str)
{   
    let temp = 0;
    let result = 0;
    var space = [];
     for (let index = 0; index < str.length; index++)
    {
       result = str.charAt(index); 
         if ( result !== ' ' && index % 2 !== 0 )
         {
             temp = temp + result;  
             space.push(result);
                     
         }
         
         
    }
    console.log(`The given String is "${str}"`);
    console.log(`its odd postion character are =>${space.join(', ')}`);
         
}
console.log("---------------String 1------------------");
oddPositionedChar("Hard work always pays back");
console.log("----------------String 2------------------");
oddPositionedChar("Soon i will be Angular IT Champ");



console.log(`--------------Assignment 02----------`);
console.log(`--------------Step: 01  Reverse String ----------`);

var reverseString = function (str1)
{
    
    let res1 = '';
    for (let index = str1.length - 1; index >= 0; index--)
    {   
        let result = str1.charAt(index);
        if (res1 !== ' ')
        {
           res1 += result;
            
        }    
       
    }
    console.log(`The Given String is: "${str1}"`); 
       console.log(`It's Reverse String is:" ${res1}"`);
}
console.log("---------------String 1---------------");
reverseString("Hard Work Always Pays Back");
console.log("---------------String 2---------------");
reverseString("Soon I will be React Champ");


/*
console.log(`----------parth assignment-------------------`);
function reverseString(str){

    let res2 = ""; // Initialize an empty string to store the reversed characters

    for (let index = str.length-1; index >= 0; index--) {
        
        const res1 = str.charAt(index);
        
        if (res1 !== ' ') {
            res2 += res1;  // Concatenate the character to the reversedStr   
        }
    }

    console.log(`The Given String is: "${str}" & It's Reverse String is:" ${res2}"`);
}

console.log(`________________________ String No. 1_____________________________`);
reverseString("Hard Work Always Pays Back");
console.log(`________________________ String No. 2_____________________________`);
reverseString("Soon I will be React Champ");
*/