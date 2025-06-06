

let numbers = [10, 20, 30, 40, 50, 60];

let [a, b] = numbers;
console.log(a, b);      // o/p = 10, 20

let [, x, , , , y] = numbers;
console.log(x, y);      // o/p = 20, 60



    // Nested array destructuring

let arr = [10, 20, 30, [40, 100, 200, [1000, 2000]], 60, 70];

let [, , , [, i, j, [m, n]]] = arr;

console.log(i, j, m, n);



    // Number Swaping

let u = 111;
let v = 222;

[v, u] = [u, v];
console.log(u, v);