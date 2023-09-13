


console.log(`-------------------using filter mwthod -----------`);

const array = [1, 2, 3, 4, 5];

const arrayOfSqure = array.filter((element) => {
    return element<2;
});
console.log(arrayOfSqure);


class Student {
    constructor(fullName, rollNo, college, emailId, mobile ){
      this.fullName = fullName;
      this.rollNo = rollNo;
      this.college = college;
      this.emailId = emailId;
      this.mobile = mobile;
    }
    show(){
      console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
      College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
    }
  
}
let studentJenny = new Student("Jenny Gates", 11, "COEP Pune", "abc@gmail.com", "9096 78 6789");
let studentStew = new Student("Stew Page", 22, "JSPM", "stew@gmail.com", "9867 8989 98");
let studentElon = new Student("Elon Musk", 33, "Standford", "ste@gmail.com", "9867 8989 98");
let studentSatya = new Student("Satya Nadella", 44, "ABC", "sttya@gmail.com", "9867 8989 98");
let studentSundar = new Student("Sundar Pichai", 55, "XYZ", "sundar@gmail.com", "9867 8989 98");

const arrayStudents = [studentJenny, studentStew, studentElon, studentSatya,studentSundar ];
const newStudentList = arrayStudents.filter( (student) => {
  return student.emailId.length > 13;
});
console.table(newStudentList);
console.log(`---------------------------------------------------------------------------------`);
console.log(`--- log on Roll NO -------`);

const rollNum = arrayStudents.filter((element) => {
    return element.rollNo > 40;

});
console.table(rollNum);

console.log(`--------------------------------------------------------------------------------------`);

console.log(`---------------- Assignment B - for filter() method -----------------------------------`);

const arrayNumbers1 = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Orginal array ==> ", arrayNumbers1);

console.log(`1>--- Find out all the number which are greter than 50 and log on console`);

const greterNum = arrayNumbers1.filter((element) => {
    return element > 50;
});
console.log(greterNum);
console.log(`2> ---- Find Out all the EVEN numbers and log on console`);
const evenNum = arrayNumbers1.filter((element) => {
    return element % 2 == 0;
});
console.log(evenNum);
console.log(`3> ---- Find out all the odd numbers and log on console`);

const oddNum = arrayNumbers1.filter((element) => {
    return element % 2 == 1;

});
console.log(oddNum);
console.log(`4> -----  Find Out all the  numbers which are multiple of 5`);

const multipleNum = arrayNumbers1.filter((element) => {
    return element%5==0;
});
console.log(multipleNum);

console.log(`5> -----  Find Out all the umbers which are between 20 and 50`);

const numbet = arrayNumbers1.filter((element) => {
    return element>20 && element<50;
});
console.log(numbet);

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let rushi_1 = new Person("rushi", 22);
rushi_1.sayHello();




