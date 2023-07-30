
console.log(`----------Assignment 2 ----------`);

var marriageEligibility = function (gender,age)
{
    if (gender == "male" &&  age >= 21 )
    {
         console.log(`Gender is "${gender}" and age is "${age}" he is eligible for marriage `);
    }
    
   else if (gender == "female" && age >= 18)
    {
        console.log(`Gender is "${gender}" and age is "${age}" she is eligible for marriage `); 
    }
    else if (gender == "other" && age >= 18)
    {
        console.log(`Gender is "${gender}" and age is "${age}"  is Invalid Input`); 
    }
    else {
        console.log(`Gender is "${gender}" and age is "${age}"  you are Not eligible for marriage `); 
    }
    
}
marriageEligibility("male", 17);
marriageEligibility("male", 25);

marriageEligibility("female", 28);
marriageEligibility("female", 16);

marriageEligibility("other", 35);
marriageEligibility("other", 41);
