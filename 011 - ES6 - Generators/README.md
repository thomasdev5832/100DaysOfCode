## ES6 - Generators

Os geradores (generators) permitem criar iteradores de uma maneira mais fácil e flexível. 
- São definidos usando uma função geradora (generate function), que é uma função que pode ser pausada e retomada, permitindo a produção de uma sequência de valores ao longo do tempo.

- A sintaxe básica de uma função geradora é introduzida usando a palavra-chave **function***, e o comportamento de pausar e retomar a execução é alcançado usando a palavra-chave **yield**.

Exemplo simples de uma função geradora:
```
function* minhaFuncaoGeradora() {
  yield 1;
  yield 2;
  yield 3;
}

// Criando um iterador a partir da função geradora
const iterador = minhaFuncaoGeradora();

// Obtendo os valores usando o método next()
console.log(iterador.next().value); // 1
console.log(iterador.next().value); // 2
console.log(iterador.next().value); // 3
console.log(iterador.next().value); // undefined
```

Neste exemplo, a função geradora minhaFuncaoGeradora retorna um iterador, e cada chamada para **next()** retorna um objeto com a propriedade value, que contém o próximo valor na sequência. 

O estado da função geradora é mantido entre chamadas, o que permite que ela seja pausada e retomada.

Outra característica interessante dos geradores é que eles podem ser usados para criar iterações infinitas. 
Por exemplo:
```
function* sequenciaInfinita() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const iteradorInfinito = sequenciaInfinita();

console.log(iteradorInfinito.next().value); // 0
console.log(iteradorInfinito.next().value); // 1
console.log(iteradorInfinito.next().value); // 2
// E assim por diante...
```


Os geradores também são frequentemente utilizados com a nova sintaxe **for...of** para simplificar a iteração sobre os valores gerados:
```
function* minhaFuncaoGeradora() {
  yield 'A';
  yield 'B';
  yield 'C';
}

for (let valor of minhaFuncaoGeradora()) {
  console.log(valor);
}
// Saída:
// A
// B
// C
```

