

console.log(`---------- Assignment 01 - jsonFile-----`);

let jsonData =`{
    "name": "Aleix Melon",
    "id":"E00245",
    "role":["Dev", "DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married": false,
    "address":{
        "street":"32, Laham st.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "referred-by":"E0012"
}`;

let empObj = JSON.parse(jsonData);
console.log(empObj);
console.log(`--------------------------------------------------------------------------`);
console.log(`-- print the role  array step 2 ------`);
const roleLog = empObj.role;
console.log(roleLog);
let results = roleLog[0];
console.log(`Print the role array ,${results}`);

console.log(`--------------------------------------------------------------------------`);

console.log(`---- log only last name ----`);

let namefull = empObj.name;
console.log(`Full Name:=> "${namefull}"`);

let word = namefull.split(" ");
console.log(word);
let lastWord = word[1];
console.log(`Last Name : ${lastWord}`);

console.log(`--------------------------------------------------------------------------`);


console.log(`------ log only joining year of employee ---> 2019`);

let date = empObj.doj;
console.log(` Date of Joining : "${date}"`);
let dateWord = date.split("- ");
console.log(`Gievn joing lenegth is : ${dateWord}`);
let length = date.length;
console.log(`given string length : "${length}"`);
let year = date.slice(6);
console.log(`Date of Joining year : "${year}"`);

console.log(`--------------------------------------------------------------------`);

