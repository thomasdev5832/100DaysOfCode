## Exponentiation

 A exponenciação pode ser realizada usando o operador "**" (double asterisk) introduzido no ES7 para calcular potências.

 Exemplo:

 ```
let base = 2;
let expoente = 3;

let resultado = base ** expoente;

console.log(resultado); // Saída: 8
```
Neste exemplo, base ** expoente eleva a base à potência do expoente. Portanto, o resultado é 2^3, que é igual a 8.

Se trabalharmos com versões mais antigas do ECMAScript que não suportam o operador "**", podemos usar a função **Math.pow()** para alcançar o mesmo resultado:
```
let base = 2;
let expoente = 3;

let resultado = Math.pow(base, expoente);

console.log(resultado); // Saída: 8
```
Ambos os métodos produzirão o mesmo resultado, mas o operador "**" é mais conciso.