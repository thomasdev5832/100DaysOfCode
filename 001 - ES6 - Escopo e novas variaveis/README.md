## ES6: Escopo, variáveis e hoisting
#### Escopo Global:
- Variáveis declaradas fora de qualquer função ou bloco de código têm escopo global e são acessíveis em todo o código.
```
let globalVariable = "Eu sou global";

function exemploGlobal() {
    console.log(globalVariable); // Acesso à variável global
}
```

#### Escopo de Bloco:
- ES6 introduziu a palavra-chave **let** para declarar variáveis com escopo de bloco. Isso significa que a variável só é acessível dentro do bloco onde foi declarada.
```
function exemploBloco() {
    if (true) {
        let blocoVariable = "Eu sou do bloco";
        console.log(blocoVariable); // Acesso à variável dentro do bloco
    }
    // console.log(blocoVariable); // Isso resultaria em um erro, pois blocoVariable está fora do escopo aqui
}
```

#### Escopo de Função:
- Antes do ES6, só tínhamos a palavra-chave **var** para declarar variáveis em JavaScript, e essas variáveis têm escopo de função. No entanto, com o ES6, **let** e **const** também podem ser usados para isso.
```
function exemploFuncao() {
    let funcaoVariable = "Eu sou da função";
    console.log(funcaoVariable); // Acesso à variável dentro da função
}

// console.log(funcaoVariable); // Isso resultaria em um erro, pois funcaoVariable está fora do escopo aqui
```

#### Escopo de Constantes:
- A palavra-chave **const** também foi introduzida no ES6 para declarar variáveis constantes. Essas variáveis não podem ser reatribuídas e têm escopo de bloco.

- **const** é uma variável que não podemos reatribuir! Porém, se for um objeto, podemos modificar os valores desse objeto.

```
function exemploConstante() {
    const constanteVariable = "Eu sou constante";
    console.log(constanteVariable); // Acesso à variável dentro do bloco
    // constanteVariable = "Nova valor"; // Isso resultaria em um erro, pois não podemos reatribuir a uma constante
}
```

### Hoisting
**Hoisting** é um comportamento em que as declarações de variáveis (tanto com var quanto com function) são movidas para o topo de seus escopos durante a fase de compilação, antes da execução do código. Isso significa que podemos usar uma variável ou função antes de ela ser declarada no código, e ela ainda será reconhecida.

O hoisting ocorre apenas com a declaração, não com a inicialização. Isso significa que a variável ou função será elevada (hoisted), mas qualquer atribuição ou definição de valor permanecerá no local onde você a escreveu.

##### Hoisting com var:
```
console.log(x); // Saída: undefined
var x = 5;
console.log(x); // Saída: 5
```
O código acima é interpretado pelo JavaScript da seguinte forma:
```
var x;
console.log(x); // Saída: undefined
x = 5;
console.log(x); // Saída: 5
```
##### Hoisting com function:
Neste caso, a função é elevada para o topo do escopo, então podemos chamá-la antes da sua declaração no código.
```
hoistingExample(); // Saída: "Função foi içada!"

function hoistingExample() {
  console.log("Função foi içada!");
}
```
##### Hoisting não ocorre com let e const:
Ao contrário de var, as variáveis declaradas com let e const não são inicializadas até a sua linha de declaração. Portanto, não ocorre hoisting no mesmo sentido.
```
console.log(y); // Isso resultaria em um ReferenceError, porque y não é elevado
let y = 10;
console.log(y); // Saída: 10
```
