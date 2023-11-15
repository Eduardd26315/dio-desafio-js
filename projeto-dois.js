let nome = ;
let quantiaDeXp;

while (true) {
    nome = prompt("Qual é o seu nome de herói?");

    if (/^[A-Za-z]+$/.test(nome)) {
        break;
    } else {
        alert("Por favor, insira um nome válido contendo apenas letras.");
    }
}


while (true) {
    quantiaDeXp = Number(prompt("Qual é o seu nível de XP?"));

    if (!isNaN(quantiaDeXp)) {
        break;
    } else {
        alert("Por favor, insira um valor numérico válido para a experiência.");
    }
}

let nivel;

switch (true) {
    case quantiaDeXp < 1000:
        nivel = "Ferro";
        break;
    case quantiaDeXp >= 1001 && quantiaDeXp <= 2000:
        nivel = "Bronze";
        break;
    case quantiaDeXp >= 2001 && quantiaDeXp <= 5000:
        nivel = "Prata";
        break;
    case quantiaDeXp >= 6001 && quantiaDeXp <= 7000:
        nivel = "Ouro";
        break;
    case quantiaDeXp >= 7001 && quantiaDeXp <= 8000:
        nivel = "Platina";
        break;
    case quantiaDeXp >= 8001 && quantiaDeXp <= 9000:
        nivel = "Ascendente";
        break;
    case quantiaDeXp >= 9001 && quantiaDeXp <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
        break;
}

alert(`O Herói de nome ${nome} está no nível de ${nivel}`);


alert(`O Herói de nome ${nome} está no nível de ${nivel}`);
