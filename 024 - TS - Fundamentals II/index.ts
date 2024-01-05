// 1 -> arrays

let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers); // [1, 2, 3, 5]
console.log(numbers[2]); // 3

const names:string[] = ['Rafael', 'Gabriel'];
console.log(names); // ['Rafael', 'Gabriel']

// 2-> outra sintaxe para array
let numeros: Array<number> = [10, 20, 30, 40, 50];
console.log(numeros); // [10, 20, 30, 40, 50]
let frutas: Array<string> = ["maçã", "banana", "laranja"];
console.log(frutas); // ['maçã', 'banana', 'laranja']

// 3 -> any

const arr1: any = [1, "teste", true, []]; // [1, 'teste', true, Array(0)]
console.log(arr1);

// 4 -> paramtros tipados

function soma(a:number, b:number) {
    console.log(a + b);
}
soma(5,10); // 15

function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

let mensagem: string = saudacao("Satoshi Nakamoto");
console.log(mensagem); // Olá, Satoshi Nakamoto!

function duplicar(numero: number): number {
    return numero * 2;
}

console.log(duplicar(5)); // 10

function estaAtivo(estado: boolean): string {
    return estado ? "Ativo" : "Inativo";
}

console.log(estaAtivo(false)); // Ativo
console.log(estaAtivo(true)); // Inativo

// parametros opcionais

function saudacao2(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    } else {
        return `Olá, ${nome}!`;
    }
}

let mensagem2: string = saudacao2("Satoshi");
console.log(mensagem2); // Olá, Satoshi!
let mensagemCompleta: string = saudacao2("Satoshi", "Nakamoto");
console.log(mensagemCompleta); // Olá, Satoshi Nakamoto!

// paramtros padrao

function saudacao3(nome: string, sobrenome: string = "Nakamoto"): string {
    return `Olá, ${nome} ${sobrenome}!`;
}

let mensagem3: string = saudacao3("Satoshi");
console.log(mensagem3); // Olá, Satoshi Nakamoto!
let mensagemCompleta3: string = saudacao3("Satoshi", "Nakamoto");
console.log(mensagemCompleta3); // Olá, Satoshi Nakamoto!

// funcao anonima

// Função anônima atribuída a uma variável
let saudacao4 = function(nome: string): string {
    return `Olá, ${nome}!`;
};

// Utilização da função anônima
let mensagem4: string = saudacao("Rafael");
console.log(mensagem4); // Olá, Rafael!

let dobrar = (x: number): number => x * 2;

// Utilização da arrow function
let resultado: number = dobrar(5);
console.log(resultado); // 10

// tipos de objeto

function passCoordinates(coord: {x:number, y:number}) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = {x:123, y:789};
passCoordinates(objCoord); 
// X coordinates: 123
// Y coordinates: 789

// props opcionais
function showNumbers(a:number, b:number, c?:number) {
    console.log(a, b, c);
}
showNumbers(1,2,3); // 1 2 3
showNumbers(4,5); // 4 5 undefined

// validando paramtros opcionais

function advancedGreeting(firstName:string, lastName?:string) {
    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}! Tudo bem?`;
    }
    return `Olá, ${firstName}! Tudo bem?`;
}

console.log(advancedGreeting("Satoshi","Nakamoto")); // Olá, Satoshi Nakamoto! Tudo bem?
console.log(advancedGreeting("Rafael")); // Olá, Rafael! Tudo bem?

// union types

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100); // O saldo da conta é R$100
showBalance("200"); // O saldo da conta é R$200

// type alias

type ID = string | number;

function showId(id: ID) {
    console.log(`O ID é: ${id}`);
}
showId(123); // O ID é: 123
showId('456'); // O ID é: 456

// interface

interface Pessoa {
    nome: string;
    idade: number;
    saudacao(): string;
}

let usuario: Pessoa = {
    nome: "Rafael",
    idade: 10,
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(usuario.saudacao()); // Olá, meu nome é Rafael e tenho 10 anos.

// interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Rafael", age: 10}
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

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}
showDirection("left"); // A direção é: left
 // showDirection("back") ERRO
showDirection("center"); // A direção é: center


// bigInt
// mudar target no tsconfig.json para ES2020

let n:bigint;
n = 1000n;
console.log(n); // 1000n
console.log(typeof n); // bigint


