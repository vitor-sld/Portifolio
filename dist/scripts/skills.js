comunicacao.onclick = () => {
    resolucao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    gestao.style.height = "75px";
    lideranca.style.height = "75px";
    verificador(comunicacao);
}

resolucao.onclick = () => {
    comunicacao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    gestao.style.height = "75px";
    lideranca.style.height = "75px";
    verificador(resolucao);
}

trabalhoEquipe.onclick = () => {
    comunicacao.style.height = "75px";
    resolucao.style.height = "75px";
    gestao.style.height = "75px";
    lideranca.style.height = "75px";
    verificador(trabalhoEquipe);
}

gestao.onclick = () => {
    comunicacao.style.height = "75px";
    resolucao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    lideranca.style.height = "75px";
    verificador(gestao);
}

lideranca.onclick = () => {
    comunicacao.style.height = "75px";
    resolucao.style.height = "75px";
    trabalhoEquipe.style.height = "75px";
    gestao.style.height = "75px";
    verificador(lideranca);
}





function verificador (varVerificar){
    if (varVerificar.style.height != "75px"){
        varVerificar.style.height = "75px"
    }else{
        varVerificar.style.height = "250px"
    }
}

