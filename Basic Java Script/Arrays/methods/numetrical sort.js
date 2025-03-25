

const points = [40, 100, 1, 5, 25, 10];

//This works well for strings
points.sort();
console.log(points);

// this sort well for asending order
points.sort(function(a, b){return a - b});
console.log(points);

// This sort well for desending order
points.sort(function(a, b){return b - a});
console.log(points);