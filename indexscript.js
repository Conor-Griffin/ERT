function toggleMenu() {

    const menu = document.getElementById("menu");
    const button = document.getElementById("menuButton");

    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        button.innerHTML = "☰";
    } else {
        button.innerHTML = "✕";
    }
}

function searchPage() {
    let text = document.getElementById("searchInput").value;

    if (text.length > 2) {
        window.find(text);
    }
}

function toggleSearch() {
    const searchBox = document.getElementById("searchInput");

    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block";
        searchBox.focus();
    } else {
        searchBox.style.display = "none";
    }
}
