

console.log(`------ bind()---------`);

let student1 = {
    name: "Rushi",
    id: 32,
    age:21

}
let student2 = {
    name: "Satyajit",
    id: 33,
    age:22
}
let student3 = {
    name: "jenny",
    id: 34,
    age:23
}

function studentInformation() {
    console.log(` Student Information =>  Name : ${this.name}, Id : ${this.id}, Age : ${this.age}`);
}

const studentinfo = studentInformation.bind(student1);
studentinfo();
const studentinfo1 = studentInformation.bind(student2);
studentinfo1();
const studentinfo2 = studentInformation.bind(student3);
studentinfo2();


let a = 30;
let b = 39;
let c = a + b;
console.log(c);


