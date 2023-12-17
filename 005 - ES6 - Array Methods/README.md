## ES6 - Array Methods

Alguns dos métodos de array introduzidos no ES6:

#### Array.find(callback(element[, index[, array]])[, thisArg]):
- Retorna o **primeiro elemento** que satisfaça a condição especificada na função de retorno de chamada.
```
let numbers = [1, 2, 3, 4, 5];
let result = numbers.find(num => num > 2);
console.log(result); // 3
```

#### Array.findIndex(callback(element[, index[, array]])[, thisArg]):
- Retorna o **índice** do primeiro elemento que satisfaça a condição especificada na função de retorno de chamada.
```
let numbers = [1, 2, 3, 4, 5];
let index = numbers.findIndex(num => num > 2);
console.log(index); // 2 (índice do elemento 3)
```

#### Array.includes(element, start):
- Verifica se um array inclui um determinado elemento e retorna true ou false.
```
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false
```

#### Array.fill(value, start, end):
- Preenche todos os elementos do array com um valor específico, de um índice inicial até um índice final (opcional).
```
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // [1, 2, 0, 0, 5]
```

#### Array.from(arrayLike[, mapFn[, thisArg]]):
- Cria uma nova instância de array a partir de um array-like object (ou iterable), permitindo opcionalmente mapear os elementos usando uma função de mapeamento.
```
let arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
let newArray = Array.from(arrayLike);
console.log(newArray); // ['a', 'b', 'c']
```

#### Array.of(element1[, element2[, ...[, elementN]]]):
- Cria uma nova instância de array com os elementos fornecidos.
```
let newArray = Array.of(1, 2, 3, 4, 5);
console.log(newArray); // [1, 2, 3, 4, 5]
```

#### Array.entries(), Array.keys(), e Array.values():
- Retorna iteradores para pares chave/valor, chaves ou valores, respectivamente.

No exemplo, **'entries'** é usado para iterar sobre os pares chave/valor do array fruits.
```
let fruits = ['apple', 'banana', 'orange'];

// Iterando sobre pares chave/valor
for (let entry of fruits.entries()) {
  console.log(entry); // [0, 'apple'], [1, 'banana'], [2, 'orange']
}
```