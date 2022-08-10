// search button handle 
const searchButton = document.getElementById('search-button').addEventListener('click', function (event) {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    loadData(searchText);
})
const loadData = input => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}
const displayData = data => {
    const displayItems = document.getElementById('display-items');
    data.forEach(item => {
        console.log(item)
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
                <button class="">Details</button>
            </div>
        </div>
        `;
        displayItems.appendChild(div);
    })

}