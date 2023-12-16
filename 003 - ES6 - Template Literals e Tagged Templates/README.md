## ES6 - Template Literals & Tagged Templates

**Template literals** são uma maneira mais limpa e legível de construir strings complexas em comparação com a concatenação tradicional de strings. 

- São definidos usando crases (**`**) em vez de aspas simples ou duplas.

#### Interpolação de Variáveis:
- Usando **${}** dentro da string, podemos incorporar o valor de variáveis diretamente.
```
let nome = "Rafael";
let idade = 10;
let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;

console.log(mensagem);
// Saída: Olá, meu nome é Rafael e tenho 10 anos.
```

#### Expressões e Operações:
```
let a = 5;
let b = 10;
let resultado = `A soma de ${a} e ${b} é igual a ${a + b}.`;

console.log(resultado);
// Saída: A soma de 5 e 10 é igual a 15.
```

#### Strings Multilinhas:
- As strings multilinhas são definidas diretamente, sem a necessidade de caracteres de escape.
```
let paragrafo = `
  Este é um exemplo de template literal
  que suporta strings multilinhas.
  Pode conter quebras de linha e espaçamento.
`;

console.log(paragrafo);
```

#### Aninhamento de Templates Literals:
```
let nome = "Maria";
let profissao = "engenheira";
let detalhes = `Meu nome é ${nome} e sou uma ${profissao}.`;

let apresentacao = `Bem-vindo! ${detalhes}`;

console.log(apresentacao);
// Saída: Bem-vindo! Meu nome é Maria e sou uma engenheira.
```
---

### Tagged Templates

Permite processar strings de template usando uma função especial chamada de **"tag function"**. Essa função pode manipular as partes da string e os valores das expressões interpoladas antes de retornar o resultado final.

Neste exemplo, a tag function ***maiusculas*** converte todas as letras das partes da string e dos valores interpolados para maiúsculas, utilizando o método **toUpperCase()**.
```
function maiusculas(strings, ...valores) {
  let resultado = '';

  strings.forEach((str, i) => {
    resultado += str.toUpperCase();
    if (i < valores.length) {
      resultado += String(valores[i]).toUpperCase();
    }
  });

  return resultado;
}

let fruta = 'maçã';
let quantidade = 3;

let mensagem = maiusculas`Eu tenho ${quantidade} ${fruta}(s).`;

console.log(mensagem);
// Saída: EU TENHO 3 MAÇÃ(S).
```