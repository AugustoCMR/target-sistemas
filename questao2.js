let n1 = 0, n2 = 1, n3 = 0;
let verificaFibonacci = 34;

while (verificaFibonacci > n3) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
}

if (verificaFibonacci == n3) {
    console.log(`O número ${verificaFibonacci} está na sequência de fibonacci.`);
} else {
    console.log(`O número ${verificaFibonacci} não pertence a sequência de fibonacci`);
}


