let nome = prompt("Qual é o seu nome de herói?");
let quantiaDeXp;

while (true) {
    quantiaDeXp = Number(prompt("Qual é o seu nível de XP?"));

    if (!isNaN(quantiaDeXp)) {
        break;
    } else {
        alert("Por favor, insira um valor numérico válido para a experiência.");
    }
}

let nivel;

if (quantiaDeXp < 1000) {
    nivel = "Ferro";
} else if (quantiaDeXp >= 1001 && quantiaDeXp <= 2000) {
    nivel = "Bronze";
} else if (quantiaDeXp >= 2001 && quantiaDeXp <= 5000) {
    nivel = "Prata";
} else if (quantiaDeXp >= 6001 && quantiaDeXp <= 7000) {
    nivel = "Ouro";
} else if (quantiaDeXp >= 7001 && quantiaDeXp <= 8000) {
    nivel = "Platina";
} else if (quantiaDeXp >= 8001 && quantiaDeXp <= 9000) {
    nivel = "Ascendente";
} else if (quantiaDeXp >= 9001 && quantiaDeXp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

alert(`O Herói de nome ${nome} está no nível de ${nivel}`);







