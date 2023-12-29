## ES8 - Object.entries

O método Object.entries faz parte do ECMAScript 2017 (também conhecido como ES8) e é usado para obter uma matriz de pares chave/valor de uma propriedade enumerável de um objeto.

- É útil quando precisamos iterar sobre as propriedades de um objeto de maneira eficiente.

Exemplo:
```
// Definindo um objeto
const meuObjeto = { a: 1, b: 2, c: 3 };

// Usando Object.entries para obter uma matriz de pares chave/valor
const matrizDeEntradas = Object.entries(meuObjeto);

// Exibindo a matriz resultante
console.log(matrizDeEntradas);
```

matrizDeEntradas será uma matriz contendo submatrizes, cada uma representando um par chave/valor do objeto meuObjeto.

Resultado:
```
[
  ['a', 1],
  ['b', 2],
  ['c', 3]
]
```

Agora, podemos iterar sobre essa matriz usando um loop, como o for...of, para acessar os pares chave/valor:

```
for (const [chave, valor] of matrizDeEntradas) {
  console.log(`Chave: ${chave}, Valor: ${valor}`);
}
```

Este loop exibirá:
```
Chave: a, Valor: 1
Chave: b, Valor: 2
Chave: c, Valor: 3
```

