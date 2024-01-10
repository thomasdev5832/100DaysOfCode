# Classes em TypeScript

Em TypeScript, assim como em outras linguagens orientadas a objetos, as classes são uma forma de organizar e estruturar código. 

Classes permitem criar objetos que têm propriedades e métodos relacionados.

### Sintaxe básica de uma classe em TypeScript:

```
class Carro {
    // Propriedades
    marca: string;
    modelo: string;
    ano: number;

    // Construtor
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método
    exibirInformacoes(): string {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Criando uma instância da classe Carro
let meuCarro = new Carro("Toyota", "Corolla", 2022);

// Acessando propriedades e métodos
console.log(meuCarro.exibirInformacoes()); // Saída: Carro: Toyota Corolla, Ano: 2022
```

Neste exemplo, criamos uma classe Carro com propriedades (marca, modelo e ano), um construtor para inicializar essas propriedades quando um objeto é criado e um método exibirInformacoes que retorna uma string com informações sobre o carro.

## Constructor

Em TypeScript, o constructor é um método especial de uma classe que é chamado automaticamente quando uma instância da classe é criada. Ele é usado para inicializar as propriedades da classe e executar qualquer lógica de inicialização necessária. 

### Sintaxe básica:
```
class MinhaClasse {
    // Propriedades da classe
    propriedade1: tipo;
    propriedade2: tipo;

    // Constructor - método especial para inicialização
    constructor(parametro1: tipo, parametro2: tipo) {
        // Inicialização de propriedades
        this.propriedade1 = parametro1;
        this.propriedade2 = parametro2;
    }

    // Outros métodos da classe
    meuMetodo(): tipo {
        // Implementação do método
    }
}

// Criando uma instância da classe
let minhaInstancia = new MinhaClasse(valor1, valor2);
```

### Exemplo prático:

```
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando uma instância da classe Pessoa
let pessoa1 = new Pessoa("João", 25);

// Chamando o método saudacao
console.log(pessoa1.saudacao()); // Saída: Olá, meu nome é João e tenho 25 anos.
```
Neste exemplo, a classe Pessoa tem um constructor que recebe o nome e a idade como parâmetros e os atribui às propriedades correspondentes. O método saudacao utiliza essas propriedades para criar uma saudação personalizada quando chamado na instância da classe.


## Propriedades readonly

Em TypeScript, você pode usar a palavra-chave **readonly** para criar propriedades que não podem ser modificadas após a inicialização. 

Isso é útil quando você deseja garantir que certas propriedades permaneçam constantes ao longo do ciclo de vida de uma instância da classe. 

A utilização de propriedades readonly é útil quando você quer garantir que certos valores não sejam alterados acidentalmente durante a execução do programa. Isso pode ajudar a evitar bugs relacionados à mutabilidade indesejada.

```
class Exemplo {
    readonly propriedadeSomenteLeitura: string;

    constructor(valorInicial: string) {
        this.propriedadeSomenteLeitura = valorInicial;
    }

    tentarModificar(): void {
        // Isso resultará em um erro de compilação
        // this.propriedadeSomenteLeitura = "Novo Valor";
    }
}

// Criando uma instância da classe
let instaciaExemplo = new Exemplo("Valor Inicial");

// Acesso à propriedade somente leitura
console.log(instaciaExemplo.propriedadeSomenteLeitura); // Saída: Valor Inicial

// Tentativa de modificação (resultará em erro)
// instaciaExemplo.propriedadeSomenteLeitura = "Novo Valor"; // Erro de compilação
```
Neste exemplo, propriedadeSomenteLeitura é declarada como readonly. Isso significa que ela só pode ser atribuída uma vez, no momento da inicialização na função constructor. 

Qualquer tentativa de modificação posterior resultará em um erro de compilação.

Lembre-se de que a verificação de readonly ocorre em tempo de compilação e não em tempo de execução. Isso significa que, enquanto você não conseguir modificar a propriedade diretamente no código TypeScript, não há restrições em nível de JavaScript durante a execução. 

## Herança em TypeScript:

```
class CarroEsportivo extends Carro {
    // Novas propriedades específicas de CarroEsportivo
    velocidadeMaxima: number;

    // Novo construtor
    constructor(marca: string, modelo: string, ano: number, velocidadeMaxima: number) {
        super(marca, modelo, ano); // Chama o construtor da classe pai (Carro)
        this.velocidadeMaxima = velocidadeMaxima;
    }

    // Novo método específico de CarroEsportivo
    acelerar(): string {
        return `Acelerando até ${this.velocidadeMaxima} km/h!`;
    }
}

// Criando uma instância da classe CarroEsportivo
let meuCarroEsportivo = new CarroEsportivo("Ferrari", "488 GTB", 2023, 330);

// Acessando propriedades e métodos da classe pai e da classe filha
console.log(meuCarroEsportivo.exibirInformacoes()); // Saída: Carro: Ferrari 488 GTB, Ano: 2023
console.log(meuCarroEsportivo.acelerar()); // Saída: Acelerando até 330 km/h!
```
Neste exemplo, criamos uma classe CarroEsportivo que estende a classe Carro. A classe filha herda propriedades e métodos da classe pai, mas também pode ter suas próprias propriedades e métodos específicos.

## Métodos

Os métodos em classes são funções que estão associadas a uma classe e podem ser chamadas nas instâncias dessa classe. 

### Sintaxe básica de um método em uma classe TypeScript:

```
class MinhaClasse {
    // Propriedades da classe
    propriedade1: tipo;
    propriedade2: tipo;

    // Constructor - método especial para inicialização
    constructor(parametro1: tipo, parametro2: tipo) {
        this.propriedade1 = parametro1;
        this.propriedade2 = parametro2;
    }

    // Método da classe
    meuMetodo(): tipoRetorno {
        // Implementação do método
        // Pode acessar propriedades usando this.propriedade1, this.propriedade2, etc.
        return valorRetorno;
    }
}

// Criando uma instância da classe
let minhaInstancia = new MinhaClasse(valor1, valor2);

// Chamando o método da classe
let resultado = minhaInstancia.meuMetodo();
```

- 1. Método da classe: No corpo da classe, você pode declarar métodos. Eles são funções associadas à classe e podem acessar as propriedades da instância usando a palavra-chave this.

- 2. Chamando o método: Após criar uma instância da classe, você pode chamar os métodos associados a essa instância usando a notação de ponto.

Exemplo prático:

```
class Calculadora {
    // Método de soma
    somar(numero1: number, numero2: number): number {
        return numero1 + numero2;
    }

    // Método de subtração
    subtrair(numero1: number, numero2: number): number {
        return numero1 - numero2;
    }
}

// Criando uma instância da classe Calculadora
let minhaCalculadora = new Calculadora();

// Chamando os métodos da classe
let resultadoSoma = minhaCalculadora.somar(5, 3); // Resultado: 8
let resultadoSubtracao = minhaCalculadora.subtrair(10, 4); // Resultado: 6

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
```

Neste exemplo, a classe Calculadora possui dois métodos, somar e subtrair, que realizam operações matemáticas simples. 

## This

A palavra-chave **this** é usada para se referir à instância atual da classe. 

Ela é frequentemente utilizada dentro dos métodos de uma classe para acessar ou modificar as propriedades da instância. 

### Dentro do método da classe:

```
class Exemplo {
    propriedade: string;

    constructor(valorInicial: string) {
        this.propriedade = valorInicial;
    }

    mostrarPropriedade(): void {
        console.log(this.propriedade);
    }
}

let instancia = new Exemplo("Valor Inicial");
instancia.mostrarPropriedade(); // Saída: Valor Inicial
```
Neste exemplo, **this.propriedade** dentro do método mostrarPropriedade refere-se à propriedade da instância atual da classe Exemplo.

### Callback functions e arrow functions:

O comportamento de this pode ser diferente quando você está lidando com funções de retorno de chamada (callbacks) ou arrow functions. 

No caso de funções de retorno de chamada regulares, o valor de this pode mudar dependendo do contexto de chamada.

Arrow functions, por outro lado, capturam o valor de this do contexto em que foram definidas.

```
class ExemploCallback {
    propriedade: string;

    constructor(valorInicial: string) {
        this.propriedade = valorInicial;
    }

    mostrarPropriedadeCallback(): void {
        setTimeout(function() {
            // Dentro da função de retorno de chamada, 'this' pode não se referir à instância da classe
            console.log(this.propriedade); // Pode resultar em 'undefined' ou erro
        }, 1000);
    }

    mostrarPropriedadeArrow(): void {
        setTimeout(() => {
            // Arrow function captura o valor de 'this' do contexto em que foi definida
            console.log(this.propriedade); // Saída: Valor Inicial
        }, 1000);
    }
}

let instanciaCallback = new ExemploCallback("Valor Inicial");
instanciaCallback.mostrarPropriedadeCallback(); // Pode resultar em erro
instanciaCallback.mostrarPropriedadeArrow(); // Saída: Valor Inicial
```
No método mostrarPropriedadeCallback, this pode não se referir à instância da classe dentro da função de retorno de chamada, causando um erro ou resultando em undefined. No entanto, na mostrarPropriedadeArrow, a arrow function captura o valor correto de this do contexto da classe.

### Uso de bind:

Em situações onde você precisa garantir que this seja associado à instância correta, você pode usar o método bind:

```
class ExemploBind {
    propriedade: string;

    constructor(valorInicial: string) {
        this.propriedade = valorInicial;
    }

    mostrarPropriedadeCallbackBind(): void {
        setTimeout(function() {
            console.log(this.propriedade);
        }.bind(this), 1000);
    }
}

let instanciaBind = new ExemploBind("Valor Inicial");
instanciaBind.mostrarPropriedadeCallbackBind(); // Saída: Valor Inicial
```
O método bind(this) garante que, dentro da função de retorno de chamada, this seja associado à instância da classe.


## Getter

Um getter é um método que permite que você obtenha o valor de uma propriedade. Ele é usado para encapsular a lógica de obtenção de um valor específico.

```
class ExemploGetter {
    private _propriedade: string;

    constructor(valorInicial: string) {
        this._propriedade = valorInicial;
    }

    get propriedade(): string {
        // Lógica personalizada, se necessário
        return this._propriedade;
    }
}

let instanciaGetter = new ExemploGetter("Valor Inicial");
console.log(instanciaGetter.propriedade); // Saída: Valor Inicial
```
No exemplo acima, o getter propriedade permite que você acesse a propriedade _propriedade de ExemploGetter de maneira controlada. Você pode adicionar lógica personalizada dentro do getter conforme necessário.

## Setter


Um setter é um método que permite que você defina o valor de uma propriedade. Ele é usado para encapsular a lógica de atribuição de um valor específico.

```
class ExemploSetter {
    private _propriedade: string;

    constructor(valorInicial: string) {
        this._propriedade = valorInicial;
    }

    get propriedade(): string {
        return this._propriedade;
    }

    set propriedade(novoValor: string) {
        // Lógica personalizada, se necessário
        this._propriedade = novoValor;
    }
}

let instanciaSetter = new ExemploSetter("Valor Inicial");
console.log(instanciaSetter.propriedade); // Saída: Valor Inicial

instanciaSetter.propriedade = "Novo Valor";
console.log(instanciaSetter.propriedade); // Saída: Novo Valor

```

No exemplo acima, o setter propriedade permite que você atribua um novo valor à propriedade _propriedade de ExemploSetter de maneira controlada. Novamente, você pode adicionar lógica personalizada dentro do setter conforme necessário.

#### Observações Importantes:
- Getters e setters são uma forma de encapsulação que ajuda a controlar o acesso e a modificação de propriedades de uma classe.

- Getters e setters são especialmente úteis quando você precisa adicionar lógica adicional, como validação, ao obter ou definir valores.

- Por convenção, os getters e setters muitas vezes têm o mesmo nome que a propriedade que estão obtendo ou definindo, mas com um prefixo ou sufixo indicando seu papel.

## Herança em Interfaces

Em TypeScript, é possível herdar interfaces de maneira semelhante à herança de classes. 

A herança de interfaces permite que uma interface estenda outra, incorporando as propriedades e métodos da interface pai na interface filha. 

### Sintaxe básica de herança de interfaces:

```
// Interface pai
interface Veiculo {
    marca: string;
    modelo: string;
}

// Interface filha que herda de Veiculo
interface Carro extends Veiculo {
    // Propriedades adicionais específicas de Carro
    ano: number;
}

// Objeto que segue a interface Carro
let meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

```
Neste exemplo, a interface Carro herda da interface Veiculo, assim Carro possui todas as propriedades de Veiculo (marca e modelo) e ainda adiciona uma propriedade adicional, ano. 

Ao criar um objeto meuCarro que segue a interface Carro, é necessário fornecer valores para todas as propriedades definidas nas interfaces envolvidas.

### Métodos em interfaces e herança:

Interfaces também podem conter métodos, e a herança de interfaces estende esses métodos da mesma forma que faz com as propriedades.

Exemplo:

```
// Interface pai com método
interface Animal {
    nome: string;
    fazerBarulho(): void;
}

// Interface filha que herda de Animal
interface Cachorro extends Animal {
    // Método adicional específico de Cachorro
    latir(): void;
}

// Objeto que segue a interface Cachorro
let meuCachorro: Cachorro = {
    nome: "Bobby",
    fazerBarulho: () => {
        console.log("Woof! Woof!");
    },
    latir: () => {
        console.log("Latindo!");
    }
};
```

A interface Cachorro herda o método fazerBarulho da interface Animal e adiciona um método adicional, latir.

Herança de interfaces é uma ferramenta poderosa para criar hierarquias e organizar código em TypeScript. Ela permite que você compartilhe e estenda a funcionalidade entre diferentes partes do seu código.

## Override de métodos

Em TypeScript, você pode usar a palavra-chave **override** para indicar explicitamente que um método em uma classe derivada está substituindo um método da classe base. 

No entanto, ao contrário de algumas outras linguagens, o TypeScript não requer a palavra-chave override para indicar sobreposição. 

A detecção de sobreposição é baseada na assinatura do método (tipo de parâmetros e tipo de retorno) e ocorre automaticamente, sem a necessidade de uma palavra-chave específica.

Exemplo que demonstra a sobreposição de métodos em TypeScript:

```
class Animal {
    fazerBarulho(): void {
        console.log("Fazendo algum barulho genérico");
    }
}

class Cachorro extends Animal {
    // Método sobreposto
    fazerBarulho(): void {
        console.log("Latindo!");
    }

    // Novo método específico de Cachorro
    farejar(): void {
        console.log("Cheirando o ambiente");
    }
}

// Criando uma instância de Cachorro
let meuCachorro = new Cachorro();

// Chamando o método sobreposto
meuCachorro.fazerBarulho(); // Saída: Latindo!

// Chamando o novo método específico de Cachorro
meuCachorro.farejar(); // Saída: Cheirando o ambiente
```

Neste exemplo, a classe Cachorro herda da classe Animal e sobreposta (override) o método fazerBarulho para fornecer uma implementação específica de cachorro. Além disso, adicionamos um novo método farejar específico da classe Cachorro.

Lembre-se de que, ao sobrepor um método, é importante manter a assinatura do método (número e tipos de parâmetros, tipo de retorno) consistente com o método na classe base.

Enquanto o TypeScript detecta automaticamente a sobreposição, é uma boa prática usar a palavra-chave override como um comentário no código para indicar explicitamente a intenção de sobrepor um método. 

## Visibilidade

Em TypeScript, a visibilidade de membros de uma classe (como propriedades e métodos) pode ser controlada usando os modificadores de acesso. 

Existem três modificadores principais: **public**, **private** e **protected**. 

Eles determinam como os membros de uma classe podem ser acessados por outras partes do código. 

| Modificador | Acesso na Classe | Acesso em Subclasses | Acesso fora da Classe |
|-------------|------------------|----------------------|-----------------------|
| `public`    | Sim              | Sim                  | Sim                   |
| `private`   | Sim              | Não                  | Não                   |
| `protected` | Sim              | Sim                  | Não                   |


### Public (Público):
- O modificador public é o padrão se nenhum modificador for especificado.
- Membros marcados como public são acessíveis de qualquer lugar, tanto dentro como fora da classe.

```
class ExemploPublic {
    propriedadePublica: string;

    constructor(valorInicial: string) {
        this.propriedadePublica = valorInicial;
    }

    metodoPublico(): void {
        console.log("Método público");
    }
}

let instanciaPublica = new ExemploPublic("Valor Inicial");
console.log(instanciaPublica.propriedadePublica); // Acesso permitido
instanciaPublica.metodoPublico(); // Acesso permitido
```

### Private (Privado):

- Membros marcados como private são acessíveis apenas dentro da própria classe. Eles não podem ser acessados de fora da classe.

```
class ExemploPrivate {
    private propriedadePrivada: string;

    constructor(valorInicial: string) {
        this.propriedadePrivada = valorInicial;
    }

    private metodoPrivado(): void {
        console.log("Método privado");
    }

    acessarPropriedadePrivada(): void {
        console.log(this.propriedadePrivada); // Acesso permitido dentro da classe
    }
}

let instanciaPrivada = new ExemploPrivate("Valor Inicial");
// console.log(instanciaPrivada.propriedadePrivada); // Erro - propriedade privada
// instanciaPrivada.metodoPrivado(); // Erro - método privado
instanciaPrivada.acessarPropriedadePrivada(); // Acesso permitido através de método público
```

### Protected (Protegido):

- Membros marcados como protected são acessíveis dentro da própria classe e por suas subclasses (herança).

```
class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    protected fazerBarulho(): void {
        console.log("Fazendo algum barulho");
    }
}

class Cachorro extends Animal {
    latir(): void {
        console.log(`${this.nome} está latindo`);
        this.fazerBarulho(); // Acesso permitido ao método protegido da classe base
    }
}

let meuCachorro = new Cachorro("Bobby");
// console.log(meuCachorro.nome); // Erro - propriedade protegida
meuCachorro.latir(); // Acesso permitido ao método público da classe derivada
```

## Static members

Em TypeScript, membros estáticos (static members) em uma classe pertencem à classe como um todo, em vez de pertencerem a instâncias individuais dessa classe. 

Isso significa que os membros estáticos são compartilhados por todas as instâncias da classe e podem ser acessados diretamente na classe, sem a necessidade de criar uma instância específica. 

Os membros estáticos são definidos usando a palavra-chave **static**. 


### Exemplo de membro estático

```
class ExemploStatic {
    static contador: number = 0; // Membro estático

    constructor() {
        ExemploStatic.contador++; // Incrementando o contador em cada criação de instância
    }

    static obterContador(): number {
        return ExemploStatic.contador; // Método estático
    }
}

// Criando instâncias da classe
let instancia1 = new ExemploStatic();
let instancia2 = new ExemploStatic();
let instancia3 = new ExemploStatic();

console.log(ExemploStatic.obterContador()); // Saída: 3
```

Neste exemplo, contador é um membro estático da classe ExemploStatic. Ele é compartilhado por todas as instâncias da classe. O método obterContador é um método estático que pode ser chamado diretamente na classe para obter o valor do contador.

### Acesso a membros estáticos:

Você pode acessar membros estáticos diretamente na classe, sem a necessidade de criar uma instância:
```
console.log(ExemploStatic.contador); // Acesso ao membro estático diretamente
console.log(ExemploStatic.obterContador()); // Chamando o método estático
```

### Observações:

- Membros estáticos são inicializados apenas uma vez, quando a classe é carregada pela primeira vez.

- Eles não podem acessar membros de instância diretamente, pois estão associados à classe e não a uma instância específica.

- Membros estáticos são úteis para armazenar informações compartilhadas entre instâncias da classe ou para fornecer funcionalidades que não dependem do estado da instância.

### Exemplo de uso prático:

```
class MathUtils {
    static PI: number = 3.14159;

    static calcularCircunferencia(raio: number): number {
        return 2 * this.PI * raio;
    }
}

let raio = 5;
console.log(MathUtils.calcularCircunferencia(raio)); // Saída: 31.4159
```

Neste exemplo, a classe MathUtils possui um membro estático PI e um método estático calcularCircunferencia que utiliza esse membro estático. Isso permite que você acesse a constante PI e o método calcularCircunferencia diretamente na classe, sem a necessidade de criar uma instância.

## Generic Classes

Em TypeScript, é possível criar classes genéricas, que são classes que podem aceitar e utilizar tipos diferentes. 

Isso proporciona maior reutilização de código e flexibilidade. 

### Sintaxe básica de uma classe genérica:

```
class Caixa<TipoConteudo> {
    conteudo: TipoConteudo;

    constructor(conteudo: TipoConteudo) {
        this.conteudo = conteudo;
    }

    obterConteudo(): TipoConteudo {
        return this.conteudo;
    }
}

// Exemplo de uso com tipo string
let caixaDeString = new Caixa<string>("Conteúdo de texto");
console.log(caixaDeString.obterConteudo()); // Saída: Conteúdo de texto

// Exemplo de uso com tipo number
let caixaDeNumero = new Caixa<number>(42);
console.log(caixaDeNumero.obterConteudo()); // Saída: 42
```

Neste exemplo, Caixa é uma classe genérica que aceita um tipo TipoConteudo como parâmetro. A instância da classe pode ser criada com diferentes tipos de conteúdo. 

Isso permite que você reutilize a mesma lógica da classe para diferentes tipos de dados.

### Restrições genéricas:

Às vezes, é necessário impor restrições aos tipos genéricos, para garantir que eles atendam a certos critérios. Você pode fazer isso usando a palavra-chave **extends**:

```
interface Animal {
    nome: string;
}

class CaixaDeAnimal<T extends Animal> {
    conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }

    obterNomeDoAnimal(): string {
        return this.conteudo.nome;
    }
}

// Exemplo de uso com tipo que atende à restrição
let caixaComAnimal = new CaixaDeAnimal({ nome: "Leão" });
console.log(caixaComAnimal.obterNomeDoAnimal()); // Saída: Leão

// Exemplo de uso com tipo que não atende à restrição
// let caixaComNumero = new CaixaDeAnimal<number>(42); // Erro de compilação
```

Neste exemplo, CaixaDeAnimal é uma classe genérica restrita a tipos que implementam a interface Animal. Isso garante que a classe só possa ser instanciada com tipos que tenham uma propriedade nome.

As classes genéricas são particularmente úteis quando você deseja criar estruturas de dados ou componentes que podem trabalhar com diferentes tipos de dados de maneira segura e flexível.

## Parametes properties

Em TypeScript, os parâmetros de um construtor podem ser usados para inicializar propriedades diretamente na classe, economizando a necessidade de declarar explicitamente essas propriedades e inicializá-las. 

Esse recurso é conhecido como "Parameter Properties" (Propriedades de Parâmetros). Basicamente, é uma forma concisa de declarar e inicializar propriedades da classe diretamente nos parâmetros do construtor.

```
class ExemploParameterProperties {
    // Declaração e inicialização direta no parâmetro do construtor
    constructor(public propriedadePublica: string, private propriedadePrivada: number) {
        // Nenhuma necessidade de declarar explicitamente ou inicializar aqui
        // As propriedades já foram declaradas e inicializadas automaticamente
    }

    // Método para mostrar os valores das propriedades
    mostrarPropriedades(): void {
        console.log(`Propriedade Pública: ${this.propriedadePublica}`);
        console.log(`Propriedade Privada: ${this.propriedadePrivada}`);
    }
}

// Criando uma instância da classe
let instancia = new ExemploParameterProperties("Valor Público", 42);

// Chamando o método para mostrar os valores
instancia.mostrarPropriedades();
```

Neste exemplo, as propriedades propriedadePublica e propriedadePrivada são declaradas e inicializadas diretamente nos parâmetros do construtor. Com isso, não é necessário declarar essas propriedades explicitamente no corpo da classe; o TypeScript trata automaticamente disso.

### Observações importantes:

1. O uso de public, private, ou readonly nos parâmetros do construtor determina automaticamente o modificador de acesso da propriedade correspondente.

2. Esse recurso é útil quando você deseja reduzir a repetição de código, especialmente ao criar classes com muitas propriedades.

3. Lembre-se de que isso só funciona no contexto de um construtor.

Ao utilizar propriedades de parâmetros, você pode tornar seu código mais conciso e mais fácil de ler, especialmente quando há uma correspondência direta entre os parâmetros do construtor e as propriedades da classe que precisam ser inicializadas.

## Class expression

Em TypeScript, assim como em JavaScript, as expressões de classe (class expressions) permitem que você defina **classes de maneira anônima**, sem a necessidade de declarar um nome de classe. 

As expressões de classe podem ser atribuídas a variáveis ou passadas como argumentos para funções. 

### Sintaxe básica:

```
// Class Expression atribuída a uma variável
let MinhaClasse = class {
    constructor(valorInicial: string) {
        this.propriedade = valorInicial;
    }

    mostrarPropriedade(): void {
        console.log(this.propriedade);
    }
    
    propriedade: string;
};

// Criando uma instância da classe
let minhaInstancia = new MinhaClasse("Valor Inicial");
minhaInstancia.mostrarPropriedade(); // Saída: Valor Inicial
```

Neste exemplo, a classe é definida e atribuída a uma variável chamada MinhaClasse. A classe é então instanciada e seus métodos são chamados.

### Usando expressões de classe em argumentos de função:

Você também pode passar expressões de classe diretamente como argumentos para funções, o que pode ser útil em situações como injeção de dependência:


```
function criarInstancia(classe: new (valor: string) => any, valor: string): any {
    return new classe(valor);
}

let minhaInstancia = criarInstancia(class {
    constructor(public propriedade: string) {}

    mostrarPropriedade(): void {
        console.log(this.propriedade);
    }
}, "Valor para Instância");

minhaInstancia.mostrarPropriedade(); // Saída: Valor para Instância
```

A função criarInstancia recebe uma expressão de classe como argumento, juntamente com um valor. Ela cria uma instância da classe e retorna.

### Expressões de classe com herança:

```
let ClasseBase = class {
    propriedadeBase: string;

    constructor(valorBase: string) {
        this.propriedadeBase = valorBase;
    }

    mostrarPropriedadeBase(): void {
        console.log(this.propriedadeBase);
    }
};

// Herança usando uma expressão de classe
let ClasseDerivada = class extends ClasseBase {
    propriedadeDerivada: string;

    constructor(valorBase: string, valorDerivado: string) {
        super(valorBase);
        this.propriedadeDerivada = valorDerivado;
    }

    mostrarPropriedadeDerivada(): void {
        console.log(this.propriedadeDerivada);
    }
};

// Criando instância da classe derivada
let minhaInstancia = new ClasseDerivada("Valor Base", "Valor Derivado");
minhaInstancia.mostrarPropriedadeBase();    // Saída: Valor Base
minhaInstancia.mostrarPropriedadeDerivada(); // Saída: Valor Derivado
```

A classe derivada é definida como uma expressão de classe que estende a classe base.

As expressões de classe são úteis quando você precisa definir uma classe de maneira mais dinâmica, seja para injeção de dependência, extensibilidade ou outras situações em que a criação dinâmica de classes é necessária.

## Classes abstratas

Uma classe abstrata é uma classe que não pode ser instanciada diretamente e é projetada para ser subclassificada por outras classes. 

Ela pode conter métodos abstratos, que são métodos sem implementação, destinados a serem implementados pelas subclasses.

### Sintaxe básica:

```
abstract class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    abstract fazerBarulho(): void;
}

// Erro: Não é possível criar uma instância de uma classe abstrata
// let animal = new Animal("Bicho");

class Cachorro extends Animal {
    fazerBarulho(): void {
        console.log(`${this.nome} está latindo!`);
    }
}

class Gato extends Animal {
    fazerBarulho(): void {
        console.log(`${this.nome} está miando!`);
    }
}

// Criando instâncias das subclasses
let cachorro = new Cachorro("Bobby");
let gato = new Gato("Whiskers");

cachorro.fazerBarulho(); // Saída: Bobby está latindo!
gato.fazerBarulho();     // Saída: Whiskers está miando!
```

Neste exemplo, Animal é uma classe abstrata com uma propriedade nome e um método abstrato fazerBarulho. As subclasses Cachorro e Gato estendem a classe Animal e fornecem implementações para o método abstrato.

### Métodos e Propriedades Abstratas:

#### Métodos Abstratos:

Um método abstrato é declarado usando a palavra-chave abstract e não contém uma implementação na classe abstrata.

As subclasses devem fornecer uma implementação para os métodos abstratos.

```
abstract class Forma {
    abstract calcularArea(): number;
}

class Retangulo extends Forma {
    constructor(private largura: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

let retangulo = new Retangulo(5, 10);
console.log(retangulo.calcularArea()); // Saída: 50
```

#### Propriedades Abstratas:

As propriedades abstratas funcionam de maneira semelhante, mas não precisam da palavra-chave abstract antes do nome da propriedade.

```
abstract class Pessoa {
    abstract nome: string;
    abstract idade: number;
}

class Estudante extends Pessoa {
    constructor(public nome: string, public idade: number, public matricula: number) {
        super();
    }
}

let estudante = new Estudante("Alice", 20, 12345);
console.log(estudante.nome); // Saída: Alice
console.log(estudante.idade); // Saída: 20
```

Classes abstratas são úteis quando você deseja definir uma estrutura comum para várias classes relacionadas, mas não deseja permitir a criação de instâncias da classe base diretamente. Isso promove a reutilização de código e ajuda a definir uma estrutura consistente para as subclasses.



