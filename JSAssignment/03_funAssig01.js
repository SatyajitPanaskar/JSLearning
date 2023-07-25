console.log("====================Step-1 Function With no Arguments========================");
function start() {
        console.log("The Class start at 7.00 Sharp");
}
start();
function end()
{
    console.log("The Class finishes at 8.30");
}
end();
console.log("=================Step-2 Personal Details===========================");

function FullName(FirstName,lastName, collageName) {
    console.log("First Name =>", FirstName,"||","Last Name =>",lastName,"||","Collage Name =>",collageName);
}
FullName("satyajit", "Panaskar", "SGM College, Karad");
console.log("=================Step-3 Swaping The Values===========================");
function swapValues(arg1,arg2){
    console.log("Before Swaping arg1 =>", arg1,"||", "arg2 =>", arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After Swaping arg1 =>", arg1,"||", "arg2 =>", arg2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("=================Step-4 Add Three Values===========================");
function addThreeValues(arg1, arg2, arg3) {
    console.log("Values are =>", arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addThreeValues(10.23, 600, 40);
console.log("Addition is =>", res);
var res = addThreeValues("Hello", "Good", "Morning");
console.log("Addition is =>", res);
console.log("=================Step-5 Bank Details===========================");
function bankDetails(bankName, accountNum, location, pinCode) {
    console.log("Bank Name =>", bankName,"||","Bank Account Number =>", accountNum,"||","Bank Location =>",location,"||","PinCode =>",pinCode);
    
}
bankDetails("CITI Bank", 34567834512, 'Pune', 431202);
bankDetails("Axis Bank", 78561247823, "Mumbai", 441202);
bankDetails("HDFC Bank",89654561785,"Pune",631202,"Open")


