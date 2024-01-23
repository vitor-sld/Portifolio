comunicacao.onclick = () => {
    verificador(comunicacao);
    resolucao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    gestao.style.height = "75px";
    lideranca.style.height = "75px";
}

resolucao.onclick = () => {
    verificador(resolucao);
    comunicacao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    gestao.style.height = "75px";
    lideranca.style.height = "75px";
}

trabalhoEquipe.onclick = () => {
    verificador(trabalhoEquipe);
    comunicacao.style.height = "75px";
    resolucao.style.height = "75px";
    gestao.style.height = "75px";
    lideranca.style.height = "75px";
}

gestao.onclick = () => {
    verificador(gestao);
    comunicacao.style.height = "75px";
    resolucao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    lideranca.style.height = "75px";
}

lideranca.onclick = () => {
    verificador(lideranca);
    comunicacao.style.height = "75px";
    resolucao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    gestao.style.height = "75px";
}





function verificador (varVerificar){
    if (varVerificar.style.height == "75px"){
        varVerificar.style.height = "250px";
    }else{
        varVerificar.style.height = "75px";
    }
}


btMenu.onclick = () => {
    links.style.display = "block"
}

btClose.onclick = () => {
    links.style.display = "none"
}
navItem = document.querySelectorAll('.nav-link')
alert(navItem)

navItem.forEach(element => {
    element.addEventListener('click',() => {
        links.style.display = "none";
    })
});