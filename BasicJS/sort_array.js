

var arr = [2, 5, 4, 3, 1, 11, 20, 19, 15, 14, 6, 9, 8, 12, 17];

console.log(arr.sort(function(a, b){
    return a-b;
    // return b-a;
}));


// two pointer methode.

// var arr = [2, 5, 4, 3, 1, 11, 20, 19, 15, 14, 6, 9, 8, 12, 17];

// for(var i=0; i<arr.length-1; i++) {
//     for(var j=i+1; j<arr.length; j++) {
//         if(arr[i] > arr[j]) {
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

