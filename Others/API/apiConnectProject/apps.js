

const loadData = (param) => {
    const searchText = document.getElementById("input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText?searchText:param}`).then((res) => res.json()).then((data) => displayData(data.meals));
};

const displayData = (data) =>{
    document.getElementById("total-meals").innerText = data.length;

    const mealsContainer = document.getElementById("meals-container");

    data.forEach((meal) => {
        console.log(meal);
        const card = document.createElement("div");
        card.classList.add("box-card")
        card.innerHTML = `
            <img class="box-img" src=${meal.strMealThumb} alt="">
            <h2 class="meal-title">${meal?.strMeal}</h2>
            <p>${meal.strInstructions.slice(0, 80)}</p>
            <button onclick="displayModal('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
            </button>
        `;
        mealsContainer.appendChild(card);
    })
};

const displayModal = async (id) => {
    try{
        const modalDetails = document.getElementById("modal-Details");
        const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await responce.json();
        // console.log(data.meals[0].strInstructions);
        modalDetails.innerText = data.meals[0].strInstructions;
    }
    catch{
        (err) => {
            console.log(err);
        }
    }
};


loadData("a");