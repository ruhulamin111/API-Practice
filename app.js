// search button handle 
const searchButton = document.getElementById('search-button').addEventListener('click', function (event) {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    if (searchText.length == 0) {
        return
    }
    loadData(searchText);
})
const loadData = async input => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.meals)

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayData(data.meals))
}

const displayData = data => {
    const displayItems = document.getElementById('display-items');
    displayItems.textContent = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${item.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
            </div>
            <div class="card-footer">
                <button onclick="itemDetails(${item.idMeal})" class="bg-info border-0 px-2 py-1 rounded">Details</button>
            </div>
        </div>
        `;
        displayItems.appendChild(div);
    })

}
const itemDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayItemDetails(data.meals[0]))
}
const displayItemDetails = meal => {
    const displayDetails = document.getElementById('item-details')
    displayDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
    <div class="card-footer">
    <a href="${meal.strYoutube}" class="px-2 py-1 bg-danger text-white rounded text-decoration-none">Go to Youtube</a>
    </div>
</div>
`;
    displayDetails.appendChild(div);
}

