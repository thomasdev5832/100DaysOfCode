import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello, Express!");
});

// rota com post
app.post("/api/product",(req, res) => {
    console.log(req.body);
    return res.send("Product added!");
});

// // middleware em todas rotas
function showPath(req:Request, res:Response, next:NextFunction) {
    console.log(req.path); 
    next();   
}
app.use(showPath);

// rota para todos verbos
app.all("/api/product/check", (req, res) => {
    if(req.method === "POST"){
        return res.send("Insert some register")
    } else if (req.method === "GET") {
        return res.send("Read some register")
    } else {
        res.send("Não podemos realizar esta operação!");
    }
});

// interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
});

// enviando json
app.get("/api/json", (req:Request, res:Response) => {
    return res.json({
        name: "T-shirt",
        price: 10,
        color: "Black",
        sizes:["P","M","G"],
    });
});

// router params
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

// rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);
    
    const productId = req.params.id;
    const reviewId = req.params.reviewId;
    return res.send(`Acessando a review ${reviewId} do produto ${productId}`)
});

// router handler
function getUser(req:Request, res:Response) {
    console.log(`Resgatando o uduário com id: ${req.params.id}`);
    return res.send("O usuário foi encontrado!");
}
app.get("/api/user/:id", getUser);

// middlware
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


// req res generics
app.get(
    "/api/user/:id/details/:name", 
    (
        req:Request<{id:string, name:string}>, 
        res: Response<{status: boolean}>) => {
          console.log(`ID: ${req.params.id}`);
          console.log(`Name: ${req.params.name}`); 
          return res.json({status: true});
});

// tratando erros
app.get("/api/error", (req:Request, res:Response) => {
    try {
        throw new Error("Algo deu errado!");
    } catch (e: any) {
        res.status(500).json({msg: e.message});
    }
});

app.listen(3000, () => {
    console.log('App TS + Express is running...');
});

