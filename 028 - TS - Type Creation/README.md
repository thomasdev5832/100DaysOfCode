# Criação de Tipos

## Generics

Generics permitem a criação de componentes que podem trabalhar com uma variedade de tipos, em vez de serem restritos a um único tipo. 

Isso aumenta a reutilização de código e fornece maior flexibilidade na definição de funções, classes e interfaces.

### Exemplo Básico de Generics:
```
function identity<T>(arg: T): T {
    return arg;
}

// Uso do generics
let result = identity<string>("Hello, generics!");
console.log(result); // Saída: Hello, generics!

```
Neste exemplo, T é um parâmetro de tipo genérico. Quando chamamos a função identity, podemos especificar o tipo que queremos usar. No exemplo, usamos string, mas poderíamos ter usado number, boolean, ou qualquer outro tipo.


### Exemplo de Generics em Arrays:
```
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

let numbers = [1, 2, 3, 4, 5];
let firstNumber = getFirstElement(numbers);
console.log(firstNumber); // Saída: 1

let strings = ["apple", "banana", "orange"];
let firstString = getFirstElement(strings);
console.log(firstString); // Saída: apple
```
Aqui, T é o tipo genérico que representa o tipo dos elementos no array.

### Generics em Classes:

```
class Container<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }
}

let numberContainer = new Container<number>(42);
console.log(numberContainer.getValue()); // Saída: 42

let stringContainer = new Container<string>("Hello, generics!");
console.log(stringContainer.getValue()); // Saída: Hello, generics!
```
Aqui, a classe Container aceita um tipo genérico T e armazena um valor desse tipo.

### Generics em Interface

```
interface Pair<T, U> {
    first: T;
    second: U;
}

// Exemplo de uso
let numberStringPair: Pair<number, string> = { first: 42, second: "hello" };
console.log(numberStringPair.first);  // Saída: 42
console.log(numberStringPair.second); // Saída: hello

let booleanNumberPair: Pair<boolean, number> = { first: true, second: 123 };
console.log(booleanNumberPair.first);  // Saída: true
console.log(booleanNumberPair.second); // Saída: 123
```

Neste exemplo, a interface Pair aceita dois parâmetros de tipo genérico, T e U, que representam os tipos dos elementos first e second da estrutura, respectivamente. Quando usamos a interface, podemos especificar os tipos concretos que queremos para T e U.


## Constraints em Generics

As constraints são usadas para impor certos requisitos nos tipos que podem ser usados como argumentos genéricos em uma função ou classe. 

Isso ajuda a restringir a gama de tipos permitidos, proporcionando uma maior segurança de tipo.

Exemplo:

```
// Definindo uma função que aceita apenas tipos que tenham um método 'length'
function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
}

// Uso da função com um array
let array = [1, 2, 3, 4];
logLength(array); // Saída: 4

// Uso da função com uma string
let str = "hello";
logLength(str); // Saída: 5 (comprimento da string)

// Uso da função com um número (gerará um erro de compilação)
// let num = 42;
// logLength(num); // Erro: 'length' não existe no tipo 'number'
```

Neste exemplo, a função logLength aceita um tipo genérico T que deve ter um membro length do tipo número. Isso é feito usando a sintaxe **extends { length: number }** como uma constraint.

As constraints podem ser mais complexas, incluindo múltiplos membros ou utilizando interfaces. 
Aqui está um exemplo com uma interface:
```
interface LengthAndValue {
    length: number;
    value: string;
}

function processLengthAndValue<T extends LengthAndValue>(arg: T): void {
    console.log(`Length: ${arg.length}, Value: ${arg.value}`);
}

let obj = { length: 10, value: "typescript" };
processLengthAndValue(obj); // Saída: Length: 10, Value: typescript

// Tentativa de uso com um objeto que não tem 'length' ou 'value' (gerará um erro de compilação)
// let invalidObj = { name: "John" };
// processLengthAndValue(invalidObj); // Erro: 'length' não existe no tipo {...}
```

## Type Parameters

Os type parameters (parâmetros de tipo) são uma característica fundamental que permite a criação de componentes genéricos. 

Eles permitem que você escreva código que pode ser reutilizado com diferentes tipos, proporcionando flexibilidade e segurança de tipo.

### Restrições aos tipos de chaves permitidos em um generic

```
// Definindo uma função genérica
function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Exemplo de uso
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const nameValue: string = getValueByKey(person, "name");
console.log(nameValue); // Saída: John

const ageValue: number = getValueByKey(person, "age");
console.log(ageValue); // Saída: 30
```

Neste exemplo:

T é o tipo genérico do objeto.
K é um parâmetro de tipo que é restringido a ser uma chave válida do tipo T usando extends keyof T.
A função retorna o valor associado à chave key no objeto obj, e o tipo do valor retornado é inferido corretamente.

Ao utilizar extends keyof T, estamos garantindo que o parâmetro key passado para a função é uma chave válida do tipo T. 

Isso proporciona segurança de tipo, pois o TypeScript detectará erros se tentarmos acessar uma chave que não existe no objeto.

### keyof Type Operator em Generics

O operador **keyof** em combinação com generics no TypeScript permite criar funções e tipos genéricos que trabalham com as chaves de um objeto de forma dinâmica. 

Exemplo:

```
// Definindo uma função genérica que retorna o valor associado a uma chave em um objeto
function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Exemplo de uso com um objeto Person
interface Person {
    name: string;
    age: number;
    city: string;
}

const person: Person = {
    name: "John",
    age: 30,
    city: "New York",
};

// Obtendo valores usando a função genérica
const nameValue: string = getValueByKey(person, "name");
const ageValue: number = getValueByKey(person, "age");
const cityValue: string = getValueByKey(person, "city");

console.log(nameValue); // Saída: John
console.log(ageValue);  // Saída: 30
console.log(cityValue); // Saída: New York
```

Neste exemplo, a função getValueByKey é genérica e aceita dois parâmetros: obj (um objeto) e key (a chave desejada no objeto). A restrição de tipo K extends keyof T assegura que a chave fornecida (key) seja uma das chaves válidas do tipo do objeto (T).

O tipo de retorno T[K] indica que o valor retornado pela função terá o tipo correspondente à chave key no objeto obj. Assim, a função permite acessar valores associados a qualquer chave do objeto, mantendo a segurança de tipo.

### typeof Type Operator em Generics

O operador **typeof** no TypeScript é usado para obter o tipo de uma expressão ou variável em tempo de compilação. 

Quando usado em conjunto com generics, typeof pode ser útil para inferir o tipo de uma instância de um objeto ou para criar funções genéricas que operam com base nos tipos de variáveis fornecidas. 

Exemplo: 
```
// Criando uma função genérica que aceita uma função como argumento e retorna outra função
function wrapFunction<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>): ReturnType<T> => {
        console.log("Chamando a função...");
        const result = func(...args);
        console.log("Função concluída.");
        return result;
    };
}

// Exemplo de uso com uma função
function add(a: number, b: number): number {
    return a + b;
}

const wrappedAdd = wrapFunction(add);
const result = wrappedAdd(2, 3); // Saída: Chamando a função... \n Função concluída.
console.log(result); // Saída: 5

```

Aqui, a função wrapFunction aceita uma função func como argumento e retorna uma nova função que envolve a função original, adicionando mensagens de log. Parameters<T> e ReturnType<T> são tipos auxiliares do TypeScript que extraem os tipos dos parâmetros e do valor de retorno de uma função, respectivamente.

## Indexed Access Types

Indexed Access Types, também conhecidos como tipos de acesso indexado, são uma poderosa característica do TypeScript que permite acessar o tipo de uma propriedade de um objeto usando a sintaxe de acesso de índice. Isso é útil ao lidar com tipos dinâmicos e genéricos, especialmente quando você deseja inferir ou manipular tipos de propriedades específicas.

### Exemplo Básico:

```
// Definindo uma interface
interface Person {
    name: string;
    age: number;
    city: string;
}

// Criando um tipo que representa o tipo da propriedade 'name' da interface Person
type NameType = Person['name']; // O tipo será string

// Criando um tipo que representa o tipo da propriedade 'age' da interface Person
type AgeType = Person['age']; // O tipo será number

// Criando um tipo que representa o tipo da propriedade 'city' da interface Person
type CityType = Person['city']; // O tipo será string
```
Aqui, usamos a sintaxe de acesso de índice (Person['name'], Person['age'], etc.) para criar tipos que representam os tipos específicos das propriedades da interface Person.


### Usando em Funções Genéricas:

```
// Criando uma função genérica que aceita um objeto e uma chave, e retorna o tipo da propriedade correspondente
function getPropertyType<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = { name: 'John', age: 30, city: 'New York' };

const nameValue: string = getPropertyType(person, 'name');
const ageValue: number = getPropertyType(person, 'age');
const cityValue: string = getPropertyType(person, 'city');
```

Neste exemplo, getPropertyType é uma função genérica que aceita um objeto obj e uma chave key e retorna o tipo da propriedade correspondente. 

Isso é possível graças à sintaxe de acesso de índice T[K]. O TypeScript inferirá corretamente os tipos de retorno com base na chave fornecida.

### Manipulando Tipos Dinâmicos:

```
// Criando um tipo que extrai as chaves de um objeto e as torna opcionais
type MakeKeysOptional<T> = {
    [K in keyof T]?: T[K];
};

// Usando o tipo para criar um objeto com chaves opcionais
const optionalPerson: MakeKeysOptional<Person> = {};

optionalPerson.name = 'John';
optionalPerson.age = 30;
// city é opcional, então não precisamos atribuir

console.log(optionalPerson); // Saída: { name: 'John', age: 30 }
```

Aqui, usamos um tipo genérico para criar um novo tipo (MakeKeysOptional<T>) que torna opcional cada chave do tipo original T. Isso é feito usando a sintaxe for ... in no contexto de tipos.

## Conditional types

Conditional types, ou tipos condicionais, são uma característica avançada do TypeScript que permite criar tipos que dependem de condições. 

Eles são especialmente úteis quando você precisa inferir ou gerar tipos com base em expressões condicionais. 

### Exemplo Básico:
```
type IsString<T> = T extends string ? true : false;

const result1: IsString<string> = true;     // true
const result2: IsString<number> = false;    // false
const result3: IsString<boolean> = false;   // false
```
Neste exemplo, IsString<T> é um tipo condicional que verifica se T é do tipo string. Se for, o tipo é true; caso contrário, é false. Isso pode ser útil, por exemplo, ao validar tipos dinamicamente em tempo de compilação.

### Exemplo com Inferência de Tipos:

```
type ExtractArrayType<T> = T extends (infer U)[] ? U : never;

const array = [1, 2, 3];
type ElementType = ExtractArrayType<typeof array>; // number
```
Neste exemplo, ExtractArrayType<T> é um tipo condicional que verifica se T é um array. Se for, ele usa a palavra-chave infer para inferir o tipo dos elementos do array; caso contrário, é never. Isso é útil para extrair o tipo dos elementos de um array de maneira genérica.

### Condições Aninhadas:

```
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    'other';

const name1: TypeName<string> = 'string';     // 'string'
const name2: TypeName<number> = 'number';     // 'number'
const name3: TypeName<boolean> = 'boolean';   // 'boolean'
const name4: TypeName<object> = 'other';      // 'other'
```

Aqui, TypeName<T> verifica condicionalmente o tipo de T e atribui uma string correspondente ao tipo. Se T for string, number ou boolean, o tipo resultante é a string correspondente; caso contrário, é 'other'.

### Uso em Funções Genéricas:

```
type ResultType<T> = T extends (a: infer A, b: infer B) => infer R ? [A, B, R] : never;

function getResultType<T>(fn: T): ResultType<T> {
    return {} as ResultType<T>;
}

const add = (a: number, b: number) => a + b;
const result: ResultType<typeof add> = [1, 2, 3]; // [number, number, number]

```

Aqui, ResultType<T> é um tipo condicional que verifica se T é uma função. Se for, ele usa infer para extrair os tipos dos argumentos e do retorno da função; caso contrário, é never. Isso é útil para obter tipos de funções de maneira genérica.


## Template Literal Types

Os Template Literal Types são uma funcionalidade do TypeScript que permite criar tipos baseados em strings interpoladas. 

Esses tipos são úteis para modelar padrões específicos de strings e criar tipos que dependem dinamicamente do valor de outras strings ou tipos.

### Exemplo básico:
```
type Greeting = `Hello, ${string}!`;

const greeting: Greeting = "Hello, World!"; // Válido
// const invalidGreeting: Greeting = "Hi there!"; // Inválido, pois não corresponde ao padrão
```

Aqui, Greeting é um tipo literal de template que representa uma saudação. O ${string} é um espaço reservado que pode ser preenchido com qualquer string. Isso cria um tipo que aceita strings no formato específico de saudação.

### Uso com Tipos Condicionais:

```
type Message<T> = T extends string ? `Message: ${T}` : "Invalid Message";

const validMessage: Message<"Hello"> = "Message: Hello"; // Válido
const invalidMessage: Message<number> = "Invalid Message"; // Válido
// const anotherInvalidMessage: Message<"Hi"> = "Message: Hi"; // Inválido, pois não corresponde ao padrão
```

Neste exemplo, Message<T> é um tipo condicional que verifica se T é uma string. Se for, cria uma mensagem do tipo Message: T; caso contrário, é "Invalid Message". Isso é útil para criar tipos que dependem condicionalmente do valor de outras strings ou tipos.

### Construindo Tipos a Partir de Strings:

```
type Color = "red" | "green" | "blue";

type Box<T extends Color> = {
    color: T;
    contents: `Contents for ${T} box`;
};

const redBox: Box<"red"> = {
    color: "red",
    contents: "Contents for red box"
};
```
Neste exemplo, Box<T> é um tipo que aceita apenas cores específicas e gera dinamicamente o tipo da propriedade contents com base na cor. Isso é possível graças aos Template Literal Types.


