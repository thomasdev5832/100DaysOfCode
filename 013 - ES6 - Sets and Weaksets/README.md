## ES6 - Sets and Weaksets

### Set

Um objeto Set é uma coleção de valores únicos e não ordenados. 
Podemos armazenar valores únicos em um Set e garantir que não haverá duplicatas.

Criando um Set:
```
// Criando um Set vazio
let meuSet = new Set();

// Criando um Set com valores iniciais
let outroSet = new Set([1, 2, 3, 4, 5]);
```

Operações básicas com Set:
```
meuSet.add(1); // Adiciona um elemento ao Set
meuSet.delete(1); // Remove um elemento do Set
meuSet.has(1); // Verifica se um elemento está presente no Set
meuSet.size; // Retorna o número de elementos no Set
meuSet.clear(); // Remove todos os elementos do Set
```

Iterando sobre um Set:
```
meuSet.forEach((valor) => {
  console.log(valor);
});
```

### WeakSet

O WeakSet é semelhante ao Set, mas com algumas diferenças cruciais. 
- Um WeakSet só pode conter objetos e não valores primitivos. 
- Ao contrário do Set, os objetos em um WeakSet não impedem que eles sejam coletados pelo coletor de lixo(garbage collector) se não forem referenciados por nenhum outro lugar no código.

Criando um WeakSet:
```
let meuWeakSet = new WeakSet();
let objeto1 = {};
let objeto2 = {};

meuWeakSet.add(objeto1);
meuWeakSet.add(objeto2);
```

Operações básicas com WeakSet:
```
meuWeakSet.has(objeto1); // Verifica se o objeto está presente no WeakSet
meuWeakSet.delete(objeto1); // Remove o objeto do WeakSet
```

##### Diferenças chave entre Set e WeakSet:

**Tipo de Elementos:**
- Set: Pode conter qualquer tipo de valor, incluindo primitivos e objetos.
- WeakSet: Pode conter apenas objetos.

**Referência de Objetos:**
- Set: Mantém referências aos objetos que estão nele, impedindo que sejam coletados pelo coletor de lixo.
- WeakSet: Não impede que os objetos sejam coletados pelo coletor de lixo. Se não houver outras referências ao objeto, ele pode ser coletado.

**Iteração:**
- Set: Suporta iteração através de seus elementos.
- WeakSet: Não suporta iteração. Não possui métodos como forEach.
