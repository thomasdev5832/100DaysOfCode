# Fundamentos do TypeScript II

## Arrays

### Declaração de Arrays

```
// Declaração de array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Declaração de array de strings
let palavras: string[] = ["um", "dois", "três"];

// Usando a forma genérica Array<tipo>
let frutas: Array<string> = ["maçã", "banana", "laranja"];
```

O acesso a elementos em um array é semelhante ao JavaScript, usando índices:
```
console.log(numeros[0]); // Saída: 1
console.log(palavras[1]); // Saída: dois
```

### Métodos de Array
Os arrays em TypeScript herdam os métodos do JavaScript. 
Alguns exemplos:
#### Adição e Remoção de Elementos
```
// Adicionar um elemento ao final do array
numeros.push(6);

// Remover o último elemento do array
let ultimoNumeroRemovido = numeros.pop();
```

#### Iteração sobre Elementos
```
// Iterar sobre os elementos do array
numeros.forEach(numero => console.log(numero));
```

#### Filtragem de Elementos
```
// Filtrar elementos com base em uma condição
let numerosPares = numeros.filter(numero => numero % 2 === 0);
```

### Tuplas
As tuplas são arrays com um número fixo de elementos e tipos específicos:
```
let pessoa: [string, number] = ["Rafael", 25];
```

### Tipagem de Arrays
Ao trabalhar com arrays, você pode tipar seus elementos:
```
let numeros: number[] = [1, 2, 3, 4, 5];
let palavras: string[] = ["um", "dois", "três"];

// Array com tipos mistos
let misturado: (string | number)[] = [1, "dois", 3, "quatro"];
```
O array 'misturado' aceita tanto strings quanto números.

### Iteração com for...of
Você pode usar for...of para iterar pelos elementos do array:
```
for (let numero of numeros) {
    console.log(numero);
}
```


## Tipo de parâmetro de funções

Em TypeScript, os tipos de parâmetros de funções são usados para definir os tipos de dados que uma função aceita como entrada.

Isso ajuda a garantir a consistência e a segurança do tipo durante o desenvolvimento.

### Tipos Básicos de Parâmetros
#### 1. String
Neste exemplo, a função 'saudacao' aceita um parâmetro nome do tipo **string** e retorna uma **string**.
```
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

let mensagem: string = saudacao("Satoshi Nakamoto");
```
#### 2. Números e Booleans

```
function duplicar(numero: number): number {
    return numero * 2;
}

function estaAtivo(estado: boolean): string {
    return estado ? "Ativo" : "Inativo";
}
```

### Tipos de Parâmetros Opcionais e Padrão

#### 1. Parâmetros Opcionais:
```
function saudacao(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    } else {
        return `Olá, ${nome}!`;
    }
}

let mensagem: string = saudacao("Satoshi");
let mensagemCompleta: string = saudacao("Satoshi", "Nakamoto");
```

#### 2. Parâmetros Padrão:
```
function saudacao(nome: string, sobrenome: string = "Silva"): string {
    return `Olá, ${nome} ${sobrenome}!`;
}

let mensagem: string = saudacao("Satoshi");
let mensagemCompleta: string = saudacao("Satoshi", "Nakamoto");
```

### Tipos de retorno
Ao definir o tipo de retorno de uma função, você está especificando o tipo de valor que a função produz. Isso é útil para garantir a consistência dos tipos de dados ao chamar a função e ajuda o TypeScript a detectar possíveis erros durante o desenvolvimento.

Exemplo:
```
function adicionar(a: number, b: number): number {
    return a + b;
}

let resultado: number = adicionar(3, 4);
```
No exemplo acima, a função 'adicionar' tem um tipo de retorno **number**, indicando que ela retorna um valor numérico.

#### Tipos de Retorno Condicionais:

```
function multiplicarOuConcatenar(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        return `${a}${b}`;
    }
}

let resultado1: number = multiplicarOuConcatenar(2, 3);
let resultado2: string = multiplicarOuConcatenar('Olá', ' Mundo');
```

Neste exemplo, a função 'multiplicarOuConcatenar' pode retornar tanto um número como uma string, dependendo dos tipos dos argumentos fornecidos.

#### Tipos de Retorno Personalizados (Interfaces ou Tipos):

```
interface ResultadoOperacao {
    valor: number;
    mensagem: string;
}

function realizarOperacao(a: number, b: number): ResultadoOperacao {
    const resultado: number = a + b;
    return {
        valor: resultado,
        mensagem: `A operação foi bem-sucedida. Resultado: ${resultado}`
    };
}

let resultadoFinal: ResultadoOperacao = realizarOperacao(5, 7);
```
Aqui, a função 'realizarOperacao' retorna um objeto com duas propriedades, valor e mensagem, que são parte do tipo 'ResultadoOperacao'.


## Funções Anônimas

Funções anônimas em TypeScript são funções que não têm um nome associado a elas. Em vez de serem declaradas com um nome específico, são geralmente atribuídas a variáveis ou passadas como argumentos para outras funções. 

As funções anônimas em TypeScript podem ser usadas da mesma forma que as funções nomeadas, mas oferecem flexibilidade em contextos onde você precisa de uma função temporária ou quando está trabalhando com callbacks.

Exemplo:
```
// Função anônima atribuída a uma variável
let saudacao = function(nome: string): string {
    return `Olá, ${nome}!`;
};

// Utilização da função anônima
let mensagem: string = saudacao("Rafael");
```
Neste exemplo, saudacao é uma função anônima que aceita um parâmetro nome e retorna uma saudação personalizada.

As funções anônimas em TypeScript podem ser particularmente úteis ao lidar com callbacks ou expressões de função mais curtas. 

Além disso, com a introdução das arrow functions em ECMAScript 6, o TypeScript oferece uma sintaxe mais concisa para funções anônimas:
```
// Arrow function como função anônima
let dobrar = (x: number): number => x * 2;

// Utilização da arrow function
let resultado: number = dobrar(5);
```

## Tipos de Objetos

No TypeScript também podemos determinar tipos para objetos. Ou seja, estamos determinando quais os tipos as propriedades de um objeto possuem.

Exemplo:
```
function passCoordinates(coord: {x:number, y:number}) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = {x:123, y:789};
```

### Propriedades Opcionais

Definimos uma propriedade como opcional com **?**:
```
function showNumbers(a:number, b:number, c?:number) {
    console.log(a, b, c);
}
```

### Validando parametros opcionais

```
function advancedGreeting(firstName:string, lastName?:string) {
    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}! Tudo bem?`;
    }
    return `Olá, ${firstName}! Tudo bem?`;
}
```

## Union Types

Union Types no TypeScript permitem que uma variável, parâmetro ou propriedade de objeto aceite valores de tipos diferentes. Isso é útil quando uma determinada variável pode ter mais de um tipo possível. 

A sintaxe para criar Union Types é simples, basta usar o operador **|** entre os tipos desejados.

### Exemplo básico

```
// Union Type para uma variável que pode ser string ou número
let numeroOuString: number | string;

numeroOuString = 10;      // Válido
numeroOuString = "Dez";  // Válido
```
Neste exemplo, numeroOuString pode armazenar valores do tipo number ou string.

### Utilizando em Parâmetros de Funções:

```
// Função que aceita uma string ou um número
function imprimirID(id: number | string): void {
    console.log(`ID: ${id}`);
}

imprimirID(100);    // Válido
imprimirID("abc");  // Válido
```

A função imprimirID pode ser chamada com um argumento que é do tipo number ou do tipo string.

### Propriedades com Union Type:

```
// Objeto com propriedade que aceita string ou número
let pessoa: { nome: string | number };

pessoa = { nome: "Rafael" };   // Válido
pessoa = { nome: 25 };       // Válido
```
A propriedade nome do objeto pessoa pode ser uma string ou um número.


## Type Alias

Em TypeScript, **type alias** é uma forma de criar um nome para um tipo existente ou criar tipos complexos e reutilizáveis. 

É útil quando você deseja simplificar a leitura do código ou fornecer um nome significativo para tipos mais complexos. 

Exemplo:
```
type ID = number | string
```
Neste exemplo, 'ID' é um alias que pode receber um number ou string.

## Interface

Você pode usar interfaces para descrever um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos.

Elas ajudam a estruturar o código, promovendo a reutilização, a tipagem e fornecendo uma forma de descrever a forma que um objeto deve ter.

### Declaração de uma Interface

Aqui, 'Pessoa' é uma interface que descreve um objeto com propriedades nome e idade, e um método saudacao que retorna uma string.
```
interface Pessoa {
    nome: string;
    idade: number;
    saudacao(): string;
}
```
Interface não inicializa nem implementa as propriedades declaradas dentro dela. Isso ocorre porque o único trabalho de uma interface é descrever um tipo. 

Ela define o que o contrato de código exige, enquanto uma variável, função ou classe que implementa a interface atende ao contrato fornecendo os detalhes de implementação necessários.

### Utilizando uma Interface

```
// Objeto que implementa a interface Pessoa
let usuario: Pessoa = {
    nome: "Rafael",
    idade: 10,
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(usuario.saudacao());  // Saída: Olá, meu nome é Rafael e tenho 10 anos.
```

As interfaces não têm representação em tempo de execução; elas são puramente constructos de tempo de compilação. As interfaces são particularmente úteis para documentar e validar a forma necessária de propriedades, objetos passados como parâmetros e objetos retornados de funções. Isso permite que você detecte erros e verifique se está passando os parâmetros certos no tempo de compilação, em vez de esperar para descobrir sobre eles no runtime.

### Motivos para usar uma interface em TypeScript
As interfaces geralmente são o ponto-chave de contato entre duas partes do código do TypeScript, especialmente ao trabalhar com código JavaScript existente ou objetos JavaScript internos.

Você pode usar uma interface para:

- Criar nomes abreviados para tipos comumente usados. Até mesmo com uma interface simples como a declarada no exemplo anterior, você ainda obtém o benefício do IntelliSense e da verificação de tipo.

- Impulsionar a consistência em um conjunto de objetos, porque cada objeto que implementa a interface opera sob as mesmas definições de tipo. Isso pode ser útil quando você está trabalhando com uma equipe de desenvolvedores e deseja garantir que os valores apropriados estejam sendo passados para propriedades, construtores ou funções. Por exemplo, os objetos que implementam uma interface precisam implementar todos os membros necessários da interface. Portanto, se você não passar todos os parâmetros necessários do tipo correto, o compilador do TypeScript vai gerar um erro.

- Descreva as APIs do JavaScript existentes e esclareça os tipos de retorno e os parâmetros de função. Uma interface pode fornecer uma compreensão clara do que uma função está esperando e do que ela retornará sem necessidade de várias consultas à documentação.

## Type Alias x Interface

- Na maioria das vezes podemos optar entre qualquer um dos dois recursos sem problemas;

-  **A principal diferença é que um type alias não pode ser reaberto para a adição de novas propriedades, enquanto uma interface é sempre extensível.**

- Se pretendemos mudar como o tipo se conforma, devemos utilizar a Interface.

## Literal Types

Em TypeScript, **literal types** referem-se à capacidade de usar valores literais (valores específicos) como tipos. 

Isso permite criar tipos que aceitam apenas valores específicos e não qualquer valor do mesmo tipo. 

É muito utilizado com o Union Types.

Literal types são especialmente úteis para tornar o código mais preciso e evitar erros.

### Literal Types Básicos
Aqui, 'cor' é um literal type que aceita apenas os valores "vermelho", "verde" ou "azul":
```
// Literal type para string
let cor: "vermelho" | "verde" | "azul";
cor = "vermelho";  // Válido
cor = "amarelo";   // Inválido
```

### Literal Types em Parâmetros de Funções:
A função 'cumprimentar' aceita apenas os valores literais "Oi" ou "Olá" como argumento:
```
// Literal type para parâmetro de função
function cumprimentar(saudacao: "Oi" | "Olá"): string {
    return `${saudacao}, como vai?`;
}

let mensagem: string = cumprimentar("Oi");  // Válido
let outraMensagem: string = cumprimentar("Bom dia");  // Inválido
```

### Combinando Literal Types com Outros Tipos:

Aqui, 'DiaDaSemana' é um literal type usado em uma união com outros valores literais.
```
// Combinando literal types com outros tipos
type DiaDaSemana = "domingo" | "segunda" | "terça" | "quarta" | "quinta" | "sexta" | "sábado";

let hoje: DiaDaSemana = "quarta";  // Válido
let amanha: DiaDaSemana = "quartafeira";  // Inválido
```

### Literal Types em Objetos:
A propriedade 'sexo' no objeto 'pessoa' só pode ter os valores literais "masculino" ou "feminino":
```
// Literal type em propriedade de objeto
let pessoa: {
    sexo: "masculino" | "feminino";
    idade: number;
};

pessoa = { sexo: "masculino", idade: 25 };  // Válido
pessoa = { sexo: "outro", idade: 30 };  // Inválido
```

### Literal Types em Condicionais:
A função 'verificarStatus' usa um literal type para retornar mensagens diferentes com base no valor do status.

```
// Literal type em condicional
type StatusPedido = "pendente" | "processando" | "concluído";

function verificarStatus(status: StatusPedido): string {
    if (status === "concluído") {
        return "Pedido concluído com sucesso!";
    } else {
        return "Pedido em andamento...";
    }
}

let mensagemStatus: string = verificarStatus("pendente");
```

## Non-null Assertion Operator

Às vezes, o TypeScript pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível.

Porém, se sabemos que este valor será preenchido, podemos eviotar o erro utilizando o caractere **!**

Exemplo básico:
```
let texto: string | null = retornaPossivelNulo();

// Usando o Non-null Assertion Operator para afirmar que 'texto' não é nulo
let comprimento: number = texto!.length;

console.log(comprimento);
```
Neste exemplo, **texto!** é uma afirmação de não nulidade, dizendo ao TypeScript que o desenvolvedor tem certeza de que texto não é nulo. Isso permite acessar a propriedade length da string sem causar um erro de compilação.

>É importante usar o Non-null Assertion Operator com cautela, pois ele transfere a responsabilidade para o desenvolvedor de garantir que a expressão nunca seja nula ou indefinida. 


