
console.log(`---------Prime Number--------`);

let num = 1;
let end = 100;
let index, index1;
for ( index = num; index <= end; index++)
{
    for ( index1 = 2; index1 <= index; index1++) {
        if (index % index1 == 0) {
            break;
        }
    }
    if (index == index1)
    {
        console.log(index1);
    }
        
    }
   
    
    console.log(`------------------------------------------------------------------------`);
    
console.log(`-------- check the prime number or not-----------`);
function isprime (n){
    if (n===1) {
        return `You entered 1 & is not prime number`
    }
    else if (n===2){
        return `Is prime`
    }
    else {
        for (let index = 3; index < n; index++) {
            if (n%index===0) {
                return `Entered number is ${n} & it is not prime number`
            }
            
        }
        return`Entered number is ${n} & it is prime number `;
         
    }
  }
  console.log(isprime(11));
  console.log(isprime(21));
  console.log(isprime(47));
  console.log(isprime(3));
  console.log(isprime(1));