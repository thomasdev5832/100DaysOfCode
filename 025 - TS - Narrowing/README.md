# Narrowing

**Narrowing** é um recurso do TypeScript utilizado para identificar tipos de dados.

 Refere-se à capacidade do compilador de reduzir o tipo de uma variável com base em certas condições. Isso é útil para fornecer informações mais específicas sobre o tipo de uma variável em determinados contextos.

 ## Typeof type guard

O **type guard** é basicamente uma validação do tipo utilizando o **typeof**.

Dessa maneira, podemos comparar o retorno do operador com um possível tipo.

```
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
  ```

  Neste exemplo, o TypeScript verifica com **typeof** o tipo de value dentro de cada bloco if. Isso significa que, dentro do primeiro bloco, TypeScript entende que value é uma string e, portanto, permite o acesso à propriedade length. No segundo bloco, TypeScript entende que value é um número e evita qualquer tentativa de acessar a propriedade length.

## Checando se o valor existe
Para verificar se um valor existe (ou seja, se não é *null* nem *undefined*), podemos usar uma simples verificação de nulidade.

### Operador de Nulidade Condicional (?.)

O operador de nulidade condicional **(?)** permite acessar propriedades de um objeto de maneira segura, verificando automaticamente se o objeto é nulo ou indefinido:

```
const pessoa: { nome?: string } = {};

// Verificando se 'nome' existe no objeto
if (pessoa.nome !== undefined) {
  console.log(`Nome: ${pessoa.nome}`);
} else {
  console.log("Nome não está definido."); // Nome não está definido.
}
```

## Operador instanceof
Para além dos tipos primitivos, o operador **instanceof** é usado para verificar se um objeto é uma instância de uma classe ou de um construtor específico. 

Ele retorna *true* se o objeto é uma instância da classe ou do construtor, e *false* caso contrário. 

#### Exemplo com Classes
```
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

// Criando instâncias das classes
const meuCachorro = new Cachorro("Bolt");
const meuGato = new Gato("Whiskers");

// Verificando se as instâncias são de determinadas classes
console.log(meuCachorro instanceof Cachorro);  // Saída: true
console.log(meuCachorro instanceof Animal);    // Saída: true
console.log(meuGato instanceof Gato);          // Saída: true
console.log(meuGato instanceof Animal);        // Saída: true
```
No exemplo acima, meuCachorro instanceof Cachorro retorna true porque meuCachorro é uma instância da classe Cachorro. O mesmo princípio se aplica a meuCachorro instanceof Animal, pois Cachorro herda de Animal.

#### Exemplo com Construtores

```
class Carro {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  dirigir() {
    console.log("Vrum vrum!");
  }
}

// Criando uma instância do construtor
const meuCarro = new Carro("Toyota");

// Verificando se a instância é de um determinado construtor
console.log(meuCarro instanceof Carro);  // Saída: true
```
Já no exemplo com construtores, meuCarro instanceof Carro retorna true, indicando que meuCarro é uma instância do construtor Carro.

>O operador instanceof é útil quando você precisa garantir o tipo de um objeto em tempo de execução, especialmente em situações onde a hierarquia de classes ou construtores é relevante.

- Quando você usa instanceof com classes, está verificando a relação de herança entre classes.
- Quando você usa instanceof com construtores, está verificando se um objeto foi criado usando um construtor específico.

## Operador in

O operador **in** no TypeScript é usado para verificar se uma determinada propriedade existe em um objeto.

Ele retorna um valor booleano, *true* se a propriedade existir e *false* se não existir.

O operador in é útil para lidar com objetos dinâmicos ou para realizar verificações antes de acessar uma propriedade, evitando erros de tempo de execução relacionados a propriedades ausentes.

```
interface Pessoa {
  nome: string;
  idade: number;
}

const pessoa: Pessoa = {
  nome: "Rafael",
  idade: 30,
};

// Verificando se a propriedade 'nome' existe no objeto 'pessoa'
if ('nome' in pessoa) {
  console.log(`A propriedade 'nome' existe: ${pessoa.nome}`);
} else {
  console.log("A propriedade 'nome' não existe.");
}

// Verificando se a propriedade 'endereco' existe no objeto 'pessoa'
if ('endereco' in pessoa) {
  console.log(`A propriedade 'endereco' existe: ${pessoa.endereco}`);
} else {
  console.log("A propriedade 'endereco' não existe.");
}
```

Neste exemplo, o primeiro teste com 'nome' in pessoa retorna true, indicando que a propriedade 'nome' existe no objeto pessoa. Já o segundo teste com 'endereco' in pessoa retorna false, indicando que a propriedade 'endereco' não existe.