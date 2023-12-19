## ES6 - Destructuring
Destructuring permite extrair valores de arrays e objetos de uma maneira mais concisa e legível.

#### Destructuring de Objetos:
Sintaxe Básica:
```
const { prop1, prop2 } = objeto;
```
Exemplo:
```
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age } = person;

console.log(name);  // Output: 'John'
console.log(age);   // Output: 30
```

###### Renomeando as variáveis ao realizar a desestruturação:
```
const { name: personName, age: personAge } = person;

console.log(personName);  // Output: 'John'
console.log(personAge);   // Output: 30
```

#### Destructuring de Arrays:
Sintaxe Básica:
```
const [element1, element2, ...rest] = array;
```
Exemplo:
```
const fruits = ['apple', 'banana', 'orange'];
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
```
 
###### Usando o operador ... (spread/rest) para coletar elementos restantes em uma nova array:
```
const [first, ...restOfFruits] = fruits;

console.log(first);          // Output: 'apple'
console.log(restOfFruits);   // Output: ['banana', 'orange']
```

#### Destructuring em Parâmetros de Funções:

Exemplo:
```
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

function printPersonInfo({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  }
  
  printPersonInfo(person);
```

#### Swap variables
Em ES6, a desestruturação (destructuring) permite uma maneira fácil de trocar o valor de duas variáveis sem a necessidade de uma variável temporária.
```
let a = 5;
let b = 10;

// Swap de variáveis usando destructuring
[a, b] = [b, a];

console.log(a);  // Output: 10
console.log(b);  // Output: 5
```