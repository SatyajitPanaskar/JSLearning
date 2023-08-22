
console.log(`------Arrow Function Assignment ----------------`);
console.log(`1>------- step 1 log message on console inside arrow function -------`);
let arrowFun = () => {
    console.log(` The Given String is : "Good Morning, Today is Tuesday"`);
}
arrowFun();


console.log(`2>---------step 2 using 3 parameter perfrom the Multiplication------`);
let arrow1 = (num1, num2, num3=1) => {
    let res = num1 * num2 * num3;
    console.log(`the given number is : ${num1}, ${num2}, ${num3} and Result is  is : ${res}`);
}
arrow1(5, 5, 2);
arrow1(10, 4);

console.log(`3> ----- write 5 argument and return value such as for recived params it should do the addition`);

let arrow3 = ( num1, num2, ...num) => {
    let add = num1 + num2;
     for (let index = 0; index < num.length; index++) {
         add += num[index];
        
    }
    console.log(`The Given VAlues is : ${num1}, ${num2}, ${num}  addition is : ${add}`);
}

arrow3(100, 100, 200, 349, 756);
arrow3("I am"," learning"," ES6"," features"," in depth")

