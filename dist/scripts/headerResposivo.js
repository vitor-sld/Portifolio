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

    // JavaScript para rolar para a seção correspondente ao clicar no link
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.nav-link').forEach(function(anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

