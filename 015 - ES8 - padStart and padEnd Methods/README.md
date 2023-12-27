## ES8 - padStart and padEnd methods

Os métodos padStart e padEnd foram introduzidos no ECMAScript 2017 (ES8) para facilitar a formatação de strings.

#### String.prototype.padStart()

O método padStart é utilizado para preencher o início de uma string com caracteres específicos até atingir um determinado comprimento. 

Sintaxe:
```
str.padStart(targetLength [, padString])
```

- **targetLength**: O comprimento desejado da string resultante.
- **padString** (opcional): A string usada para preencher. O padrão é espaço em branco.

Exemplo:
```
let str = "42";
let paddedStr = str.padStart(5, "0");
console.log(paddedStr); // Output: "00042"
```

#### String.prototype.padEnd()

O método padEnd é semelhante ao padStart, mas ele preenche o final da string com caracteres específicos até atingir um determinado comprimento. 

Sintaxe:
```
str.padEnd(targetLength [, padString])
```

- **targetLength**: O comprimento desejado da string resultante.
- **padString** (opcional): A string usada para preencher. O padrão é espaço em branco.

Exemplo: 
```
let str = "Hello";
let paddedStr = str.padEnd(8, "!");
console.log(paddedStr); // Output: "Hello!!!"
```