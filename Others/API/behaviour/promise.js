// acording to this concept, this concept is API related and very important.


    // resolved.
const getData = new Promise(function(resolve, reject) {
    return resolve(20);
})

// console.log(getData);

getData.then((data) => {
    console.log(data);
})

    // reject
const GetData = new Promise((resolve, reject) => {
    return reject("No Data Found");
})

GetData.then((data) => {
    console.log(data);
}).catch((err) => console.log(err))



// upor ar same kaj jakhan fetch diye korte jai takhon res.json ke clg korle Promise ta pending hoy 

fetch("https://fakestoreapi.com/products/1")
    .then((res) => /**?console.log(res.json() */ res.json())
    .then((data) => console.log(data))

// if data cannot show in the output , we can used to the 
    .catch((err) => console.log(err))