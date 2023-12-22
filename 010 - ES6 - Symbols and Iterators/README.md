## ES6 - Symbols and Iterators

### Symbols

Symbols são um novo tipo de dado primitivo introduzido no ES6. 
- Eles são **únicos** e **imutáveis**, o que significa que cada Symbol que você cria é único e não pode ser alterado.

#### Criação de Symbols:
Podemos criar um Symbol usando a função Symbol():
```
const mySymbol = Symbol();
```
Também podemos adicionar uma descrição opcional para o Symbol:
```
const mySymbolWithDescription = Symbol('Descrição do Symbol');
```

#### Unicidade:
Cada Symbol é único, mesmo que criamos Symbols com a mesma descrição. A descrição é apenas uma string informativa e não afeta a unicidade do Symbol.
```
const symbol1 = Symbol('chave');
const symbol2 = Symbol('chave');

console.log(symbol1 === symbol2); // false
```

#### Usos Práticos:
São frequentemente usados como chaves de propriedades em objetos. Isso é útil quando queremos adicionar propriedades a um objeto sem o risco de colisões de nomes.
```
const myObject = {
  [Symbol('chave')]: 'valor'
};

console.log(Object.keys(myObject)); // []
```

#### Symbols e Iteração:
Symbols não são incluídos automaticamente em iterações sobre propriedades de um objeto. 
Precisamos usar métodos específicos para acessar Symbols.
```
const myObject = {
  [Symbol('chave')]: 'valor',
  regularKey: 'outra_valor'
};

console.log(Object.getOwnPropertySymbols(myObject)); // [Symbol(chave)]
```

#### Symbols Predefinidos:
O ES6 também introduziu Symbols predefinidos que são acessíveis através do objeto Symbol. 
Por exemplo, **Symbol.iterator** é usado para fazer objetos iteráveis.
```
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
```

---

### Iterable x Iterator

#### Iterável (Iterable):

Um objeto é considerado "iterável" se ele implementar o método Symbol.iterator. 

- Este método deve retornar um objeto chamado "iterador". 
- A presença desse método permite que o objeto seja iterado, geralmente usando estruturas de controle de fluxo como **for...of** ou utilizando métodos como Array.from().

Exemplo de um objeto iterável:
```
const meuObjetoIteravel = {
  [Symbol.iterator]() {
    let i = 0;
    const valores = [1, 2, 3];

    return {
      next() {
        return {
          value: valores[i++],
          done: i > valores.length
        };
      }
    };
  }
};

// Agora, podemos usar for...of para iterar sobre o objeto iterável
for (const valor of meuObjetoIteravel) {
  console.log(valor);
}
```
Neste exemplo, meuObjetoIteravel é um objeto iterável porque implementa o método Symbol.iterator que retorna um iterador.

#### Iterador (Iterator):

Um objeto é considerado um "iterador" se ele implementar o método next(). 

- Este método é chamado em cada iteração e deve retornar um objeto com as propriedades value e done. 
- A propriedade value contém o próximo valor na iteração, enquanto done indica se a iteração foi concluída.

Exemplo de um objeto iterador:

```
const meuIterador = {
  valores: [1, 2, 3],
  indice: 0,
  
  next() {
    return {
      value: this.valores[this.indice++],
      done: this.indice > this.valores.length
    };
  }
};

// Podemos usar o iterador diretamente
console.log(meuIterador.next()); // { value: 1, done: false }
console.log(meuIterador.next()); // { value: 2, done: false }
console.log(meuIterador.next()); // { value: 3, done: false }
console.log(meuIterador.next()); // { value: undefined, done: true }
```
Neste exemplo, meuIterador é um objeto iterador porque implementa o método next().

Em resumo, um objeto iterável é aquele que pode ser percorrido, enquanto um iterador é responsável por realizar a iteração, mantendo o estado interno e retornando os valores sucessivos. Esses conceitos são fundamentais para entender a iteração em JavaScript, especialmente em contextos como for...of e outros métodos que esperam objetos iteráveis.

