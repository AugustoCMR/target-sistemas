
const estados = [
    {
        "estado": "sp",
        "faturamento": 67836.43,

    },
    {
        "estado": "rj",
        "faturamento": 36678.66,

    },
    {

        "estado": "mg",
        "faturamento": 29229.88,
    },
    {

        "estado": "es",
        "faturamento": 27165.48,

    },

    {
        "estado": "outros",
        "faturamento": 19849.53,

    },
]

let somaTotal = 0;
let calculaPorcentagem = 0;

for (let i = 0; i < estados.length; i++) {
    somaTotal += estados[i].faturamento;

}

for (let i = 0; i < estados.length; i++) {
    calculaPorcentagem = estados[i].faturamento / somaTotal * 100;
    console.log(`${estados[i].estado}: ${calculaPorcentagem.toFixed(2)}%`);

}




