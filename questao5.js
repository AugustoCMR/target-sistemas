let string = "Augusto";

let inverteString = "";
console.log(string.length);

for (let i = string.length - 1; i >= 0; i--) {
    inverteString += string[i];
}

console.log(inverteString);