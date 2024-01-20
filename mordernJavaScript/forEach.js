

const products = [
    {id:1, Name:"abc", color:"red"},
    {id:2, Name:"cde", color:"white"},
    {id:3, Name:"efg", color:"blue"},
    {id:4, Name:"ghi", color:"green"},
    {id:5, Name:"ijk", color:"gray"}
];

const productContainer = document.getElementById("product-container");
const product = products.forEach((pd) => {
    console.log(pd);
    const h1 = document.createElement("h1");
    h1.innerText = `${pd.Name} : ${pd.color}`;
    productContainer.appendChild(h1);
});