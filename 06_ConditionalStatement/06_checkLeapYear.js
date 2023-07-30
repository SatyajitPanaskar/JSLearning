console.log(`-------------Assignment 3 -----------`);
console.log(" ");
console.log(`-------------Check Leap Year or not-------`);

var leapYear = function (year)
{
    if (year == null || isNaN(year))
    {
       console.log(`"${year}" is Invalid input`);
       
    }
   else if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0)
    {
         console.log(`"${year}" year is leap year`);   
    } 
    else {
        console.log(`"${year}" year is Normal year`);  
    }
    
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1750);
leapYear(1945);
leapYear(undefined);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(NaN);



