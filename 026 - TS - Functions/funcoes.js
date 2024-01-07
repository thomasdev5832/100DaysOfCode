// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - coallback como argumento
function operacao(callback) {
    // simulando uma operação assincrona
    setTimeout(function () {
        console.log("Operação assíncrona concluída!");
        callback(); // chamando o callback
    }, 3000);
}
operacao(function () {
    console.log("Callback executado!");
});
// 3 - generic funcions
function exibirValor(valor) {
    console.log("O valor \u00E9 ".concat(valor));
}
exibirValor(100);
// Função genérica simples para exibir dois valores
function exibirValores(valor1, valor2) {
    console.log("Valor 1: ".concat(valor1));
    console.log("Valor 2: ".concat(valor2));
}
// Exemplo de uso com números e strings
exibirValores(42, "Olá, TypeScript!");
//  4 constraints  nas generic functions
// Função genérica para obter o maior número
function obterMaior(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2;
}
// Exemplo de uso com números
var maiorNumero = obterMaior(10, 7);
console.log("O maior n\u00FAmero \u00E9: ".concat(maiorNumero));
// 5 - definir o tipo de parametros
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6, 7])); // [1, 2, 3, 5, 6, 7]
console.log(mergeArrays([1, 2, 3], ['apple', 'banana'])); // [1, 2, 3, 'apple', 'banana']
// 6 - parametros opcionais
// Função com parâmetro opcional
function saudacao(nome, saudacaoPersonalizada) {
    if (saudacaoPersonalizada) {
        return "".concat(saudacaoPersonalizada, ", ").concat(nome, "! Tudo bem?");
    }
    else {
        return "Ol\u00E1, ".concat(nome, "!");
    }
}
// Exemplos de uso
var saudacaoPadrao = saudacao("Rafael");
console.log(saudacaoPadrao); // Saída: "Olá, Rafael!"
var saudacaoCustomizada = saudacao("Rafael", "Oi");
console.log(saudacaoCustomizada); // Saída: "Oi, Rafael! Tudo bem?"
// 7 - parametros default
// Função com parâmetros padrão
function saudacao1(nome1, saudacaoPersonalizada1) {
    if (saudacaoPersonalizada1 === void 0) { saudacaoPersonalizada1 = "Olá"; }
    return "".concat(saudacaoPersonalizada1, ", ").concat(nome1, "!");
}
// Exemplos de uso
var saudacaoPadrao1 = saudacao1("Rafael");
console.log(saudacaoPadrao1); // Saída: "Olá, Rafael!"
var saudacaoCustomizada1 = saudacao1("Rafael", "Oi");
console.log(saudacaoCustomizada1); // Saída: "Oi, Rafael!"
// 8 unknown
var valorDesconhecido;
valorDesconhecido = 10;
//let numero: number = valorDesconhecido; // Erro, pois não é seguro atribuir diretamente
if (typeof valorDesconhecido === 'number') {
    var numero = valorDesconhecido; // Agora é seguro
    console.log("O n\u00FAmero \u00E9 ".concat(numero));
}
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage('Houve um erro!'); // Uncaught Error: Houve um erro!
// 10 rest operator
// Função que aceita um número variável de argumentos
function somar() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (total, numero) { return total + numero; }, 0);
}
// Exemplos de uso
var resultado1 = somar(1, 2, 3);
console.log(resultado1); // Saída: 6
var resultado2 = somar(10, 20, 30, 40, 50);
console.log(resultado2); // Saída: 150
// 11 - destructuring como parametros
// Função que recebe um objeto como parâmetro e usa desestruturação
function exibirDetalhesPessoa(_a) {
    var nome = _a.nome, idade = _a.idade;
    console.log("Nome: ".concat(nome, ", Idade: ").concat(idade));
}
// Chamada da função com um objeto
var pessoa = { nome: "Rafael", idade: 25 };
exibirDetalhesPessoa(pessoa);
// Saída: Nome: Rafael, Idade: 25
// Função que recebe um array como parâmetro e usa desestruturação
function exibirNumeros(_a) {
    var primeiro = _a[0], segundo = _a[1];
    console.log("Primeiro: ".concat(primeiro, ", Segundo: ").concat(segundo));
}
// Chamada da função com um array
var numeros = [10, 20];
exibirNumeros(numeros);
// Saída: Primeiro: 10, Segundo: 20
// Função com desestruturação e valores padrão
function exibirDetalhesProduto(_a) {
    var nome = _a.nome, _b = _a.preco, preco = _b === void 0 ? 0 : _b;
    console.log("Produto: ".concat(nome, ", Pre\u00E7o: ").concat(preco));
}
// Chamada da função com objeto incompleto
var produto = { nome: "Notebook" };
exibirDetalhesProduto(produto);
// Saída: Produto: Notebook, Preço: 0
