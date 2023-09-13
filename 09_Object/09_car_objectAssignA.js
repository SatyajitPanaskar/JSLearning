console.log(`--------------Assignment 01 --- car_objectAssignA.js ----------------------`);
console.log(`---------------------------------------------------------------------------------`);
console.log(`------------------ Step 01 ------------------------`);
let car1 = {
    company: "Hyundai",
    model: "Creta",
    year: 2023,
    color: "White",
    price: "15 lakhs",
    getCarDetails1: function () {
        console.log(`Car Proprties : ${this.company}, ${this.model}, ${this.year}, ${this.color}, ${this.price}`);
    },
    additionalFeatures:['Seating capacity: 5','Fuel economy: 17-21 km/l','Horsepower: 85 to 103 kW','FuelType: Diesel','GearBox:6-speed']
    
}
//console.log(car1);
//console.log(car1.additionalFeatures);
//car1.getCarDetails1();


for (const key in car1) {
    {
        const element = car1[key];
        console.log(`Key: ${key}, values ${element} `); 
    }
}


car1.additionalFeatures.push("Fuel Tank Capacity : '45L'");
car1.additionalFeatures.push("Brake Type: 'Disc'");
car1.additionalFeatures.push("Drive Type : 'FWD'");


/*
car1.getCarDetails1();
console.log(`----------------------------------------------------------------------`);
console.log(`-------------- Using For In loop --------`);

for (const key in car1) {
    if (Object.hasOwnProperty.call(car1, key)) {
        const element = car1[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}
console.log(`----------------------------------------------------------------------`);


console.log(`----------------------------------------------------------------------`);

console.log(`Use push() to add at least three features to the array.`);
console.log(`Before array ::`);
for (const key in car1.additionalFeatures) {
    if (Object.hasOwnProperty.call(car1.additionalFeatures, key)) {
        const element = car1.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}

console.log(`------------------------------------------------------------------`);

car1.additionalFeatures.push("Fuel Tank Capacity : '45L'");
car1.additionalFeatures.push("Brake Type: 'Disc'");
car1.additionalFeatures.push("Drive Type : 'FWD'");


console.log(`After array ::`);
for (const key in car1.additionalFeatures) {
    if (Object.hasOwnProperty.call(car1.additionalFeatures, key)) {
        const element = car1.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}

console.log(`------------------------------------------------------------------`);
console.log(`----- remove the last feature from the array ----`);

car1.additionalFeatures.pop();
for (const key in car1.additionalFeatures) {
    if (Object.hasOwnProperty.call(car1.additionalFeatures, key)) {
        const element = car1.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}

console.log(`------------------------------------------------------------------`);
console.log(`----- remove the first feature from the array ----`);

car1.additionalFeatures.shift();
for (const key in car1.additionalFeatures) {
    if (Object.hasOwnProperty.call(car1.additionalFeatures, key)) {
        const element = car1.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}















console.log(`*************************************************************************************`);
console.log(`------------------ Step 02 ------------------------`);

let car2 = {
    company: "Maruti Suzuki ",
    model: "Dzire",
    year: 2023,
    color: "Red",
    price: "8 lakhs",
    getCarDetails2: function () {
        console.log(`Car Proprties : ${this.company}, ${this.model}, ${this.year}, ${this.color}, ${this.price}`);
    },
    additionalFeatures:['Seating capacity: 5', 'Fuel economy: 17-21 km/l', 'Horsepower: 60 to 90 kW', 'FuelType: Diesel', 'GearBox:6-speed']
    
}
car2.getCarDetails2();
console.log(`----------------------------------------------------------------------`);
console.log(`-------------- Using For In loop --------`);

for (const key in car2) {
    if (Object.hasOwnProperty.call(car2, key)) {
        const element = car2[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}
console.log(`----------------------------------------------------------------------`);

console.log(`Use push() to add at least three features to the array.`);
console.log(`Before array ::`);
for (const key in car2.additionalFeatures) {
    if (Object.hasOwnProperty.call(car2.additionalFeatures, key)) {
        const element = car2.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}

console.log(`------------------------------------------------------------------`);

car2.additionalFeatures.push("Fuel Tank Capacity : '45L'");
car2.additionalFeatures.push("Brake Type: 'Disc'");
car2.additionalFeatures.push("Drive Type : 'FWD'");


console.log(`After array ::`);
for (const key in car2.additionalFeatures) {
    if (Object.hasOwnProperty.call(car2.additionalFeatures, key)) {
        const element = car2.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}



console.log(`------------------------------------------------------------------`);
console.log(`----- remove the last feature from the array ----`);

car2.additionalFeatures.pop();
for (const key in car2.additionalFeatures) {
    if (Object.hasOwnProperty.call(car2.additionalFeatures, key)) {
        const element = car2.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}
console.log(`------------------------------------------------------------------`);
console.log(`----- remove the first feature from the array ----`);

car2.additionalFeatures.shift();
for (const key in car2.additionalFeatures) {
    if (Object.hasOwnProperty.call(car2.additionalFeatures, key)) {
        const element = car2.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}



console.log(`*************************************************************************************`);
console.log(`------------------ Step 03 ------------------------`);
let car3 = {
    company: "Kia Motor",
    model: "Seltos",
    year: 2023,
    color: "Black",
    price: "10 lakhs",
    getCarDetails3: function () {
        console.log(`Car Proprties : ${this.company}, ${this.model}, ${this.year}, ${this.color}, ${this.price}`);
    },
    additionalFeatures:['Seating capacity: 6','Fuel economy: 17-21 km/l','Horsepower: 85 to 103 kW','FuelType: Diesel','GearBox:6-speed']
    
}
car3.getCarDetails3();
console.log(`----------------------------------------------------------------------`);
console.log(`-------------- Using For In loop --------`);

for (const key in car3) {
    if (Object.hasOwnProperty.call(car3, key)) {
        const element = car3[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}

console.log(`----------------------------------------------------------------------`);

console.log(`Use push() to add at least three features to the array.`);
console.log(`Before array ::`);
for (const key in car3.additionalFeatures) {
    if (Object.hasOwnProperty.call(car3.additionalFeatures, key)) {
        const element = car3.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}

console.log(`------------------------------------------------------------------`);

car3.additionalFeatures.push("Fuel Tank Capacity : '45L'");
car3.additionalFeatures.push("Brake Type: 'Disc'");
car3.additionalFeatures.push("Drive Type : 'FWD'");


console.log(`After array ::`);
for (const key in car3.additionalFeatures) {
    if (Object.hasOwnProperty.call(car3.additionalFeatures, key)) {
        const element = car3.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}


console.log(`------------------------------------------------------------------`);
console.log(`----- remove the last feature from the array ----`);

car3.additionalFeatures.pop();
for (const key in car3.additionalFeatures) {
    if (Object.hasOwnProperty.call(car3.additionalFeatures, key)) {
        const element = car3.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}

console.log(`----- remove the few feature from the array ----`);

car3.additionalFeatures.shift();
for (const key in car3.additionalFeatures) {
    if (Object.hasOwnProperty.call(car3.additionalFeatures, key)) {
        const element = car3.additionalFeatures[key];
        console.log(`value : ${element}`);
    }
}*/




           //53-43 =77 =2
let result = true+ 4+ 2 +50 + null - 43 + 65 + true - true + 2 - 75;
console.log(result);
