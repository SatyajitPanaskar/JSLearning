
console.log(`-----------------Assignment 1-------------`);
console.log(`Check that if a given triangle is Equilateral, Scalene or Isosceles`);
console.log("");
var triangleType = function (side1,side2,side3)
{
    if (side1 == side2 && side2 == side3 )
    {
      console.log(`Tringle side "${side1}","${side2}","${side3}" is "Equilateral Tringle"`);
     
    }
    else if (side1 == side2 || side1 == side3 || side2 == side3)
        {
         console.log(`Tringle side "${side1}","${side2}","${side3}" is "Isosceles Tringle"`);
         
    }        
    else {
        console.log(`Tringle side "${side1}","${side2}","${side3}" is "Scalene Triangle"`);
        
    }
    
}
triangleType(5, 5, 5);
triangleType(4,3,4);
triangleType(7, 4, 6);

console.log(" ");


console.log(`-----------------Assignment 2-------------`);
console.log(" ");
console.log(`Check if a year is leap or not`);
console.log(" ");

var checkLeapYear = function (arg1) {
    
    if (arg1 % 4 == 0 || arg1 % 100==0 || arg1 % 400 == 0)
    {
        console.log(`"${arg1}" year is  leap year`);
    }
    else {
        console.log(`"${arg1}" year is Not leap year`);
    }
}
checkLeapYear(2002);
checkLeapYear(2020);
checkLeapYear(2023);
checkLeapYear(2000);
checkLeapYear(2016);
checkLeapYear(2014);