## ES6 - Proxies

Proxies são objetos especiais que permitem a criação de um objeto intermediário que pode interceptar e personalizar operações fundamentais em outro objeto chamado de "alvo". 
- Os proxies são úteis para implementar lógica personalizada ao acessar ou manipular propriedades de objetos.

#### Criando um Proxy
Para criar um proxy, utilizamos a classe Proxy:
```
const alvo = { mensagem: "Olá, mundo!" };

const manipulador = {
  get: function (objeto, propriedade) {
    console.log(`Lendo a propriedade: ${propriedade}`);
    return objeto[propriedade];
  }
};

const proxy = new Proxy(alvo, manipulador);

console.log(proxy.mensagem);
// Output: Lendo a propriedade: mensagem
//         Olá, mundo!
```

No exemplo acima, manipulador é um objeto que contém métodos como get, que são chamados automaticamente quando você tenta acessar uma propriedade do objeto proxy. O objeto proxy proxy é então criado usando a classe Proxy.


#### Métodos do Manipulador

Os métodos do manipulador, como get e set, permitem que você personalize diferentes operações em objetos. Aqui estão alguns dos métodos mais comuns:

- get(target, property, receiver): Chamado quando uma propriedade é lida.

- set(target, property, value, receiver): Chamado quando uma propriedade é gravada.

- apply(target, thisArg, argumentsList): Chamado quando a função é invocada.

- construct(target, argumentsList, newTarget): Chamado quando um objeto é instanciado.

#### Exemplo de Uso com Proxy para Validação

Suponha que queremos validar se uma pessoa tem a idade mínima para acessar um determinado conteúdo. Podemos usar um proxy para interceptar a leitura e gravação da propriedade idade:

```
const pessoa = { idade: 17 };

const validador = {
  set: function (obj, prop, valor) {
    if (prop === 'idade' && typeof valor !== 'number') {
      throw new TypeError('A idade deve ser um número.');
    }
    if (prop === 'idade' && valor < 18) {
      throw new Error('A idade mínima é 18 anos.');
    }
    obj[prop] = valor;
  }
};

const pessoaProxy = new Proxy(pessoa, validador);

pessoaProxy.idade = 20; // Funciona normalmente
console.log(pessoaProxy.idade); // 20

try {
  pessoaProxy.idade = 'dezessete'; // Gera um erro
} catch (error) {
  console.error(error.message); // A idade deve ser um número.
}
```

Neste exemplo, o proxy pessoaProxy garante que a propriedade idade só pode ser um número e deve ser maior ou igual a 18 anos.