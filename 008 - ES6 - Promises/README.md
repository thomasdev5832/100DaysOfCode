## ES6 - Promises

Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca.

-  Promises são uma maneira de lidar com operações assíncronas de forma mais elegante e eficiente do que o uso tradicional de callbacks.

#### Criando uma Promise:
```
const minhaPromise = new Promise((resolve, reject) => {
  // Código assíncrono aqui

  // Se a operação for bem-sucedida, chame resolve com o resultado
  // Se houver um erro, chame reject com o motivo do erro
});
```
Exemplo:
```
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true; // Simulando o sucesso da operação
    if (sucesso) {
      resolve('Operação bem-sucedida!');
    } else {
      reject('Erro na operação');
    }
  }, 2000); // Simulando uma operação que leva 2 segundos
});
```

#### Manipulando o resultado de uma Promise:

Podemos usar os métodos **then** e **catch** para lidar com o resultado ou erro de uma Promise:
```
minhaPromise
  .then(resultado => {
    console.log('Sucesso:', resultado);
  })
  .catch(erro => {
    console.error('Erro:', erro);
  });
```
O método then é chamado quando a Promise é resolvida com sucesso, e o método catch é chamado quando ocorre um erro.

#### Promise.all

**Promise.all** é usado quando você tem várias Promises e deseja esperar até que todas sejam resolvidas. 

Exemplo:
```
const promise1 = Promise.resolve('Primeira Promise');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Segunda Promise'), 1000));
const promise3 = fetch('https://api.example.com/data'); // Exemplo de requisição HTTP

Promise.all([promise1, promise2, promise3])
  .then(resultados => {
    console.log('Todas as Promises foram resolvidas:', resultados);
  })
  .catch(erro => {
    console.error('Pelo menos uma Promise foi rejeitada:', erro);
  });
```

#### Promise.race
**Promise.race** é usado quando você tem várias Promises e deseja resolver ou rejeitar assim que a primeira for resolvida ou rejeitada.

Exemplo:

```
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Primeira Promise'), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Segunda Promise'), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Terceira Promise (rejeitada)'), 1500));

Promise.race([promise1, promise2, promise3])
  .then(vencedor => {
    console.log('A primeira Promise resolvida foi:', vencedor);
  })
  .catch(erro => {
    console.error('A primeira Promise rejeitada foi:', erro);
  });
```