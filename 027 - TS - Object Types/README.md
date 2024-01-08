# Object Types

Os "object types" referem-se aos tipos de dados que representam objetos. 

No contexto de TypeScript, um objeto é uma instância de uma classe, um valor JavaScript com propriedades e métodos, ou até mesmo um objeto literal. 

Os tipos de objeto são usados para definir a forma (ou estrutura) dos objetos que você espera em seu código.

## De tipo para Interface

Em TypeScript, podemos usar uma interface como tipo de parâmetro de uma função da mesma forma que você usaria qualquer outro tipo.

Essa abordagem é útil para garantir que os objetos passados para a função tenham a forma correta, ajudando a evitar erros durante a execução do código.

Exemplo:
```
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

// Exemplo de uso da função
const myPerson: Person = {
    name: "Rafael",
    age: 10
};

greet(myPerson);
```

Neste exemplo, a função greet recebe um parâmetro person do tipo Person, que é uma interface que define a estrutura esperada de um objeto representando uma pessoa. Quando você chama a função greet, você precisa passar um objeto que tenha a estrutura correspondente à interface Person.

## Propriedades opcionais com Interface

Podemos tornar propriedades opcionais em uma interface adicionando o caractere **?** após o nome da propriedade. 

Exemplo:
```
interface Person {
    name: string;
    age?: number; // A propriedade age é opcional
}

function greet(person: Person): void {
    console.log(`Hello, ${person.name}!`);
    
    if (person.age !== undefined) {
        console.log(`You are ${person.age} years old.`);
    } else {
        console.log(`Age not provided.`);
    }
}

// Exemplo de uso com idade opcional
const personWithAge: Person = {
    name: "Rafael",
    age: 30
};

// Exemplo de uso sem idade
const personWithoutAge: Person = {
    name: "Satoshi"
};

greet(personWithAge);
greet(personWithoutAge);

```

No exemplo acima, a propriedade age na interface Person é marcada como opcional usando o **?**. Isso significa que podemos ter objetos do tipo Person sem necessariamente incluir a propriedade age.

## Readonly

Em TypeScript, a palavra-chave readonly é usada para indicar que uma propriedade não pode ser modificada depois de sua inicialização. 

Isso é útil quando você quer garantir que certas propriedades de um objeto não sejam alteradas após a criação do objeto.

```
interface Person2 {
    readonly name: string;
    readonly age: number;
}

let person: Person2 = {
    name: "Satoshi",
    age: 55
};
person.name = "Gabriel"; // Error: Cannot assign to 'name' because it is a read-only property.
```

Neste exemplo, a interface Person tem duas propriedades readonly: name e age. Quando você tenta modificar uma dessas propriedades após a inicialização do objeto, o TypeScript emite um erro durante a compilação.

## Index Signature

Em TypeScript, as "index signatures" são usadas para definir tipos para objetos que podem ter propriedades adicionais além das explicitamente declaradas. 

Isso é útil quando você deseja criar objetos que podem ter propriedades dinâmicas cujos nomes não são conhecidos antecipadamente.

A sintaxe básica de uma "index signature" é semelhante a declarar um array, mas com chaves em vez de colchetes.

Exemplo:

```
interface Dictionary {
    [key: string]: number;
}

// Exemplo de uso
let myDictionary: Dictionary = {
    "one": 1,
    "two": 2,
    "three": 3
};

console.log(myDictionary["one"]); // Saída: 1
```

Neste exemplo, a interface Dictionary possui uma "index signature" que indica que o objeto pode ter chaves (nomes de propriedades) de tipo string e os valores associados a essas chaves devem ser do tipo number. 

### Alguns pontos importantes sobre as "index signatures":
- **Tipo da chave (key)**: Pode ser string ou number. Geralmente, é melhor usar string para chaves de propriedades dinâmicas.

- **Tipo do valor associado à chave**: Indica o tipo dos valores que você espera para as chaves especificadas.

- **Outras propriedades**: Você ainda pode ter outras propriedades explícitas na interface, além da "index signature".

Exemplo com uma "index signature" para um objeto que pode ter propriedades de tipos diferentes:
```
interface Shape {
    color: string;
    [key: string]: number | string;
}

let myShape: Shape = {
    color: "red",
    sides: 4,
    size: "medium"
};

console.log(myShape.color); // Saída: red
console.log(myShape.sides); // Saída: 4
console.log(myShape.size);  // Saída: medium
```

## Herança de Interfaces

Em TypeScript, você pode criar interfaces que herdam de outras interfaces usando a palavra-chave **extends**. 

Isso permite que uma interface herde as propriedades e métodos de outra interface. 

A herança de interfaces é uma maneira de promover a reutilização de código e estabelecer relações entre tipos relacionados

Exemplo:
```
// Interface base
interface Animal {
    name: string;
    makeSound(): void;
}

// Interface derivada que herda da interface Animal
interface Dog extends Animal {
    breed: string;
}

// Objeto que implementa a interface Dog
let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    makeSound: () => {
        console.log("Woof woof!");
    }
};

console.log(myDog.name);      // Saída: Buddy
console.log(myDog.breed);     // Saída: Golden Retriever
myDog.makeSound();            // Saída: Woof woof!
```

Neste exemplo, a interface Dog estende a interface Animal, o que significa que qualquer objeto que implemente a interface Dog também deve implementar as propriedades e métodos da interface Animal.

É possível estender mais de uma interface usando uma lista separada por vírgulas:

```
interface Flying {
    fly(): void;
}

interface Bird extends Animal, Flying {
    wingspan: number;
}

let eagle: Bird = {
    name: "Eddie",
    wingspan: 2.5,
    makeSound: () => {
        console.log("Screech!");
    },
    fly: () => {
        console.log("Soaring through the sky!");
    }
};

console.log(eagle.name);      // Saída: Eddie
console.log(eagle.wingspan);  // Saída: 2.5
eagle.makeSound();            // Saída: Screech!
eagle.fly();                  // Saída: Soaring through the sky!
```

Agora, a interface Bird estende tanto Animal quanto Flying. Isso significa que um objeto do tipo Bird precisa implementar as propriedades e métodos definidos em ambas as interfaces.

## Intersection Types

Em TypeScript, a interseção de tipos (intersection types) permite criar um novo tipo que consiste na combinação de dois ou mais tipos existentes. 

Você utiliza o operador **&** para formar a interseção entre os tipos. A interseção resultante terá todas as propriedades presentes em cada tipo envolvido.

As interseções são úteis quando desejamos criar tipos mais específicos combinando características de vários tipos existentes.

Exemplo: 
```
interface Person {
    name: string;
    age: number;
}

interface Employee {
    jobTitle: string;
    salary: number;
}

// Intersection type: Combinação de Person e Employee
type PersonWithJob = Person & Employee;

// Exemplo de uso
const employee: PersonWithJob = {
    name: "Rafael",
    age: 20,
    jobTitle: "Software Engineer",
    salary: 80000
};

console.log(employee.name);      // Saída: Rafael
console.log(employee.age);       // Saída: 20
console.log(employee.jobTitle);  // Saída: Software Engineer
console.log(employee.salary);    // Saída: 80000
```

No exemplo acima, PersonWithJob é uma interseção entre Person e Employee. Isso significa que um objeto do tipo PersonWithJob precisa ter todas as propriedades de Person e Employee. 

## Readonly Array

Em TypeScript, a sintaxe readonly pode ser usada para criar arrays imutáveis, onde os elementos não podem ser modificados após a criação do array. Quando aplicado a arrays, readonly indica que o array em si não pode ser reatribuído, e seus elementos não podem ser alterados.

#### Algumas maneiras de usar readonly com arrays:

### Readonly Array Type
Podemos usar a palavra-chave readonly ao definir o tipo de um array:
```
// Array de números imutável
const numbers: readonly number[] = [1, 2, 3];
```

###  ReadonlyArray Type:
Existe também um tipo embutido chamado ReadonlyArray<T>, que representa arrays cujos elementos não podem ser modificados:

```
// Uso do tipo ReadonlyArray<T>
const names: ReadonlyArray<string> = ["Rafael", "Gabriel", "Satoshi"];
```

### As keyof readonly Array:
Se desejamos criar um tipo que representa as chaves (índices) de um array readonly, pode usar **keyof**:
```
const myArray = [10, 20, 30] as const;

type ArrayKeys = keyof typeof myArray; // "0" | "1" | "2"
```
Neste exemplo, ArrayKeys representa as chaves possíveis do array readonly myArray.


## Tuplas

Em TypeScript, uma tupla é um tipo de dados que permite representar um array com um número fixo de elementos, onde cada elemento pode ter um tipo específico. 

Ao contrário de um array normal, onde os elementos podem ter tipos diferentes e a quantidade de elementos pode variar, uma tupla define um padrão fixo de tipos e posições.

A sintaxe para definir uma tupla é usar colchetes **[]** com os tipos dos elementos separados por vírgulas:

```
// Definição de uma tupla com dois elementos: string e number
let myTuple: [string, number];

// Inicialização da tupla
myTuple = ["hello", 42];

// Acesso aos elementos
console.log(myTuple[0]); // Saída: hello
console.log(myTuple[1]); // Saída: 42
```

### Atribuição Direta
A partir do TypeScript 3.1, podemos usar a atribuição direta para criar uma tupla:

```
let myTuple: [string, number] = ["hello", 42];
```

### Tuplas com Tipos Restantes:

Também podemos usar o rest operator (operador de espalhamento) (...) para representar um número variável de elementos após uma posição fixa:

```
let myExtendedTuple: [string, number, ...boolean[]] = ["hello", 42, true, false];

console.log(myExtendedTuple[2]); // Saída: true
console.log(myExtendedTuple[3]); // Saída: false
```

### Desestruturação de Tupla:

Podemos usar a desestruturação para atribuir os elementos de uma tupla a variáveis individuais:

```
let myTuple: [string, number] = ["hello", 42];

let [firstElement, secondElement] = myTuple;

console.log(firstElement); // Saída: hello
console.log(secondElement); // Saída: 42
```

### Acessando Elementos pela Posição:

Os elementos de uma tupla são acessados usando a notação de colchetes e a posição do elemento na tupla:

```
let myTuple: [string, number] = ["hello", 42];

let firstElement = myTuple[0]; // "hello"
let secondElement = myTuple[1]; // 42

```

### Tupla com Readonly:
Para garantir que uma tupla (um array com um número fixo de elementos) seja imutável, você pode usar a palavra-chave readonly nas posições dos elementos:
```
const myTuple: readonly [string, number] = ["hello", 42];
```

Tuplas são úteis quando você precisa representar dados heterogêneos com uma estrutura fixa e predefinida. No entanto, é importante notar que, enquanto fornecem certa estrutura, as tuplas podem tornar-se mais difíceis de entender em comparação com o uso de interfaces ou tipos mais nomeados, especialmente em cenários mais complexos.