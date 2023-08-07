
console.log(`---------Vehicle Assignment 01 --------`);

class Vehicle {
    constructor(company, model, year, color, price, seatingCapacity, fuelType,)
    {
        this.company = company
        this.model = model
        this.year = year
        this.color = color
        this.price = price
        this.seatingCapacity = seatingCapacity
        this.fuelType = fuelType
    }
    show() {
        console.log(`Vehicle Details => 
         Company Name :${this.company}, Model Name :${this.model},
         Model Year: ${this.year}, Color : ${this.color}, price: ${this.price},
          SeatingCapacity: ${this.seatingCapacity}, Fuel Type : ${this.fuelType}`);
    }
}

let carHyundai = new Vehicle("Hyundai", "Creta", 2023, "White", "15 lakhs", '5', 'Diesel');
//carHyundai.show();

let carMarutiSuzuki = new Vehicle("Maruti Suzuki", "Dzire", 2023, "White", "12 lakhs", '6', 'Diesel');
//carMarutiSuzuki.show();

let carHyundaiNew = new Vehicle("Hyundai", "Venue", 2023, "Blue", "10 lakhs", '5', 'Diesel');
//carHyundaiNew.show();

let carMarutiSuzukiNew = new Vehicle("Maruti Suzuki", "Brezza", 2023, "Red", "15 lakhs", '6', 'Diesel/Petrol');
//carMarutiSuzukiNew.show();

let carToyota = new Vehicle("Toyota ", "Fortuner", 2023, "White", "40 lakhs", '7', 'Diesel/Petrol');
//carToyota.show();

let carKia = new Vehicle("Kia", "Seltos", 2022, "Black", "13 lakhs", '7', 'Diesel');
//carKia.show();

let carTata = new Vehicle("TATA", "Nexon", 2023, "Blue", "10 lakhs", '5', 'Petrol');
//carTata.show();

let array = [carHyundai, carMarutiSuzuki, carHyundaiNew, carMarutiSuzukiNew, carKia, carTata, carToyota];
console.log(`----Traversing array -----`);
for (const Vehicle of array)
{
    Vehicle.show();
    console.log(`--------------------------------------------------------------------------------------------`);
}
console.log(``);
console.log(`==================================================================================================`);

console.log();

console.log(`------- Step 02 college----------------------`);

class College
{ 
    constructor(collegeName, address, pincode, phoneNo, typeOfCollege, academicStaff)
    {
        this.collegeName = collegeName
        this.address = address
        this.pincode = pincode
        this.phoneNo = phoneNo
        this.typeOfCollege = typeOfCollege
      this.academicStaff =academicStaff  
    }
    display() {
        console.log(`"College Details : 
        College Name : ${this.collegeName}, Address : ${this.address}, Pincode : ${this.pincode},
        Phone No : ${this.phoneNo}, Type Of College:  ${this.typeOfCollege}, Academic Staff : ${this.academicStaff}`);
    }
}

let college1 = new College("C.O.E.P College", "Shivajinagar, Pune, Maharashtra", "411005","6564 6484 76", "Government College", 30);
college1.display();


let college2 = new College("DY Patil College", "Shivajinagar, Pune, Maharashtra", "411005","6554 9876 76", "private College",40);
//college1.display();

let college3 = new College("Modern Law College", "Pune, Maharashtra", "411005","6564 2344 76", "Government College", 30);
//college1.display();

let college4 = new College("Mahatma Phule College", "Wakad, Pune, Maharashtra", "411005","6776 6484 67", "Government College", 20);
//college1.display();

let college5 = new College("SGM College", "Karad, Maharashtra", "411005","6564 2567 76", "Private College", 70);
//college1.display();

let array2 = [college1,college2,college3,college4,college5];
console.log(`----Traversing array 2-----`);

for (const College of array2)
{
    College.display();
    console.log(`------------------------------------------------------------------------------------------`);
}
console.log(`==================================================================================================`);

console.log();

console.log(`------- Step 03 Function Constructor----------------------`);

console.log(`The Given College Details:`);
function traverseObject(collegeObj)
{
    for (const college in collegeObj) {
        if (Object.hasOwnProperty.call(collegeObj, college)) {
            const element = collegeObj[college];
            console.log(` ${college} ==> ${element} `);
        }
    }
}
traverseObject(college1);
console.log(`----------------------------------------------------------------------------`);
traverseObject(college2);
console.log(`----------------------------------------------------------------------------`);

traverseObject(college3);
console.log(`----------------------------------------------------------------------------`);

traverseObject(college4);
console.log(`----------------------------------------------------------------------------`);

traverseObject(college5);
console.log(`----------------------------------------------------------------------------`);

