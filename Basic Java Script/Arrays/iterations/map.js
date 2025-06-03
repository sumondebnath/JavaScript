
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function func(n){
    return n*n;
}

const newArr = arr.map(func);

console.log(newArr);