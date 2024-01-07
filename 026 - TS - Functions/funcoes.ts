// 1 - void

function withoutReturn():void {
    console.log("Esta função não tem retorno!");
}

withoutReturn();

// 2 - coallback como argumento

function operacao(callback: () => void): void {
    // simulando uma operação assincrona
    setTimeout(() => {
        console.log("Operação assíncrona concluída!");
        callback(); // chamando o callback
    }, 3000);
}

operacao(() => {
    console.log("Callback executado!");
});

// 3 - generic funcions

function exibirValor<T>(valor:T): void {
    console.log(`O valor é ${valor}`);
}

exibirValor(100);

// Função genérica simples para exibir dois valores
function exibirValores<T, U>(valor1: T, valor2: U): void {
    console.log(`Valor 1: ${valor1}`);
    console.log(`Valor 2: ${valor2}`);
}

// Exemplo de uso com números e strings
exibirValores(42, "Olá, TypeScript!");



//  4 constraints  nas generic functions

// Função genérica para obter o maior número
function obterMaior<T extends number>(valor1: T, valor2: T): T {
    return valor1 > valor2 ? valor1 : valor2;
}

// Exemplo de uso com números
const maiorNumero = obterMaior(10, 7);
console.log(`O maior número é: ${maiorNumero}`);


// 5 - definir o tipo de parametros

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1,2,3], [5,6,7])); // [1, 2, 3, 5, 6, 7]
console.log(mergeArrays<number | string>([1,2,3], ['apple', 'banana'])); // [1, 2, 3, 'apple', 'banana']


// 6 - parametros opcionais

// Função com parâmetro opcional
function saudacao(nome: string, saudacaoPersonalizada?: string): string {
    if (saudacaoPersonalizada) {
        return `${saudacaoPersonalizada}, ${nome}! Tudo bem?`;
    } else {
        return `Olá, ${nome}!`;
    }
}

// Exemplos de uso
const saudacaoPadrao = saudacao("Rafael");
console.log(saudacaoPadrao);  // Saída: "Olá, Rafael!"

const saudacaoCustomizada = saudacao("Rafael", "Oi");
console.log(saudacaoCustomizada);  // Saída: "Oi, Rafael! Tudo bem?"


// 7 - parametros default

// Função com parâmetros padrão
function saudacao1(nome1: string, saudacaoPersonalizada1: string = "Olá"): string {
    return `${saudacaoPersonalizada1}, ${nome1}!`;
}

// Exemplos de uso
const saudacaoPadrao1 = saudacao1("Rafael");
console.log(saudacaoPadrao1);  // Saída: "Olá, Rafael!"

const saudacaoCustomizada1 = saudacao1("Rafael", "Oi");
console.log(saudacaoCustomizada1);  // Saída: "Oi, Rafael!"

// 8 unknown

let valorDesconhecido: unknown;

valorDesconhecido = 10;
//let numero: number = valorDesconhecido; // Erro, pois não é seguro atribuir diretamente

if (typeof valorDesconhecido === 'number') {
    let numero: number = valorDesconhecido; // Agora é seguro
    console.log(`O número é ${numero}`);
}

// 9 - never

function showErrorMessage(msg:string): never {
    throw new Error(msg);
}

//showErrorMessage('Houve um erro!'); // Uncaught Error: Houve um erro!

// 10 rest operator

// Função que aceita um número variável de argumentos
function somar(...numeros: number[]): number {
    return numeros.reduce((total, numero) => total + numero, 0);
}

// Exemplos de uso
const resultado1 = somar(1, 2, 3);
console.log(resultado1); // Saída: 6

const resultado2 = somar(10, 20, 30, 40, 50);
console.log(resultado2); // Saída: 150


// 11 - destructuring como parametros

// Função que recebe um objeto como parâmetro e usa desestruturação
function exibirDetalhesPessoa({ nome, idade }: { nome: string, idade: number }): void {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

// Chamada da função com um objeto
const pessoa = { nome: "Rafael", idade: 25 };
exibirDetalhesPessoa(pessoa);
// Saída: Nome: Rafael, Idade: 25

// Função que recebe um array como parâmetro e usa desestruturação
function exibirNumeros([primeiro, segundo]: number[]): void {
    console.log(`Primeiro: ${primeiro}, Segundo: ${segundo}`);
}

// Chamada da função com um array
const numeros = [10, 20];
exibirNumeros(numeros);
// Saída: Primeiro: 10, Segundo: 20

// Função com desestruturação e valores padrão
function exibirDetalhesProduto({ nome, preco = 0 }: { nome: string, preco?: number }): void {
    console.log(`Produto: ${nome}, Preço: ${preco}`);
}

// Chamada da função com objeto incompleto
const produto = { nome: "Notebook" };
exibirDetalhesProduto(produto);
// Saída: Produto: Notebook, Preço: 0
