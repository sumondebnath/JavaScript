

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let result = numbers.reduce((prevVal, currVal)=>{
    return prevVal + currVal;
}, 0); // 0 is the Initial value.

console.log(result);