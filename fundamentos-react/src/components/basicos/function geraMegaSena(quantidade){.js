function geraMegaSena(quantidade){
    var colecao = [0];

    if(quantidade < 6){ quantidade = 6; }
    if(quantidade > 60){ quantidade = 60; }

    for(i=0;i<quantidade;i++){
        var aleatorio = parseInt(Math.random() * (60) + 1);
        var limite = colecao.length;
        var comparativo = true;

        for(j=0;j<limite;j++){
            var numeroDaColecao = colecao[j];
            comparativo = comparativo & (numeroDaColecao != aleatorio);
        }

        if(comparativo){
            colecao[i] = aleatorio;
        } else {
            i = i - 1;
        }
    }
    return colecao.sort();
}

console.log(geraMegaSena(60))