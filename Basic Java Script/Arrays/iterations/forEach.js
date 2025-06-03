
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function func(n){
    console.log(n*n);
}

arr.forEach(func);



function my_func(val, idx, arr){
    console.log(val);
    console.log(idx);
    console.log(arr);
}

arr.forEach(my_func)