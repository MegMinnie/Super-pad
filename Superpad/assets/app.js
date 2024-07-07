const botaoUm = document.querySelector("#um");
const botaoDois = document.querySelector("#dois");
const botaoTres = document.querySelector("#tres");
const botaoQuatro = document.querySelector("#quatro");
const botaoCinco = document.querySelector("#cinco");
const botaoSeis = document.querySelector("#seis");
const botaoSete = document.querySelector("#sete");
const botaoOito = document.querySelector("#oito");
const botaoNove = document.querySelector("#nove");
const container = document.querySelector(".container");

botaoUm.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1do.mp3");
  audio.play();
});

botaoDois.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1re.mp3");
  audio.play();
});

botaoTres.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1mi.mp3");
  audio.play();
});

botaoQuatro.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1fa.mp3");
  audio.play();
});

botaoCinco.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1sol.mp3");
  audio.play();
});

botaoSeis.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1la.mp3");
  audio.play();
});

botaoSete.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/1si.mp3");
  audio.play();
});

botaoOito.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/2do.mp3");
  audio.play();
});

botaoNove.addEventListener("click", () => {
  const audio = new Audio("assets/Sons/2re.mp3");
  audio.play();
});

container.addEventListener("keypress", (event) => {
  const tecla = event.key;

  switch (tecla) {
    case "s":
      botaoUm.click();
      botaoUm.style.backgroundColor = "#d144b4";
      setTimeout(() => {
        botaoUm.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "d":
      botaoDois.click();
      botaoDois.style.backgroundColor = "#4d66ec";
      setTimeout(() => {
        botaoDois.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "j":
      botaoTres.click();
      botaoTres.style.backgroundColor = "#d144b4";
      setTimeout(() => {
        botaoTres.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "x":
      botaoQuatro.click();
      botaoQuatro.style.backgroundColor = "#4995ed";
      setTimeout(() => {
        botaoQuatro.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "c":
      botaoCinco.click();
      botaoCinco.style.backgroundColor = "#60d6f8";
      setTimeout(() => {
        botaoCinco.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "k":
      botaoSeis.click();
      botaoSeis.style.backgroundColor = "#4892ea";
      setTimeout(() => {
        botaoSeis.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "v":
      botaoSete.click();
      botaoSete.style.backgroundColor = "#9130c9";
      setTimeout(() => {
        botaoSete.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "n":
      botaoOito.click();
      botaoOito.style.backgroundColor = "#4d66ec";
      setTimeout(() => {
        botaoOito.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "m":
      botaoNove.click();
      botaoNove.style.backgroundColor = "#9130c9";
      setTimeout(() => {
        botaoNove.style.backgroundColor = "inherit";
      }, 200);
  }
});
