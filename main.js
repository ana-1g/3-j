const botoes = document.querySelectorAll(".botao")
console.log(botoes)
for (let i = 0; 1 < botoes.length ; i++){
    console.log(botoes[i]) {
        for (j=0;<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
    }
}