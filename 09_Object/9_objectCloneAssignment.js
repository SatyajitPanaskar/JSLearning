console.log(`---------Object clone Assignment ----------`);

const array = [20, 3, 4, 56, 90, 400, 49];
console.log(`"Orginal array" : ${array}`);
let array1 = array;
console.log(`"Cloned array" : ${array1}`);
array1.push(55, 66);
console.log(`Add new element : ${array1}`);

console.log(`------- Step 2-----------------------------------------------------------------------`);

let newArray = array;
let deepClone = [...newArray];
newArray.push(10, 25);
console.log(`Clone Array : ${deepClone}`);
console.log(`Orginal Array :${newArray}`);


console.log(`---- step 3----------------------------------------------`);

let arrayEven = [2, 30, 14, 8];
// let margeArray = Object.assign({}, array, arrayEven);
// console.log(margeArray);
let margeArraySpread = [...array, ...arrayEven];
console.log(margeArraySpread);

let margeTwoArray = array.concat(arrayEven);
console.log(`Using conacat Method : ${margeTwoArray}`);
console.log(`-----------------------------------------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address: {
        locality:{
            colony: "OM Varindavan Society",
            street: "Kanch Pokali, 431202",
        },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
    },
    mobile: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}

let employeInfo = JSON.parse(JSON.stringify(employee_info));
console.log(employeInfo);

console.log(`------------Step 06 --------------------`);

console.log(`${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city},${employee_info.address.state},${employee_info.address.country}`);

console.log(`Mobile Number : ${employee_info.mobile.join(', ')}`);
console.log(`--------------------------------------------`);
console.log(`Before Salary :${employeInfo.salary.july_month}`);
console.log(`After Salary :${employeInfo.salary.july_month = '80,000INR'}`);
console.log(`------------------------------------------------------------------`);
console.log(` Orgianl Country :${employeInfo.address.country}`);
console.log(` Update Country :${employeInfo.address.country = "United Kingdom"}`);




