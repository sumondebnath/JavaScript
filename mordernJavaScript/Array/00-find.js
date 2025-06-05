    // Find Using arrow Functions

const name = ["sumon", "manu", "Sumon", "Manu", "sumon"];

const nam = name.find((s) => s != "Sumon");
console.log(nam);


    // Find Using Normal function

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let num = numbers.find(function(currVal, currIndex, arr){
    return currVal > 80;
});

console.log(num);


    // Function using inside find with arrow function.

function findTaget(numbers, target){
    return numbers.find((num) => num === target);
}
let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let result = findTaget(number, 90);

console.log(result);