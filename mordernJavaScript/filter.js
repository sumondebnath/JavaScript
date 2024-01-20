

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