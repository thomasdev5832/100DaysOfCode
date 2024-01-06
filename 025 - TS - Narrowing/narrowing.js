// 1 -> type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
}
sum("5", "10"); // 15
function displayLength(value) {
    if (typeof value === "string") {
        // "narrowed" o tipo de 'value' para 'string'
        console.log(value.length);
    }
    else {
        // "narrowed" o tipo de 'value' para 'number'
        console.log("Not a string, length is not applicable.");
    }
}
displayLength("Hello"); // Saída: 5
displayLength(42); // Saída: Not a string, length is not applicable.
// checando se o valor existe
// Definindo um objeto que pode conter ou não a propriedade 'nome'
var pessoa = {};
// Verificando se 'nome' existe no objeto
if (pessoa.nome !== undefined) {
    console.log("Nome: ".concat(pessoa.nome));
}
else {
    console.log("Nome não está definido."); // Nome não está definido.
}
// Definindo um array que pode estar vazio
var numeros = [];
// Verificando se o array não está vazio antes de acessar o primeiro elemento
if (numeros.length > 0) {
    console.log("Primeiro N\u00FAmero: ".concat(numeros[0]));
}
else {
    console.log("Array está vazio.");
}
// instanceof 
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.fazerBarulho = function () {
        console.log("Barulho genérico");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log("Au au!");
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.miar = function () {
        console.log("Miau!");
    };
    return Gato;
}(Animal));
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.dirigir = function () {
        console.log("Vrum!");
    };
    return Carro;
}());
// Criando instâncias das classes
var meuCachorro = new Cachorro("Bolt");
var meuGato = new Gato("Whiskers");
// Verificando se as instâncias são de determinadas classes
console.log(meuCachorro instanceof Cachorro); // Saída: true
console.log(meuCachorro instanceof Animal); // Saída: true
console.log(meuGato instanceof Gato); // Saída: true
console.log(meuGato instanceof Animal); // Saída: true
console.log(meuCachorro instanceof Carro); // Saída: false
// instanceof com construtores
var Carro2 = /** @class */ (function () {
    function Carro2(marca) {
        this.marca = marca;
    }
    Carro2.prototype.dirigir = function () {
        console.log("Vrum vrum!");
    };
    return Carro2;
}());
// Criando uma instância do construtor
var meuCarro = new Carro2("Toyota");
// Verificando se a instância é de um determinado construtor
console.log(meuCarro instanceof Carro); // Saída: true
var pessoa2 = {
    nome: "Rafael",
    idade: 30,
};
// Verificando se a propriedade 'nome' existe no objeto 'pessoa'
if ('nome' in pessoa2) {
    console.log("A propriedade 'nome' existe: ".concat(pessoa2.nome));
}
else {
    console.log("A propriedade 'nome' não existe.");
}
// Verificando se a propriedade 'endereco' existe no objeto 'pessoa'
if ('endereco' in pessoa2) {
    console.log("A propriedade 'endereco' existe: ".concat(pessoa2.endereco));
}
else {
    console.log("A propriedade 'endereco' não existe.");
}
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var bob = new Dog("Bob");
var k9 = new Dog("K9", "German Shepherd");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro ".concat(dog.name, " \u00E9 da ra\u00E7a ").concat(dog.breed));
    }
    else {
        console.log("O cachorro ".concat(dog.name, " n\u00E3o tem ra\u00E7a!!!"));
    }
}
showDogDetails(bob); // O cachorro Bob não tem raça!
showDogDetails(k9); // O cachorro K9 é da raça German Shepherd
// desafio
function getReview(value) {
    if (typeof value === "number" && value > 0 && value <= 5) {
        console.log("A nota de review \u00E9: ".concat(value));
    }
    else if (typeof value === "boolean" && value === false) {
        console.log('O usuário não deixou review!');
    }
    else {
        console.log('Valor incorreto!');
    }
}
getReview(1);
getReview(2);
getReview(3);
getReview(4);
getReview(5);
getReview(6);
getReview(false);
getReview(true);
