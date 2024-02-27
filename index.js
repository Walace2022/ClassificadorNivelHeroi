//inicio
const prompt = require("prompt-sync")();

let jogador = "";
let expJogador = 0;
let jogando = true;

jogador = prompt("Qual seu nome? ");
console.log("Ola " + jogador);

do {
  console.log("\n" + jogador + " está no nivel " + Classificador(expJogador));
  let jogar = prompt("Matar monstros? s/n");
  if (jogar === "s") {
    MatarMonstros();
  } else {
    jogando = false;
  }
  console.clear();
} while (jogando);

console.log(
  "O herói " +
    jogador +
    " chegou ao fim de sua aventura no nível " +
    Classificador(expJogador)
);

function Classificador(exp) {
  if (exp <= 1000) {
    return "Ferro";
  }
  if (exp <= 2000) {
    return "Bronze";
  }
  if (exp <= 5000) {
    return "Prata";
  }
  if (exp <= 7000) {
    return "Ouro";
  }
  if (exp <= 8000) {
    return "Platina";
  }
  if (exp <= 9000) {
    return "Ascendente";
  }
  if (exp <= 10000) {
    return "Imortal";
  }
  return "Radiante";
}
function MatarMonstros() {
  expJogador += 1000;
}
