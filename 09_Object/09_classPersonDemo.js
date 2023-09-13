console.log(`------- class constructor ------------`);

class Student 
{
   constructor(fullName, rollNo, college, emailId, mobileNum)
      {
        this.fullName=fullName
        this.rollNo=rollNo
        this.college=college
        this.emailId=emailId
       this.mobileNum =mobileNum
    }
    show() {
        console.log(`Student Details is Full Name : ${this.fullName}, Roll No ${this.rollNo},
        College Name : ${this.college}, Email ID : ${this.emailId}, Mobile Number : ${this.mobileNum}`); 
    }
}
let studentRushi = new Student("rushi Panskar", 12, "COEP Pune", "Rushi@gmail.com", "2434 5667 66");
//console.log(studentRushi);
//studentRushi.show();

let studentDada = new Student("Dada Surve", 13, "CMD Pune", "Dada@gmail.com", "2444 5777 88");
//console.log(studentDada);
//studentDada.show();


let studentSatya = new Student("Satya Panaskar", 14, "SGM Pune", "Satya@gmail.com", "1689 5667 66");
//console.log(studentSatya);
//studentSatya.show();


let studentSony = new Student("Sonay Panskar", 15, "BVD Pune", "Sonya@gmail.com", "2434 8765 66");
//console.log(studentSony);
//studentSony.show();

let array = [studentRushi, studentDada, studentSony, studentSatya];
console.log(`-------Traversing Array -----------`);
for (const student of array)
{
    student.show(); 
    
}




