# Funções com TypeScript

## Funções sem retorno

Em TypeScript, uma função que não retorna nenhum valor (ou retorna void) é declarada usando a palavra-chave **void**.

Exemplo:
```
function withoutReturn():void {
    console.log("Esta função não tem retorno!");
}

withoutReturn(); // Saída: Esta função não tem retorno!
```

## Callback como argumento

Podemos inserir uma função de callback como argumento de uma função. Nela, conseguimos denifir o tipo de argumento aceito pelo callback e também o tipo de retorno.

```
// Função que executa uma operação assíncrona e chama um callback quando concluída
function operacaoAssincrona(callback: () => void): void {
    // Simulando uma operação assíncrona
    setTimeout(() => {
        console.log("Operação assíncrona concluída");
        callback(); // Chamando o callback
    }, 2000);
}

// Chamando a função com um callback
operacaoAssincrona(() => {
    console.log("Callback executado!");
});
```
Neste exemplo, a função operacaoAssincrona aceita um parâmetro callback do tipo função que não retorna valor (() => void). Após realizar uma simulação de operação assíncrona (por meio de setTimeout), ela chama o callback.

## Generic Functions

As funções genéricas em TypeScript são aquelas que podem trabalhar com uma variedade de tipos de dados sem sacrificar a segurança de tipos. 

Isso permite escrever funções mais flexíveis e reutilizáveis.

### Sintaxe Básica:
A sintaxe básica de uma função genérica inclui a declaração de um tipo genérico entre os sinais de menor (**<**) e maior (**>**) antes dos parâmetros da função. Este tipo genérico é frequentemente chamado de **parâmetro de tipo**.

Exemplo: 
```
function exibirValor<T>(valor:T): void {
    console.log(`O valor é ${valor}`);
}

exibirValor(100);
```

### Múltiplos Parâmetros Genéricos:
Podemos ter mais de um parâmetro genérico em uma função, permitindo maior flexibilidade.
```
function exibirValores<T, U>(valor1: T, valor2: U): void {
    console.log(`Valor 1: ${valor1}`);
    console.log(`Valor 2: ${valor2}`);
}

// Exemplo de uso com números e strings
exibirValores(42, "Olá, TypeScript!");
```

## Constraints nas Generic Functions

As **constraints** são utilizadas para impor **restrições** aos tipos que podem ser usados como argumentos genéricos em uma função. 

Isso proporciona mais controle sobre os tipos aceitos, aumentando a segurança do código.

A sintaxe básica de constraints envolve o uso da palavra-chave **extends** seguida por um tipo específico ou uma combinação de tipos.

Exemplo:
```
// Função genérica para obter o maior número
function obterMaior<T extends number>(valor1: T, valor2: T): T {
    return valor1 > valor2 ? valor1 : valor2;
}

// Exemplo de uso com números
const maiorNumero = obterMaior(10, 7);
console.log(`O maior número é: ${maiorNumero}`);
```
Neste exemplo, a constraint *T extends number* é utilizada para garantir que os valores passados à função sejam do tipo number.

## Definindo o tipo de parâmetros

Em Generic Functions temos que utilizar parâmetros de tipos semelhantes, se não recebemos um erro.

Porém, há a possibilidade de determinar o tipo dos parâmetros aceitos com uma sintaxe especial.

 Durante a chamada da função, especificamos explicitamente o tipo desejado:

```
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1,2,3], [5,6,7])); // [1, 2, 3, 5, 6, 7]
console.log(mergeArrays<number | string>([1,2,3], ['apple', 'banana'])); // [1, 2, 3, 'apple', 'banana']
```
No exemplo acima, utilizamos <number | string> para definir os tipos dos parâmetros. 

## Argumentos opcionais

Em TypeScript, podemos tornar um parâmetro de uma função opcional adicionando um ponto de interrogação (**?**) ao final do nome do parâmetro. 

Isso significa que o parâmetro pode ser omitido ao chamar a função, e seu valor será *undefined* se não for fornecido. 

Exemplo:
```
// Função com parâmetro opcional
function saudacao(nome: string, saudacaoPersonalizada?: string): string {
    if (saudacaoPersonalizada) {
        return `${saudacaoPersonalizada}, ${nome}! Tudo bem?`;
    } else {
        return `Olá, ${nome}!`;
    }
}

// Exemplos de uso
const saudacaoPadrao = saudacao("Rafael");
console.log(saudacaoPadrao);  // Saída: "Olá, Rafael!"

const saudacaoCustomizada = saudacao("Rafael", "Oi");
console.log(saudacaoCustomizada);  // Saída: "Oi, Rafael! Tudo bem?"
```

Lembre-se de que os parâmetros opcionais devem sempre vir após os parâmetros obrigatórios na lista de parâmetros da função.

## Parâmetro Default

Em TypeScript, podemos definir valores padrão para os parâmetros de uma função. Isso permite chamar a função sem fornecer um valor para esses parâmetros, e eles assumirão os valores padrão que especificamos.

Exemplo:
```
// Função com parâmetros padrão
function saudacao(nome: string, saudacaoPersonalizada: string = "Olá"): string {
    return `${saudacaoPersonalizada}, ${nome}!`;
}

// Exemplos de uso
const saudacaoPadrao = saudacao("Rafael");
console.log(saudacaoPadrao);  // Saída: "Olá, Rafael!"

const saudacaoCustomizada = saudacao("Rafael", "Oi");
console.log(saudacaoCustomizada);  // Saída: "Oi, Rafael!"
```

É importante notar que os parâmetros com valores padrão devem vir após os parâmetros obrigatórios na lista de parâmetros da função. No exemplo acima, nome é um parâmetro obrigatório, e saudacaoPersonalizada é o parâmetro com valor padrão.

## Tipo unknown

O tipo **unknown** no TypeScript é um tipo seguro que representa um valor desconhecido. Ele é usado quando você não sabe o tipo de um valor, mas ainda deseja garantir a segurança de tipos. Ao contrário do tipo **any**, **unknown** é mais restrito e requer verificações de tipo antes de realizar operações nele.

A principal ideia por trás do unknown é que **precisamos fazer verificações explícitas de tipo antes de usá-lo.** Isso ajuda a evitar operações inseguras e fornece maior segurança de tipos.

Exemplo:
```
let valorDesconhecido: unknown;

valorDesconhecido = 10;
//let numero: number = valorDesconhecido; // Erro, pois não é seguro atribuir diretamente

// verificando o tipo antes de realizar operações específicas
if (typeof valorDesconhecido === 'number') {
    let numero: number = valorDesconhecido; // Agora é seguro
    console.log(`O número é ${numero}`);
}
// Saída: O número é 10
```
 
 ## Tipo never

 Em TypeScript, o tipo **never** representa o conjunto de valores para os quais **não há valores existentes**. 
 
 Isso significa que uma função que retorna never nunca retorna ou sempre lança uma exceção. 
 
 Além disso, variáveis do tipo never nunca podem ter um valor atribuído a elas.

Exemplo com mensagem de erro:
```
function showErrorMessage(msg:string): never {
    throw new Error(msg);
}

showErrorMessage('Houve um erro!'); // Uncaught Error: Houve um erro!
```
As funções que retornam never geralmente são usadas para sinalizar que algo inesperado aconteceu ou que o fluxo de controle nunca deveria atingir esse ponto.

# Rest operator

O operador de rest (**...**) no TypeScript é usado para capturar os argumentos restantes em uma lista e representá-los como um único array. 

Este operador é útil quando você tem uma função que aceita um número variável de argumentos.

Exemplo:
```
// Função que aceita um número variável de argumentos
function somar(...numeros: number[]): number {
    return numeros.reduce((total, numero) => total + numero, 0);
}

// Exemplos de uso
const resultado1 = somar(1, 2, 3);
console.log(resultado1); // Saída: 6

const resultado2 = somar(10, 20, 30, 40, 50);
console.log(resultado2); // Saída: 150

```

## Destructing como parâmetro em funções

A desestruturação pode ser usada diretamente como parte da definição dos parâmetros de uma função no TypeScript, permitindo **extrair valores específicos de objetos ou arrays passados como argumentos**.

### Desestruturação de Objetos:
```
// Função que recebe um objeto como parâmetro e usa desestruturação
function exibirDetalhesPessoa({ nome, idade }: { nome: string, idade: number }): void {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

// Chamada da função com um objeto
const pessoa = { nome: "Rafael", idade: 25 };
exibirDetalhesPessoa(pessoa);
// Saída: Nome: Rafael, Idade: 25
```
Neste exemplo, a função exibirDetalhesPessoa recebe um objeto como parâmetro e usa desestruturação para extrair as propriedades nome e idade diretamente.

### Desestruturação de Arrays:
```
// Função que recebe um array como parâmetro e usa desestruturação
function exibirNumeros([primeiro, segundo]: number[]): void {
    console.log(`Primeiro: ${primeiro}, Segundo: ${segundo}`);
}

// Chamada da função com um array
const numeros = [10, 20];
exibirNumeros(numeros);
// Saída: Primeiro: 10, Segundo: 20
```
Neste exemplo, a função exibirNumeros recebe um array como parâmetro e usa desestruturação para extrair os elementos primeiro e segundo.

### Desestruturação com Atribuição Default:

Também podemos fornecer valores padrão para os parâmetros desestruturados, permitindo que a função seja chamada sem fornecer todos os valores esperados.

```
// Função com desestruturação e valores padrão
function exibirDetalhesProduto({ nome, preco = 0 }: { nome: string, preco?: number }): void {
    console.log(`Produto: ${nome}, Preço: ${preco}`);
}

// Chamada da função com objeto incompleto
const produto = { nome: "Notebook" };
exibirDetalhesProduto(produto);
// Saída: Produto: Notebook, Preço: 0
```
Neste exemplo, o parâmetro preco tem um valor padrão de 0, o que permite chamar a função mesmo se o preço não for fornecido explicitamente.