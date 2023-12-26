## Maps and Weakmaps

### Map
O objeto Map é uma estrutura de dados que permite associar chaves a valores. 

Diferentemente dos objetos em JavaScript, as chaves em um Map podem ser de qualquer tipo, incluindo objetos e funções. 

##### Criando um Map:
```
// Criando um Map vazio
let myMap = new Map();

// Criando um Map com pares chave-valor iniciais
let myMap = new Map([
  ['chave1', 'valor1'],
  [42, 'resposta'],
  [{ name: 'John' }, 'objeto']
]);
```

#### Métodos Principais:

**set(key, value)**: Adiciona um par chave-valor ao Map.
```
myMap.set('novaChave', 'novoValor');
```

**get(key)**: Retorna o valor associado à chave ou undefined se a chave não existir.
```
let valor = myMap.get('novaChave');
```

**has(key)**: Verifica se a chave existe no Map.
```
let existeChave = myMap.has('novaChave');
```

**delete(key)**: Remove o par chave-valor associado à chave.
```
myMap.delete('novaChave');
```

**forEach(callback)**: Itera sobre todos os pares chave-valor no Map.
```
myMap.forEach((valor, chave) => {
  console.log(chave, valor);
});
```

---

### WeakMap

O WeakMap é uma variação mais limitada do Map. 
- A principal diferença é que as chaves em um WeakMap só podem ser objetos, e essas chaves são "fracamente" mantidas, o que significa que não impedem a coleta de lixo se não houver mais referências a essas chaves.

##### Criando um WeakMap:
```
// Criando um WeakMap vazio
let myWeakMap = new WeakMap();

// Não é possível criar um WeakMap com pares chave-valor iniciais como no Map
```

#### Métodos Principais:
**set(key, value)**: Adiciona um par chave-valor ao WeakMap.
```
let chave = {};
myWeakMap.set(chave, 'valorAssociado');
```

**get(key)**: Retorna o valor associado à chave ou undefined se a chave não existir.
```
let valor = myWeakMap.get(chave);
```

**has(key)**: Verifica se a chave existe no WeakMap.
```
let existeChave = myWeakMap.has(chave);
```

**delete(key)**: Remove o par chave-valor associado à chave.
```
myWeakMap.delete(chave);
```

---

###### Uso Comum:
**Map**: Use quando precisar associar dados a chaves e desejar que essas chaves sejam de qualquer tipo.

**WeakMap**: Use quando precisar associar dados a objetos específicos e desejar que a coleta de lixo funcione para esses objetos.











