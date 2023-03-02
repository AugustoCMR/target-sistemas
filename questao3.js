const dados = require("./dados.json");

let menorValor = dados[0].valor, maiorValor = dados[0].valor;

let soma = 0;
let media = 0;
let somaZero = 0;
let somaDias = 0;

for (let i = 0; i < dados.length; i++) {
    // console.log(dados[i].valor);
    soma += dados[i].valor;

    if (dados[i].valor > maiorValor) {
        maiorValor = dados[i].valor;

    }

    if (dados[i].valor > 0.0) {
        if (dados[i].valor < menorValor) {
            menorValor = dados[i].valor;
        }
    }

}

console.log(`O maior valor de faturamento ocorrido em um dia do mês é de R$${maiorValor}`);
console.log(`O menor valor de faturamento ocorrido em um dia do mês é de R$${menorValor}`);

for (let i = 0; i < dados.length; i++) {

    if (dados[i].valor > 0.0) {
        somaZero++
        media = soma / somaZero;
    }
}



for (let i = 0; i < dados.length; i++) {

    if (dados[i].valor > media) {
        somaDias++
    }
}

console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é de ${somaDias} dias, segue relação:`);

for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor > media) {
        console.log(`${dados[i].dia}: ${dados[i].valor}`)

    }
}

