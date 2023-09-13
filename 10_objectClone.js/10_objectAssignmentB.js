console.log(`------------------Object Cloning and Traversing -----------`);

let bankSBI = {
    bankName: "SBI Bank",
    location: "Pune",
    accountNo: 778899,
    ifsc: "HDFC003",
    interestRate: "7%"
}
location = {
    street:"Wakad Main Road",
    city: "pune",
    PineCode:"644774"
}
rateOfInterest = {
    homeLoanIntest: '7.7%',
    personalLoanIntest:'10.7%',
    dueIntest:'9.7%'
 }
let result = Object.assign({}, bankSBI, location);
console.table(result);


let usingSpread = { ...bankSBI, ...location };
console.table(usingSpread);
console.log(`---------------------------------------------------------------------`);
let sbiDetails = Object.assign({}, bankSBI, location, rateOfInterest);
console.log(`Marge the bankSBI, location and rateOfInterest `);
console.table(sbiDetails);
console.log('');
console.log(`-------------------------------------------------------------------------------`);

console.log(`----------travrse the marged object-------------`);


function margedObject(margedObj)
{
    for (const sbiDetails in margedObj) {
        if (Object.hasOwnProperty.call(margedObj, sbiDetails)) {
            const element = margedObj[sbiDetails];
            console.log(`${sbiDetails} ==> ${element}`);
        }
    }
    console.log(`-------------------------------------------------------`);
}
margedObject(sbiDetails)
