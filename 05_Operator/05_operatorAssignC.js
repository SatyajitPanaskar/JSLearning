
console.log(`---------------------------------- Assignment 1 ----------------------------------`);

var  score = function (gradScore, hscScore,sscScore, candidateName)
{
    var result =s gradScore >= 70 && hscScore >= 80 && sscScore >= 90 ?
        console.log(`Congrates "${candidateName}" You are eligible for TCS interview`)
        : console.log(`"${candidateName}" you are not eligible for interview`);
}
score(80, 86, 90, "Rushi");
score(70, 65, 55, "Suman");
score(60, 79, 88, "Amit");
score(70, 85, 90, "Sunita");
score(69, 80, 94, "Aniket");

console.log(`---------------------------------- Assignment 2 ----------------------------------`);
console.log(`---------------------------------- Step 1----------------------------------`);
function maleMarriageEligibility(gender, age, boyName)
{
    var result = gender && age >= 21 ?
        console.log(`"${boyName}" you are eligible for marriage`) :
         console.log(`"${boyName}" you are Not eligible for marriage`);
}
maleMarriageEligibility("male", 25, "Billgates");
maleMarriageEligibility("male", 17, "Stew Jobs");
maleMarriageEligibility("male", 20, "Bill");
maleMarriageEligibility("male", 21, "Stew");

console.log(`---------------------------------- Step 2 ----------------------------------`);
function femaleMarriageEligibility(gender, age, girlName)
{
    var result = gender && age >= 18 ?
        console.log(`"${girlName}" you are eligible for marriage`) :
         console.log(`"${girlName}" you are Not eligible for marriage`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");
femaleMarriageEligibility("Female", 18, "Jeni");
femaleMarriageEligibility("Female", 17, "Malinda");


console.log(`---------------------------------- Step 2 ----------------------------------`);


var wordLength = function(word){

    return word.length % 2 === 0 ? `The length of ${word} is: "Even"` : `The length of word ${word} is: "Odd"` ;


};

console.log(wordLength("Javascript"));
console.log(wordLength("Developer"));
console.log(wordLength("Google"));


