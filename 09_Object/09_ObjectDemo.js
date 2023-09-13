let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "pune",
    isMarried: true,
    show: function () {
        console.log(`Inside show function`);
    }
 
}

console.log(`Gievn Object`,personGK);

console.log(`TypeOF =>`, typeof personGK);


let isMarried = personGK.isMarried;
console.log(isMarried);

let updateCity = personGK.city = "Mubai";
console.log(updateCity);
 console.log(`Update The value city :`,personGK);

delete personGK.designation;
console.log(`Delete the property designation `.personGK);

personGK.show();
console.log(`-------------------------------------------------`);

let array = [];
let bank = {
    bankName: "SBI",
    accountNumber: 343434242,
    ifsc: "SBIN094939",
    address: {
        street: "Wakad Main Road",
    pin: 73738,
    lanadmark: "near petrol pump",
    telPhone: "020-73737",
    city: "Pune",
    state: "MH",
        country: "Indai"
    }
}

console.log(bank);
let res1 = bank.address.city;
console.log(res1);
console.log(`delete the telephone values`);
let delete1 = bank.address.telPhone;
console.log(delete1);
console.log(bank);


console.log(`Add the value is bill`);
let add = professor.certificates.push("bill");
console.log(professor.certificates);

console.log(`Delete last array length`);
let delete2 = professor.certificates.pop();
console.log(delete2);
console.log(professor.certificates);

console.log(`add mark element in index`);
let addMark = professor.certificates.unshift('mark');
console.log(addMark);
console.log(professor.certificates);



