// 1 -> type guard

function sum(a:number | string, b:number | string) {
    
    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }

}

sum("5","10"); // 15

function displayLength(value: string | number) {
    if (typeof value === "string") {
      // "narrowed" o tipo de 'value' para 'string'
      console.log(value.length);
    } else {
      // "narrowed" o tipo de 'value' para 'number'
      console.log("Not a string, length is not applicable.");
    }
  }
  
  displayLength("Hello"); // Saída: 5
  displayLength(42);      // Saída: Not a string, length is not applicable.

  // checando se o valor existe

// Definindo um objeto que pode conter ou não a propriedade 'nome'
const pessoa: { nome?: string } = {};

// Verificando se 'nome' existe no objeto
if (pessoa.nome !== undefined) {
  console.log(`Nome: ${pessoa.nome}`);
} else {
  console.log("Nome não está definido."); // Nome não está definido.
}

// Definindo um array que pode estar vazio
const numeros: number[] = [];

// Verificando se o array não está vazio antes de acessar o primeiro elemento
if (numeros.length > 0) {
  console.log(`Primeiro Número: ${numeros[0]}`);
} else {
  console.log("Array está vazio.");
}

// instanceof 

class Animal {
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    fazerBarulho() {
      console.log("Barulho genérico");
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      console.log("Au au!");
    }
  }
  
  class Gato extends Animal {
    miar() {
      console.log("Miau!");
    }
  }

  class Carro {
    dirigir() {
        console.log("Vrum!")
    }
  }
  
  // Criando instâncias das classes
  const meuCachorro = new Cachorro("Bolt");
  const meuGato = new Gato("Whiskers");
  
  // Verificando se as instâncias são de determinadas classes
  console.log(meuCachorro instanceof Cachorro);  // Saída: true
  console.log(meuCachorro instanceof Animal);    // Saída: true
  console.log(meuGato instanceof Gato);          // Saída: true
  console.log(meuGato instanceof Animal);        // Saída: true
  console.log(meuCachorro instanceof Carro); // Saída: false

  // instanceof com construtores

  class Carro2 {
    marca: string;
  
    constructor(marca: string) {
      this.marca = marca;
    }
  
    dirigir() {
      console.log("Vrum vrum!");
    }
  }
  
  // Criando uma instância do construtor
  const meuCarro = new Carro2("Toyota");
  
  // Verificando se a instância é de um determinado construtor
  console.log(meuCarro instanceof Carro);  // Saída: true
  
// -----------

// operador in

interface Pessoa2 {
    nome: string;
    idade: number;
  }
  
  const pessoa2: Pessoa2 = {
    nome: "Rafael",
    idade: 30,
  };
  
  // Verificando se a propriedade 'nome' existe no objeto 'pessoa'
  if ('nome' in pessoa2) {
    console.log(`A propriedade 'nome' existe: ${pessoa2.nome}`);
  } else {
    console.log("A propriedade 'nome' não existe.");
  }
  
  // Verificando se a propriedade 'endereco' existe no objeto 'pessoa'
  if ('endereco' in pessoa2) {
    console.log(`A propriedade 'endereco' existe: ${pessoa2.endereco}`);
  } else {
    console.log("A propriedade 'endereco' não existe.");
  }


class Dog {
    name:string;
    breed?:string;

    constructor(name:string, breed?:string){
        this.name = name;
        if(breed) {
            this.breed = breed;
        }
    }

}

const bob = new Dog("Bob");
const k9 = new Dog("K9", "German Shepherd");

function showDogDetails(dog: Dog) {
    if('breed' in dog){
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
    } else {
        console.log(`O cachorro ${dog.name} não tem raça!!!`);
    }
}

showDogDetails(bob); // O cachorro Bob não tem raça!
showDogDetails(k9); // O cachorro K9 é da raça German Shepherd

// desafio

function getReview(value: boolean | number) {
    
    if(typeof value === "number" && value > 0 && value <= 5){
        console.log(`A nota de review é: ${value}`);
    } else if (typeof value === "boolean" && value === false) {
        console.log('O usuário não deixou review!');
    } else {
        console.log('Valor incorreto!');
    }
    
}

getReview(1)
getReview(2)
getReview(3)
getReview(4)
getReview(5)
getReview(6)
getReview(false)
getReview(true)

