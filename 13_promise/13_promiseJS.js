
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        
console.log(`------------- Promise One-----------`);
        console.log("async task is completed");
        resolve();
    }, 1000);
    
});
promiseOne.then(function () {
    console.log("Promise Consumed");
}).catch(function () {
    console.log('Promise catch');
})




const promiseTwo = new Promise((res,rej) => {
    if (true)
    {
        return res();    
    } else {
        return rej()
    }
});
promiseTwo.then(function () {
        
console.log(`------------- Promise Two --------`);
    console.log("I am boy");

    
}).catch (function() {
    console.log('I am Girl');
})



const promiseThree = new Promise((res, rej) => {
    setTimeout(function () {
        
console.log(`------------- Promise Three ---------`);
        res({username:"rushi" ,Email:"rushi123@gmail.com"})
    },1000)
    
})
promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise((res, rej) => {
    setTimeout(function () {
        

console.log(`------------- Promise Four -------`);
        let error = true;
        if (!error) {
            res({username:"rushi",age:23})
        }
        else {
            rej('Error: Something went wrong')
        }

    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise((res,rej) => {
    setTimeout(function () {
        console.log(`--------- Promise Five -----------`);
        let error = false;
        if (!error) {
            res({username:"JavaScript", password:"1234"})
        } else {
            rej("Error : JavaScript went Wrong")
        }
    },1000)
})

async function consumedPromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseFive();

async function consumedPromiseSix() {
    console.log(`----------- Promise six----------------`);
  try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Eroor:",error);
  }
}
consumedPromiseSix();