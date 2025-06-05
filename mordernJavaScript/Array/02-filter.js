    // Filtered by list of object.

const products = [
    {id:1, Name:"abc", color:"red"},
    {id:2, Name:"cde", color:"white"},
    {id:3, Name:"efg", color:"blue"},
    {id:4, Name:"ghi", color:"green"},
    {id:5, Name:"ijk", color:"gray"}
];

const product = products.filter((pd) => console.log(pd.color));

const product2 = products.filter((pd) => pd.color == "blue");
console.log(product2);


    // Filtered by List of numbers

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let result = numbers.filter((currVal, currIndex, arr)=>{
    return currVal >= 20;
});

console.log(result);