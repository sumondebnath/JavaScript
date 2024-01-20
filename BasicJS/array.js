

var arr = [1, 2, 3, 4, [6, 7, 8]];

console.log(arr.length);
console.log(arr[4]);

var arr2 = [];

arr2.push(2);       // append to the last index.
arr2.push(3);       
arr2.pop();         // delete from the last index.
arr2.unshift(1);    // append to the first index.
arr2.shift();       // delete from the first index.

var arr3 = [4, 5];

var arr4 = arr2.concat([4, 5, 6]);      // concat array

// console.log(arr2.concat(arr3))

console.log(arr4);                      // concat array print

console.log(arr4.reverse());            // reverse array.

console.log(arr4.slice(1, 3));          // slice array.