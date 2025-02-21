var arr = [2, 5, 4, 3, 1, 11, 20, 19, 15, 14, 6, 9, 8, 12, 17];

console.log(arr.sort(function(a, b){
    return a-b;
    // return b-a;
}));