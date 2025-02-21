


const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) => showData(data));
}

const loadThumb = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/photos").then((res) => res.json()).then((data) => console.log(data))
}

const showData = (datas) => {
    const text = document.querySelector("#text");
    text.innerText = datas.length;
    const main = document.querySelector(".show-container");
    
    datas.forEach((data) => {
        console.log(data);
        const card = document.createElement("div");
        card.classList.add("card-box");
        card.innerHTML = `
            <h3> ID : ${data.id}</h3>
            <img src="" alt="Picture">
            <h4> Title : ${data.title}</h4>
            <p>Body : ${data.body}</p>
        `;
        main.appendChild(card);
    })
}