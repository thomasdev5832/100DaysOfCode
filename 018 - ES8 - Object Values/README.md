## ES8 - Object.values

O método Object.values() foi introduzido no ECMAScript 2017 (ES8).

Object.values() é um método que faz parte da API de objetos.

Esse método retorna um array com os valores das propriedades de um objeto, na mesma ordem que um loop for...in forneceria.

- É útil quando precisamos trabalhar apenas com os valores de um objeto, sem se preocupar com as chaves ou propriedades.

Exemplo:
```
// Criando um objeto
const meuObjeto = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3'
};

// Obtendo os valores das propriedades do objeto usando Object.values()
const valores = Object.values(meuObjeto);

// Exibindo os valores no console
console.log(valores);

// Saída: [ 'valor1', 'valor2', 'valor3' ]
```

- Também é útil quando desejamos iterar sobre os valores de um objeto de forma mais concisa do que usando um loop for...in.

Outro exemplo que mostra como podemos usar Object.values() para iterar sobre os valores de um objeto:

```
const meuObjeto = {
  nome: 'Gabriel',
  idade: 25,
  cidade: 'Exemplo'
};

// Iterando sobre os valores do objeto usando um loop for...of
for (const valor of Object.values(meuObjeto)) {
  console.log(valor);
}

// Saída: 
Gabriel
25
Exemplo
```

