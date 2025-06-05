
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [one, two, three, four, five, six, seven, eight, nine, ten] = nums;

console.log(one);
console.log(typeof three);
console.log(Array.isArray(nums));       // find typeof 

// if we create destructure of array its value assigning step by step

const Names = ["Sumon", "Deb", "Nath", "Manu"];
const [first, third, fourth, second] = Names;

console.log(first);
console.log(second);