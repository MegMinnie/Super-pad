const botaoUm = document.querySelector("#um");
const botaoDois = document.querySelector("#dois");
const botaoTres = document.querySelector("#tres");
const botaoQuatro = document.querySelector("#quatro");
const botaoCinco = document.querySelector("#cinco");
const botaoSeis = document.querySelector("#seis");
const botaoSete = document.querySelector("#sete");
const botaoOito = document.querySelector("#oito");
const botaoNove = document.querySelector("#nove");

const audioDo = new Audio("assets/Sons/1-dó.mp3");
const audioRé = new Audio("assets/Sons/1-ré.mp3");
const audioMi = new Audio("assets/Sons/1-mi.mp3");
const audioFá = new Audio("assets/Sons/1-fá.mp3");
const audioSol = new Audio("assets/Sons/1-sol.mp3");
const audioLá = new Audio("assets/Sons/1-lá.mp3");
const audioSi = new Audio("assets/Sons/1-si.mp3");
const audioC = new Audio("assets/Sons/2-dó.mp3");
const audioD = new Audio("assets/Sons/2-ré.mp3");

botaoUm.addEventListener("click", function () {
  audioDo.play();
});

botaoDois.addEventListener("click", function () {
  audioRé.play();
});

botaoTres.addEventListener("click", function () {
  audioMi.play();
});

botaoQuatro.addEventListener("click", function () {
  audioFá.play();
});

botaoCinco.addEventListener("click", function () {
  audioSol.play();
});

botaoSeis.addEventListener("click", function () {
  audioLá.play();
});

botaoSete.addEventListener("click", function () {
  audioSi.play();
});

botaoOito.addEventListener("click", function () {
  audioC.play();
});

botaoNove.addEventListener("click", function () {
  audioD.play();
});
