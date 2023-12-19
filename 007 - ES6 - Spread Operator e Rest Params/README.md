## ES6 - Spread Operator & Rest Params

Spreap Operator é representado por três pontos consecutivos **(...)** e é usado para espalhar elementos de um array ou propriedades de um objeto.

#### Spread Operator com Arrays:
1. Copiando Arrays:
```
const array1 = [1, 2, 3];
const array2 = [...array1];

console.log(array2); // Output: [1, 2, 3]
```
2. Combinando Arrays:
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```
3. Adicionando Elementos a um Array:
```
const array1 = [1, 2, 3];
const newArray = [...array1, 4, 5];

console.log(newArray); // Output: [1, 2, 3, 4, 5]
```

#### Spread Operator com Objetos:
1. Copiando Objetos:
```
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

console.log(obj2); // Output: { a: 1, b: 2 }
```
2. Combinando Objetos:
```
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };

console.log(obj2); // Output: { c: 3, a: 1, b: 2 }
```
3. Modificando Propriedades:
```
const obj1 = { a: 1, b: 2 };
const modifiedObj = { ...obj1, b: 3 };

console.log(modifiedObj); // Output: { a: 1, b: 3 }
```


---

## Rest Params
 O parâmetro rest (ou rest parameter) permite que uma função aceite um número indefinido de argumentos como um array. 
 É representado pelo operador (...) seguido por um nome de parâmetro.

Exemplo de função utilizando rest parameter:
 ```
function soma(...numeros) {
  let resultado = 0;

  // Itera sobre os argumentos coletados no array 'numeros'
  for (let numero of numeros) {
    resultado += numero;
  }

  return resultado;
}

// Chamando a função com diferentes números de argumentos
console.log(soma(1, 2, 3)); // Output: 6
console.log(soma(4, 5, 6, 7)); // Output: 22
```

O rest parameter pode ser combinado com outros parâmetros na definição da função, mas deve ser sempre o último parâmetro.

Exemplo de função com parâmetros normais e rest parameter:
```
function exemplo(param1, param2, ...restoDosParams) {
  console.log(param1); // Exibe o primeiro parâmetro
  console.log(param2); // Exibe o segundo parâmetro
  console.log(restoDosParams); // Exibe um array com o restante dos parâmetros
}

// Chamando a função com diferentes números de argumentos
exemplo(1, 2); 
// Output:
// 1
// 2
// []

exemplo(1, 2, 3, 4, 5);
// Output:
// 1
// 2
// [3, 4, 5]
```
O rest parameter é útil quando você deseja criar funções mais flexíveis que possam lidar com diferentes quantidades de argumentos, evitando assim a necessidade de usar a propriedade arguments, que é um objeto similar, mas não é um array real.
