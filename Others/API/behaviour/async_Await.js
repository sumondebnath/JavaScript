

const loadData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    // console.log(res.json());
    const data = await res.json();
    console.log(data);
}

loadData();



    // if we need to error handle.

const LoadData = async () => {
    try{
        const responce = await fetch("https://fakestoreapi.com/products/1");
        const data = await responce.json();
        console.log(data)
    }
    catch{
        (err) => {
            console.log(err);
        }
    }
}

LoadData();