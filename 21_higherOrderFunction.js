
function greet(callback) {
    console.log('Good Morning');
    callback();
    let inner = function () {
        console.log(`THank you, I am Fine.....`);
    }
    return inner;
}
function inquire() {
    console.log('how are you......');
    fo
}
greet(inquire)();