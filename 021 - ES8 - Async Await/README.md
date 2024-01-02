## Async / Await

#### 1. Entendendo a Necessidade:
JavaScript é uma linguagem de programação de alto nível e assíncrona por natureza, o que significa que muitas operações são executadas de forma não sequencial. Para lidar com isso, inicialmente, foram introduzidas as callbacks e, posteriormente, as Promises.

#### 2. Problemas com Callbacks e Promises:
- **Callbacks**: Podem levar a um código chamado "Callback Hell" (um aninhamento excessivo de callbacks), dificultando a leitura e manutenção.

- **Promises**: Melhoram a situação, mas ainda podem resultar em uma cadeia de .then() e .catch() que não é tão legível.

#### 3. Async/await
Async/await é uma forma de lidar com código assíncrono em JavaScript de maneira mais clara e concisa, tornando-o mais parecido com o estilo de programação síncrono. Ele é construído sobre o conceito de Promises.

#### 4. Async Function:
Uma função assíncrona é declarada usando a palavra-chave **async**. Isso permite o uso de await dentro da função. O async antes de uma função retorna uma Promise.
```
async function minhaFuncaoAssincrona() {
    return 'Olá, mundo!';
}
```

#### 5. Await Keyword:
A palavra-chave **await** é usada dentro de funções assíncronas para ***esperar que uma Promise seja resolvida antes de continuar***. Ela pausa a execução da função até que a Promise seja resolvida ou rejeitada.

```
async function exemploAwait() {
    const resultado = await minhaFuncaoAssincrona();
    console.log(resultado);
}
```

#### 6. Gestão de Erros com Try...Catch:
Ao usar async/await, é aconselhável envolver o código em um bloco try...catch para lidar com erros de forma mais síncrona e clara.
```
async function exemploComTratamentoDeErro() {
    try {
        const resultado = await minhaFuncaoAssincrona();
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}
```

#### 7. Async/Await em Sequência:
Async/await permite escrever código assíncrono de forma sequencial, o que é mais intuitivo e fácil de entender.
```
async function exemploAsyncSequencial() {
    const resultado1 = await funcaoAssincrona1();
    const resultado2 = await funcaoAssincrona2(resultado1);
    console.log(resultado2);
}
```

#### 8. Async/Await em Paralelo:
Para executar várias operações assíncronas em paralelo, podemos usar Promise.all. Isso pode melhorar significativamente o desempenho.

```
async function exemploAsyncParalelo() {
    const [resultado1, resultado2] = await Promise.all([funcaoAssincrona1(), funcaoAssincrona2()]);
    console.log(resultado1, resultado2);
}
```

#### 9. Considerações Adicionais:
- **Performance**: Async/await não melhora diretamente a velocidade de execução, mas pode melhorar a legibilidade e manutenção do código.

- **Compatibilidade**: Certifique-se de que o ambiente onde seu código JavaScript é executado suporta async/await.

- **Assincronicidade**: Lembre-se de que mesmo com async/await, JavaScript é uma linguagem assíncrona, e operações intensivas ainda podem ser tratadas de maneira assíncrona.

#### 10. Exemplo Prático:
```
async function obterDados() {
    try {
        const resultado1 = await obterPrimeirosDados();
        const resultado2 = await obterDadosRelacionados(resultado1);
        console.log(resultado2);
    } catch (erro) {
        console.error(erro);
    }
}

obterDados();
```
Esse exemplo simula o uso de async/await para obter e manipular dados de forma sequencial.


