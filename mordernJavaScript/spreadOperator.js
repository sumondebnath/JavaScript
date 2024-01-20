

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

    // now spread operator.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(...num);

let copy = [...arr, ...num];

console.log(...copy);


// find maximum number in the array.

console.log(Math.max(...num));