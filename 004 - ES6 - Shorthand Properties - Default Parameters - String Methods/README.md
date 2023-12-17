## Shorthand Properties, Default Parameters & String Methods

### Shorthand Properties
Shorthand properties são uma maneira mais concisa de definir propriedades de objetos quando o nome da propriedade é o mesmo que o nome da variável que está sendo atribuída.

####  Atribuição de Variáveis a Propriedades de Objetos
*x* e *y* são atribuídos às propriedades **x** e **y** do objeto point. 
Com o shorthand, a sintaxe é mais concisa.
```
// Antes do ES6
let x = 10;
let y = 20;

let point = { x: x, y: y };

// Com ES6 Shorthand Properties
let x = 10;
let y = 20;

let point = { x, y };
```

#### Métodos Shorthand em Objetos
O método *sayHello* é definido de forma mais concisa usando shorthand:
```
// Antes do ES6
let obj = {
  sayHello: function() {
    console.log('Hello!');
  }
};

// Com ES6 Shorthand Methods
let obj = {
  sayHello() {
    console.log('Hello!');
  }
};
```

#### Uso em Desestruturação
Na desestruturação, podemos usar shorthand para extrair propriedades diretamente:
```
// Antes do ES6
let user = { name: 'John', age: 30 };
let name = user.name;
let age = user.age;

// Com ES6 Shorthand na Desestruturação
let user = { name: 'John', age: 30 };
let { name, age } = user;
```

#### Parâmetros de Função
Ao criar objetos dentro de funções, podemos usar shorthand para criar propriedades mais facilmente:
```
// Antes do ES6
function createPoint(x, y) {
  return { x: x, y: y };
}

// Com ES6 Shorthand nos Parâmetros
function createPoint(x, y) {
  return { x, y };
}
```

---

### Default Parameters
Parâmetros padrão, permite que atribua valores padrão aos parâmetros de uma função. 
- É útil quando um argumento não é fornecido durante a chamada da função, permitindo que a função use um valor padrão predefinido. 
```
// Antes do ES6
function multiply(a, b) {
  b = (typeof b !== 'undefined') ? b : 1;
  return a * b;
}

// Com ES6 Default Parameters
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));      // Saída: 5
console.log(multiply(5, 2));   // Saída: 10
```

#### Pontos importantes:
##### 1. Valores Padrão são Avaliados à Direita:
Os valores padrão são avaliados apenas se o argumento correspondente não for fornecido ou for undefined. 
Isso significa que expressões à direita são avaliadas apenas quando necessário.
```
function foo(a, b = a + 1) {
  // ...
}

foo(2);  // b será 3 (2 + 1)
```

##### 2. Parâmetros com Valores Padrão Podem Depender de Outros Parâmetros:
Os valores padrão podem depender de outros parâmetros da função.
```
function bar(a, b = 2, c = a + b) {
  // ...
}

bar(1);  // c será 3 (1 + 2)
```

##### 3. Valores Padrão Podem Ser Expressões Complexas:
Os valores padrão podem ser expressões mais complexas, incluindo chamadas de função.
```
function greet(name, greeting = getDefaultGreeting()) {
  // ...
}

function getDefaultGreeting() {
  return 'Hello';
}
```

---

### String methods

O ECMAScript 6 (ES6) introduziu vários métodos adicionais para manipulação de strings.

Alguns dos métodos de string introduzidos no ES6:

##### startsWith(searchString[, position]) e endsWith(searchString[, endPosition]):

- Verifica se uma string começa ou termina com a substring fornecida.

```
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World"));   // false
```

##### includes(searchString[, position]):

- Verifica se uma string contém a substring fornecida.

```
let str = "Hello, World!";
console.log(str.includes("World")); // true
```

##### repeat(count):
- Repete a string o número especificado de vezes.
```
let str = "abc";
console.log(str.repeat(3)); // "abcabcabc"
```

##### padStart(targetLength [, padString]) e padEnd(targetLength [, padString]):

- Preenche a string com um caractere especificado (ou espaços em branco) para atingir o comprimento desejado.

```
let str = "42";
console.log(str.padStart(5, "0")); // "00042"
```

##### trimStart() e trimEnd():
- Remove espaços em branco do início ou do final de uma string.
```
let str = "   Hello, World!   ";
console.log(str.trimStart()); // "Hello, World!   "
console.log(str.trimEnd());   // "   Hello, World!"
```

##### String.fromCodePoint(...codePoints):
- Cria uma string a partir de pontos de código Unicode especificados.
```
console.log(String.fromCodePoint(65, 66, 67)); // "ABC"
```

##### String.raw():
- Retorna uma versão "crua" de uma string, ignorando caracteres de escape.
```
console.log(String.raw`Newline: \n`); // "Newline: \\n"
```