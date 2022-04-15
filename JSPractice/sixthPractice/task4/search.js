function search() {
    var town = document.getElementById("searchText").value;

    let towns = document.getElementById('towns').children;

    for (let i = 0; i < towns.length; i++) {
        const element = towns[i];
        if (element.innerText === town) {
            element.style.fontWeight = "bold";
        }        
    }
    // towns[1].style.fontWeight = "bold";
}