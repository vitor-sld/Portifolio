comunicacao.onclick = () => {
    verificador(comunicacao);
    resolucao.classList.remove("collapseOpen");
    trabalhoEquipe.classList.remove("collapseOpen");
    gestao.classList.remove("collapseOpen");
    lideranca.classList.remove("collapseOpen");
}

resolucao.onclick = () => {
    verificador(resolucao);
    comunicacao.classList.remove("collapseOpen");
    trabalhoEquipe.classList.remove("collapseOpen");
    gestao.classList.remove("collapseOpen");
    lideranca.classList.remove("collapseOpen");
}

trabalhoEquipe.onclick = () => {
    verificador(trabalhoEquipe);
    comunicacao.classList.remove("collapseOpen");
    resolucao.classList.remove("collapseOpen");
    gestao.classList.remove("collapseOpen");
    lideranca.classList.remove("collapseOpen");
}

gestao.onclick = () => {
    verificador(gestao);
    comunicacao.classList.remove("collapseOpen");
    resolucao.classList.remove("collapseOpen");
    trabalhoEquipe.classList.remove("collapseOpen");
    lideranca.classList.remove("collapseOpen");
}

lideranca.onclick = () => {
    verificador(lideranca);
    comunicacao.classList.remove("collapseOpen");
    resolucao.classList.remove("collapseOpen");
    trabalhoEquipe.classList.remove("collapseOpen");
    gestao.classList.remove("collapseOpen");
}



function verificador(varVerificar) {
    if (varVerificar.classList.contains("collapseOpen")) {
        varVerificar.classList.remove("collapseOpen");
    } else {
        varVerificar.classList.add("collapseOpen");
    }
}