const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent = ""
const tempoObjetivo1= new Date(2024,8,11,22);
const tempoObjetivo2= new Date(2024,9,12,21);
const tempoObjetivo3= new Date(2024,10,13,20);
const tempoObjetivo4= new Date(2024,11,14,19);
let segundos;
let minutos;
let horas;
let dias;
const agora = new Date()
segundos = (tempoObjetivo1-agora)/1000 
minutos = segundos/60
horas = minutos/60
dias = horas
console.log(tempo);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
        for (let j = 0 ; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}

