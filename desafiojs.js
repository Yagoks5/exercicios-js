let nomeHeroi = "Yogo";
let xp = 15000;

if (xp <= 1000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Ferro");
} else if (xp >= 1001.1 && xp <= 2000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Bronze");
} else if (xp >= 2001.1 && xp <= 5000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Prata");
} else if (xp >= 6001.1 && xp <= 7000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Ouro");
} else if (xp >= 7001.1 && xp <= 8000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Platina");
} else if (xp >= 8001.1 && xp <= 9000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Ascendente");
} else if (xp >= 9001.1 && xp <= 10000) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Imortal");
} else if (xp >= 10000.01) {
  console.log("O herói de nome " + nomeHeroi + " está no nível Radiante");
}
