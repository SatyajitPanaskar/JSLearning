
console.log(`------------- step 01 -----------`);
let personalDetails = {
    firstName: "Satyajit",
    lastName: "Panaskar",
    age: 22,
    mobileNo: '5463 5464 75',
    emailId: 'abc@gmail.com'
}
 
 collegeDetails = {
    collegeName: "SGM Kard",
    subject: 'Marathi, Engilsh, Hindi',
    passOutYear: '2022',
    Stream: 'BSC Chemisty'
}

let margeObject = Object.assign({}, personalDetails,collegeDetails);
console.table(margeObject);
console.log(`-----------------------------------------------------------------------------`);
console.log(`---------step 02 --------`);

const friendName = ["Parth", "Deepak", "Kiran", 'Ronak', "Rohan", "Rushi"];

// to freeze the object
//Object.freeze(friendName);
console.log(friendName);
 

// friendName.push("satya");
// console.log(friendName);
console.log(`-----------------------------------------------------------------------------`);

console.log(`------------ step 04 ------------`);
console.log(`----- using for of loop and log the friend names on console`);
for (const element of friendName)
{
    console.log(element);
    
}


console.log(`---------------------------------------------------------------------------`);

console.log(`------------------ Step 05 -------------------`);

let str = "Codemind Technology";
let lengthStr = str.length;
let space =[''];

console.log(`The Given String Length is : ${lengthStr}`);
for (let index =str.length-1; index >8; index--) {
    const element = str[index];
    space.push(element);
    
}

console.log(`Reveese the word :${space}`);