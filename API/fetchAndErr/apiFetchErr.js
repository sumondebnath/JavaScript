// alert("hey");

// fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })


            // fetch with error.


fetch("https://fakestoreapi.com/products/1")
    .then((responce) => responce.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })