

console.log(`------leap year------`);

var leapYear = function (year)
{
    if (typeof(year) !== 'number' || year <=0)
    {
        console.log(`"${year}" invalid input`);
    } 
     else if (year % 4 == 0 || year % 100 !== 0 && year % 400 == 0 )
    {
        console.log(`"${year}" is Leap year`);
    }
    else {
        console.log(`"${year}" is Not Leap year`);
    }
}

leapYear(2022);
leapYear(2024);
leapYear(null);
leapYear(undefined);
leapYear(-2034);
leapYear("2003");
leapYear(2040);
leapYear(3000);
leapYear(1990);