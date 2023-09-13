

class Student {

    constructor(fName, lName, rollNo, age, city) {
        this.fName = fName;
        this.lName = lName;
        this.rollNo = rollNo;
        this.age = age;
        this.city = city;
            
    }
    
}

const name_0 = new Student("Satya", 'Panaskar', 4444, 21, "Pune");
const name_01 = new Student("Rushi", 'kadam',1111, 23, "Patan");
const name_02 = new Student("jain", 'jonny', 2222, 23, "Mubai");
const name_03 = new Student("siman", 'kope', 3333, 26, "Karad");

const cmpare = (std1, std2) => {
    if (std1.age > std2.age) {
        return ` ${std1.fName} age is ${std1.age}  gretar than ${std2.fName} age is ${std2.age}`
    }
    else if (std2.age < std1.age) {
        return ` ${std2.fName} age is ${std2.age}  less than  ${std2.fName} age ${std2.age}`
    }
    else {
        return ` ${std1.fName} age is ${std1.age}  both are same ${std2.fName} age ${std2.age}`
    }
};
const cmpare1= cmpare(name_01, name_0);
console.log(cmpare1);

const cmpare2= cmpare(name_02, name_01);
console.log(cmpare2);
