const arrayNames = ["Stew", "Jenny", "Bill", "Larry", "Vivek"];

arrayNames.sort(); // Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse(); // Sorting in descending order
console.log(arrayNames);

const arrayNames1 = [34, 3, 5, 11, 21, 9, 42];
arrayNames1.sort((n1,n2) => {
     return n1 < n2 ? 1 : -1;
    
});
console.log(arrayNames1);

