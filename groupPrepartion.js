
console.log(`------------------JavaScript Special Operators---------`);

/*
(?:)	Conditional Operator returns value based on the condition. It is like if-else.
   conditional operator (?:)
    This operator is also called a ternary operator 
    because it requires three operands to produce a result;

syntax : res = condition ? expression1 : expression2

condition – conditional expression, the result of which is true or false;
expression1 – expression to be calculated if condition = true;
expression2 – expression to be calculated if condition = false;
res is the result obtained as a result of evaluating one of the 
expressions expression1 or expression2.
The ternary operator ?: can be replaced by an if-else statement.
// Ternary operator ?:
example 
// 1. Calculate the maximum of two numbers x, y
var x, y
var res1
x = 8
y = 5
res1 = (x > y) ? x : y // res1 = x = 8

// 2. Get notification about string equality/inequality
var s1 = "abcd"
var s2 = "abcde"
var res2 = (s1 == s2) ? "Strings are equal." : "Strings are not equal"


typeof:	checks the type of object.

7. Operator typeof. Get the type as a string
Using the typeof operator, you can get the name of an object’s type as a string.
 General form of using the operator
typeName = typeof(obj)
 obj – an object;
typeName – a string type variable containing the type name of the obj object.


var t = 77
typeName = typeof (t) // typeName = "number"
console.log(typeName)

var s = "Hello!"
typeName = typeof (s) // typeName = "string"
console.log(typeName)

let values = true;
console.log(typeof values);


// typeof operator - get a string representation of a type
var Line = {
  x1: 10,
  y1: 10,
  x2: 20,
  y2: 25,

  Length: function () {
    return len = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }
}

var typeName = typeof(Line) // typeName = "object"
console.log(typeName)


prototype --------
prototypes are the mechanism by which javascript object inherit feature from one another.

*/


console.log(`-------------------------------------------`);

let user = {
    getFullName: function () {
        return this.name+" " +this.lastName
   
    },

    getAge: function ()
    {
        let age = new Date().getFullYear();//-this.birth;
        return age;
    }
}
console.log(`---------------------------------------------------`);


let student = {
    name: "Satyajit",
    lastName: "Panaskar",
    birth: 2002,
   // getAge:user.getAge
    /*
    getFullName: function () {
        return this.name+" " +this.lastName
   
    },
    
    getAge: function ()
    {
        let age = new Date().getFullYear();//-this.birth;
        return age;
    }*/
}

console.log(student);
//console.log(student.getFullName());
console.log(student.getAge);
console.log(`--------------------------------------------------------`);

let teacher = {
    name: "janny",
    lastName: "Sharama",
    birth: 1998,
   // getAge:user.getAge
    
}
console.log(teacher);
//console.log(teacher.getFullName());
console.log(teacher.getAge);

console.log(`------------------------------------------`);

// teacher.__proto__ = user;
// student.__proto__ = user;
console.log(`----------------------------------`);
Object.prototype.myData = "This is a simple project"

console.log(student.myData);
console.log(`----------------------------------`);
Object.prototype.myData1 = function () {
    return "custom function"
}
console.log(student.myData1());

console.log(`----------------------------------`);
/* douht vichrych ahe 
String.prototype.myData2 = function () {
    return "hello string"
}
console.log(String.myData2);
*/






console.log(`------------------------------------`);

function employee(firstName,lastName)
{
  this.firstName=firstName;
  this.lastName=lastName;
}

employee.prototype.fullName=function()
  {
    return this.firstName+" "+this.lastName;
  }

var employee1=new employee("Martin","Roy");
var employee2 = new employee("Duke", "Billa");
console.log(employee1.fullName());
console.log(employee2.fullName());


