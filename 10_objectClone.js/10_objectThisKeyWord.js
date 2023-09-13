// There are various ways to set this in JavaScript:
// Implicit binding
// Explicit binding
// Default binding
// Arrow function binding

//  Implicit Binding: When we call a function as a method of the object this keyword refers to the calling object

const person = {
    name: "ram",
    age: 22,
    greet: function(){
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person.greet());