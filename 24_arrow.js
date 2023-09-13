

class Car1 {
    constructor(cmp, model, price, type) {
        this.cmp = cmp;
        this.model = model;
        this.price = price;
        this.type = type;

    }
}

let suzuki = new Car1('bmw', 2022, 120000, 'diesel');
let tata = new Car1('TATA', 2023, 220000, 'CNG');
let toyota = new Car1('fortuner', 2021, 220000, 'Petrol');
 

const comare = (carA, carB) =>{ 
    if (carA.price > carB.price)
    {
        return `${carA.cmp} is more expensive ${carB.cmp}`;
    }
    else  if (carB.price > carA.price)
    {
        return `${carB.cmp} price is ${carB.price}  more expensive than ${carA.cmp} price is ${carA.price} `;
    } 
    else
    {
        return ` both same price ${carA.cmp} price is ${carA.price}  ; ${carB.cmp} price is ${carB.price}`;
        
    }
};

const cmpareCar1 = comare(suzuki, tata);
console.log(cmpareCar1);

const cmpareCar2 = comare(suzuki, toyota);
console.log(cmpareCar2);

const cmpareCar3 = comare(tata, toyota);
console.log(cmpareCar3);

