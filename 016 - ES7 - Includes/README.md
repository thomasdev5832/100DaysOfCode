## ES7: array.includes

O método Array.includes() é uma funcionalidade introduzida no ECMAScript 2016 (também conhecido como ES7) e está disponível no JavaScript moderno.

É utilizado para verificar se um array contém um determinado elemento e retorna **true** se o elemento estiver presente, e **false** caso contrário.

Exemplo:
```
const frutas = ['maçã', 'banana', 'laranja', 'morango'];

// Verificar se 'laranja' está presente no array
const estaPresente = frutas.includes('laranja');

console.log(estaPresente);  // Saída: true
```

Também é possível fornecer um segundo parâmetro opcional para Array.includes(), que especifica a posição a partir da qual começar a busca no array. 
Se fornecido, a busca começará nessa posição e continuará até o final do array. 

Exemplo:
```
const numeros = [1, 2, 3, 4, 5];

// Verificar se o número 3 está presente no array, começando a busca a partir da posição 2
const estaPresente = numeros.includes(3, 2);

console.log(estaPresente);  // Saída: false, porque o 3 está na posição 2, e começamos a busca a partir da posição 2
```

Array.includes() faz uma comparação estrita (usando o operador ===), o que significa que não realiza coerção de tipos. Portanto, a comparação levará em consideração tanto o valor quanto o tipo de dados.