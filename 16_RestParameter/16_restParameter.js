
function add(num1, num2, ...num) {
   
     let sum = num1 + num2;
    for (const element of num) {
        sum = sum + element;
    }

    console.log(`${num1} Addtion of Number: ${sum}`);  
}

add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45, 78, 90, 51, 68);

 