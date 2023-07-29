
console.log(`---------Assignment 01 :: Vote Eligible ----------------`);

var voteEligible = function (age)
{
    if (age <= 0 || isNaN(+age) ||  age> 130  )
    {
        console.log(`your age "${age}" is Invalid input`);
    }
    else if (age>=18)
    {
        console.log(`Your are is "${age}" and you are eligible for vote `);
    }
    else
    {
        console.log(`Your age is "${age}" and you are Not eligible for vote`);
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);

console.log(`-----------Assignment 02 :: Grade Calculation ----------------`);

var gradeCalculation = function (mark)
{
    if (mark <= 0 || mark >= 100 || isNaN(+mark) )
    {
         console.log(`Your Mark is "${mark}" please Provide the valid mark`);
    }
    else 
    if (mark >= 35 && mark < 50)
    {
        console.log(`your mark is "${mark}" and grade is "C" Need improvement`);
        }
        else if (mark >= 50 && mark < 75)
            {
                 console.log(` "Good" your mark is "${mark}" and grade is "B"`);
        } else if (mark >= 75 && mark < 90)
        {
            console.log(`"Excellent " your mark is "${mark}" and grade is "A"`);     
                
        } else
        
            if (mark >=90 ) {
                console.log(`"Funtastic " your mark is "${mark}" and grade is "A+"`); 
            }
            else if(mark < 35) {
                console.log(`""Fail" Your Mark is "${mark}"`);
                 }
                      
        }
            
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);

console.log(`--------Assignment 03 :: if else hands on  ----------------`);

var checkNum = function (num1)
{
    if (num1 % 2 == 0)
    {
      console.log(`"${num1}" is EVEN Number `);  
    } else {
        console.log(`"${num1}" is ODD Number `);   
    }
    return num1;
}
checkNum(45);
checkNum(70);
checkNum(67);
checkNum(98);

console.log(`----------------Step 2----------------`);

var str = "JavaScript-ES6";
if (str.length >=10)
{
    console.log(`The given String more than 10 character and the String length is "${lth}"`);
}

console.log(`---------Step 3----------------`);
var str1 = "JavaScript";
if (str1.startsWith("Java"))
{

    console.log(`The Given String Start With name "${str1}"`);
}
else {
    console.log(`The Given String is Not Start With name "${str1}"`);
}


/* 
function startsWithJava(arg1) {
    if (arg1.startsWith("Java")) {
        console.log(`The Given String Start With name "${arg1}"`);
      return true;
    }
    else {
        console.log(`The Given String is Not Start With name "${arg1}"`);
      return false;
    }
  }
  console.log(startsWithJava("Java is awesome")); // Output: true
  console.log(startsWithJava("JavaScript is great")); // Output: true
  console.log(startsWithJava("javaScript is powerful")); // Output: false
  console.log(startsWithJava("C# and Java are similar")); // Output: false
  */

  