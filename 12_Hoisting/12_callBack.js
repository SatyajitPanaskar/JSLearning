function jennyHomework(callback,callback2){
    console.log(`Jenny started assignment`);
    console.log(`Jenny took some time`);
    console.log(`Jenny Completed All her home work`);
    console.log(`Jenny calling back to stew`);
    callback();
    callback2();
}

let stewCopyHomework = function () {
    console.log(`---------------------------------------------------------`);
    console.log(`Thank you Jenny for giving me everything ready`);
    console.log(`Stew started copying`);
    console.log(`Stew copied all homework`);
}
let stewCopyHomework2 = function () {
    console.log(`---------------------------------------------------------`);
    console.log(`Thank you Jenny for giving me everything ready`);
    console.log(`Stew started copying`);
    console.log(`Stew copied all homework`);
}
jennyHomework(stewCopyHomework,stewCopyHomework2);