
// There are various ways to set this in JavaScript: 

console.log(`-------- Implicit binding----------`);

const student = {
    name: "rushi",
    age: 23,
    greet: function () {
        return `Hello ${this.name} you are ${this.age} years old`;
    }
}
console.log(student.greet());

console.log(`-------Explicit Binding -----------`);

function ageVerify() {
    if (this.age > 18)
    {
        console.log("yes you can drive");    
    }
    else {
        console.log("No you canot drive");
    }
}
const per1 = { age: 19 };
const per2 = { age: 16 };
ageVerify.call(per1);
ageVerify.call(per2);

console.log(`---------- Default Binding ------------------`);
const age = 21;

function verifyage() {
   
    return this.age;
}
console.log(verifyage());

console.log(`------------ Arrow Function Binding ----------------------`);

const person = {
    name: "Rushi",
    age: 32,
    greet: () => {
        return `Hello ${this.name} You are ${this.age} Years old`;
    }
}
console.log(person.greet());


console.log(typeof typeof 42);
