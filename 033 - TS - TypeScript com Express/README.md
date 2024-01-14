# TypeScript com Express

## Inicialização

Para iniciar um projeto com Express e TypeScript:
    - Criar projeto com `npm init`
    - Iniciar o TS com `npx tsc-init`
    - Instalar dependências
    - Dependências Dev `npm install @types/express @types/node ts-node-dev typescript --save-dev`
    - Install express `npm i express`
    - Criar script `app.ts` em `/src`
    - Iniciar aplicação `npm run dev`

## Utilizando o Expres

- Importar o pacote `import express from 'express'`

-  Criar a variável para receber o express `const app = express()`

- Definir a porta `app.listen(port)`

## Roteamento

Podemos utilizar qualquer verbo HTTP nas rotas do Express

```
app.use(express.json());

// rota com post
app.post("/api/product",(req, res) => {
    console.log(req.body);
    return res.send("Product added!");
})
```

### Rota para qualquer verbo

Utilizando o método **all**, podemos criar uma rota que aceita qualquer verbo.

É interessante para quando o endpoint precisa realizar várias funções.

```
app.all("/api/product/check", (req, res) => {
    if(req.method === "POST"){
        return res.send("Insert some register")
    } else if (req.method === "GET") {
        return res.send("Read some register")
    } else {
        res.send("Don't allowed!");
    }
});
```

## Interfaces do Express

As request podem utilizar o tipo **Request** e as respostas o **Response**

```
import express, { Request, Response } from "express";

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
});
```

## JSON como respostas

```
app.get("/api/json", (req:Request, res:Response) => {
    return res.json({
        name: "T-shirt",
        price: 10,
        color: "Black",
        sizes:["P","M","G"],
    });
});
```

## Router Parameters

Pegar parâmetros de rotas com Express: `req.params`

A rota criada precisa ser dinâmica

```
app.get("/api/product/:id", (req:Request, res:Response) => {
    console.log(req.params);
    const id = req.params.id;
    if(id == "1") {
        const product = {
            id: 1,
            name: 'snapback',
            price: 10
        };
        return res.json(product);
    } else {
    return res.send("Produto não encontrado");
    }
});
```

## Rotas mais complexas

Podemos ter rotas com mais de um parâmetro

Todos os dados continuam em `req.params`

O padrão é: `/algo/:param1/outracoisa/:param2`

Teremos então: param1 e param2 em req

```
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    const productId = req.params.id;
    const reviewId = req.params.reviewId;
    return res.send(`Acessando a review ${reviewId} do produto ${productId}`)
});
```

## Router Handler

Router handler basicamente é retirar a função anônima de uma rota e externalizar em uma função.

```
function getUser(req:Request, res:Response) {
    console.log(`Resgatando o uduário com id: ${req.params.id}`);
    return res.send("O usuário foi encontrado!");
}
app.get("/api/user/:id", getUser);
```

## Middleware

Middleware é um recurso para executar uma função entre a execução de uma rota.

```
import express, { NextFunction, Request, Response } from "express";

function checkUser(req:Request, res:Response, next: NextFunction) {
    if(req.params.id == "1") {
        console.log("Pode seguir!");
        next();
    } else {
        console.log("Acesso restrito!");
    }
}
app.get("/api/user/:id/access", checkUser, (req:Request, res:Response) => {
    return res.json({ msg: "Bem-vindo a área administrativa." });
});
```

## Midleware em todas as rotas

```
// // middleware em todas rotas
function showPath(req:Request, res:Response, next:NextFunction) {
    console.log(req.path); 
    next();   
}
app.use(showPath);
```

## Request e Response generics

Podemos estabelecer os argumentos que vem pelo request e vão pelo response.

Para isso vamos utilizar os Generics de Response e Request, que são interfaces disponibilizadas pelo Express.

```
app.get(
    "/api/user/:id/details/:name", 
    (
        req:Request<{id:string, name:string}>, 
        res: Response<{status: boolean}>) => {
          console.log(`ID: ${req.params.id}`);
          console.log(`Name: ${req.params.name}`); 
          return res.json({status: true});
});
```

## Tratando Erros com Try/Catch

```
app.get("/api/error", (req:Request, res:Response) => {
    try {
        throw new Error("Algo deu errado!");
    } catch (e: any) {
        res.status(500).json({msg: e.message});
    }
});
```
