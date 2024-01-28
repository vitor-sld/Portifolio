btMenu.onclick = () => {
    links.style.display = "block"
}

btClose.onclick = () => {
    links.style.display = "none"
}
navItem = document.querySelectorAll('.nav-link')
verificarTamanhoTela();
window.addEventListener('resize', verificarTamanhoTela);



function verificarTamanhoTela() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (larguraTela < 970) {
        navItem.forEach(element => {
            element.addEventListener('click',() => {
                links.style.display = "none";
            })
        });
    }
}

