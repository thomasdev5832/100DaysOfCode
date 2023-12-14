### ES6: Escopo
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
```
function exemploConstante() {
    const constanteVariable = "Eu sou constante";
    console.log(constanteVariable); // Acesso à variável dentro do bloco
    // constanteVariable = "Nova valor"; // Isso resultaria em um erro, pois não podemos reatribuir a uma constante
}

```