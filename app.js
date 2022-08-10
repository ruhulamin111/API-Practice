// search button handle 
const searchButton = document.getElementById('search-button').addEventListener('click', function (event) {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    loadData(searchText);
})
const loadData = input => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    console.log(url)
}