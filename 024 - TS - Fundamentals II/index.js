"use strict";
// 1 -> arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers); // [1, 2, 3, 5]
console.log(numbers[2]); // 3
const names = ['Rafael', 'Gabriel'];
console.log(names); // ['Rafael', 'Gabriel']
// 2-> outra sintaxe para array
let numeros = [10, 20, 30, 40, 50];
console.log(numeros); // [10, 20, 30, 40, 50]
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas); // ['maçã', 'banana', 'laranja']
// 3 -> any
const arr1 = [1, "teste", true, []]; // [1, 'teste', true, Array(0)]
console.log(arr1);
// 4 -> paramtros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 10); // 15
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
let mensagem = saudacao("Satoshi Nakamoto");
console.log(mensagem); // Olá, Satoshi Nakamoto!
function duplicar(numero) {
    return numero * 2;
}
console.log(duplicar(5)); // 10
function estaAtivo(estado) {
    return estado ? "Ativo" : "Inativo";
}
console.log(estaAtivo(false)); // Ativo
console.log(estaAtivo(true)); // Inativo
// parametros opcionais
function saudacao2(nome, sobrenome) {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    }
    else {
        return `Olá, ${nome}!`;
    }
}
let mensagem2 = saudacao2("Satoshi");
console.log(mensagem2); // Olá, Satoshi!
let mensagemCompleta = saudacao2("Satoshi", "Nakamoto");
console.log(mensagemCompleta); // Olá, Satoshi Nakamoto!
// paramtros padrao
function saudacao3(nome, sobrenome = "Nakamoto") {
    return `Olá, ${nome} ${sobrenome}!`;
}
let mensagem3 = saudacao3("Satoshi");
console.log(mensagem3); // Olá, Satoshi Nakamoto!
let mensagemCompleta3 = saudacao3("Satoshi", "Nakamoto");
console.log(mensagemCompleta3); // Olá, Satoshi Nakamoto!
// funcao anonima
// Função anônima atribuída a uma variável
let saudacao4 = function (nome) {
    return `Olá, ${nome}!`;
};
// Utilização da função anônima
let mensagem4 = saudacao("Rafael");
console.log(mensagem4); // Olá, Rafael!
let dobrar = (x) => x * 2;
// Utilização da arrow function
let resultado = dobrar(5);
console.log(resultado); // 10
// tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 123, y: 789 };
passCoordinates(objCoord);
// X coordinates: 123
// Y coordinates: 789
// props opcionais
function showNumbers(a, b, c) {
    console.log(a, b, c);
}
showNumbers(1, 2, 3); // 1 2 3
showNumbers(4, 5); // 4 5 undefined
// validando paramtros opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}! Tudo bem?`;
    }
    return `Olá, ${firstName}! Tudo bem?`;
}
console.log(advancedGreeting("Satoshi", "Nakamoto")); // Olá, Satoshi Nakamoto! Tudo bem?
console.log(advancedGreeting("Rafael")); // Olá, Rafael! Tudo bem?
// union types
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100); // O saldo da conta é R$100
showBalance("200"); // O saldo da conta é R$200
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(123); // O ID é: 123
showId('456'); // O ID é: 456
let usuario = {
    nome: "Rafael",
    idade: 10,
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};
console.log(usuario.saudacao()); // Olá, meu nome é Rafael e tenho 10 anos.
const somePerson = { name: "Rafael", age: 10 };
console.log(somePerson); // {name: 'Rafael', age: 10}
/* ERROR
type PersonX = {
    name: string
}

type PersonX = {
    age: number

}
*/
// literal types
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left"); // A direção é: left
// showDirection("back") ERRO
showDirection("center"); // A direção é: center
// bigInt
// mudar target no tsconfig.json para ES2020
let n;
n = 1000n;
console.log(n); // 1000n
console.log(typeof n); // bigint
