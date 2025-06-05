

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let idx = numbers.findIndex((currVal, currIndex, arr) =>{
    return currVal > 50;
});

console.log(idx);