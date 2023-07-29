
console.log(`---------------if block Statement----------`);
var num = 23;
if (num>10)
{
   console.log(num); 
}
console.log(`After if Block`);

console.log(`---------------if else block Statement----------`);

var num2 = 23;
if (num2 % 2 == 0)
{
    console.log(`"${num2}" is Even Number`);
}
else
{
    console.log(`"${num2}" is ODD Number`);
}

console.log(`---------------Using function if else block Statement----------`);
function voteEligibilty(age, name)
{  
    // if block  to handle all invalid scenarois
   
    if (age <= 0 || isNaN(+age) ||  age> 120 )
    {
        console.log(`"${name}" your age "${age}" is Invalid`);
       
    }
    else  if (age >= 18)
            { //if block handle all valid scenarois
               console.log(`"${name}" you are eigiable for vote`);
            }
          else  
           {
               console.log(`"${name}" You are not eligiable for vote `);  
           }
    
}
voteEligibilty(17, "Janny");
voteEligibilty(18, "Bill");
voteEligibilty(19, "Billa");
voteEligibilty(-20, "Sachin");
voteEligibilty("rushi", "Sachin");
voteEligibilty("30", "soma");
voteEligibilty(null, "Sachin");
voteEligibilty(undefined, "Sachin");
voteEligibilty(121, "Suma");