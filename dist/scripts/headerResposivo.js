btMenu.onclick = () => {
    links.style.display = "block"
}

btClose.onclick = () => {
    links.style.display = "none"
}
navItem = document.querySelectorAll('.nav-link')

navItem.forEach(element => {
    element.addEventListener('click',() => {
        links.style.display = "none";
    })
});