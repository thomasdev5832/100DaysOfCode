## ES6: Arrow function
- Adição introduzida no ES6 para simplificar a sintaxe de funções em JavaScript.
- Oferecem uma maneira mais concisa de escrever funções anônimas.

#### Sintaxe Básica:
```
// Forma completa
const soma = (a, b) => {
  return a + b;
};

// Se houver apenas uma instrução, as chaves e a palavra-chave 'return' podem ser omitidas
const quadrado = x => x * x;
```

#### Sem parâmetros:
```
const saudacao = () => {
  console.log("Olá, mundo!");
};
```

#### Retorno Implícito:
Quando a função tem apenas uma expressão, podemos omitir as chaves e **return**. O valor da expressão será automaticamente retornado.
```
const cubo = x => x ** 3;
```

#### Uso com Arrays:
As Arrow Functions são frequentemente usadas em conjunto com métodos de array, como **map**, **filter** e **reduce**.
Exemplo com **map**:
```
const numeros = [1, 2, 3, 4, 5];

const dobrar = numeros.map(numero => numero * 2);
// Resultado: [2, 4, 6, 8, 10]
```

#### Contexto (this):
Arrow Functions não têm seu próprio **this**, elas herdam o **this** do escopo em que foram criadas. 
```
function Exemplo() {
  this.valor = 42;

  // Usando uma Arrow Function para manter o 'this' do contexto externo
  this.obterValor = () => this.valor;
}

const exemplo = new Exemplo();
console.log(exemplo.obterValor()); // Resultado: 42
```

