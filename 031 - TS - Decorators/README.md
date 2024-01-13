# Decorators

Os decorators permitem adicionar metadados e comportamentos adicionais a classes, métodos, propriedades e parâmetros de funções. 

Eles são comumente usados em frameworks como Angular para adicionar funcionalidades aos componentes.

Basicamente criamos novas funções, que são adicionadas a partir de um ```@nome```.

Decorators são executados durante o tempo de definição, o que significa que são avaliados durante a fase de compilação, antes mesmo de seu código ser executado.

## Exemplos Básicos de Decorators
### Decorator de Classe
```
function MeuDecoratorDeClasse(constructor: Function) {
  console.log("Decorator de Classe Executado!");
}

@MeuDecoratorDeClasse
class MinhaClasse {
  // conteúdo da classe
}
```

Neste exemplo, MeuDecoratorDeClasse é um decorator de classe. Quando a classe MinhaClasse é definida, o decorator é executado e imprime uma mensagem no console.

### Decorator de Método:
```
function MeuDecoratorDeMetodo(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Decorator de Método Executado para o método ${key}`);
}

class MinhaClasse {
  @MeuDecoratorDeMetodo
  meuMetodo() {
    // conteúdo do método
  }
}
```
Neste exemplo, MeuDecoratorDeMetodo é um decorator de método. Ele é chamado quando o método meuMetodo é definido na classe MinhaClasse.


## Múltiplos decorators

Podemos utilizar múltiplos decorators em TypeScript.

O primeiro decorator a ser executado é o que está mais abaixo do código. Os decorators são executados da última declaração para a primeira.


### Múltiplos Decorators em uma Classe:
```
function Decorator1(constructor: Function) {
  console.log("Decorator 1 executado!");
}

function Decorator2(constructor: Function) {
  console.log("Decorator 2 executado!");
}

@Decorator1
@Decorator2
class MinhaClasse {
  // conteúdo da classe
}
```

### Múltiplos Decorators em um Método:

```
function DecoratorA(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log("Decorator A executado!");
}

function DecoratorB(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log("Decorator B executado!");
}

class MinhaClasse {
  @DecoratorA
  @DecoratorB
  meuMetodo() {
    // conteúdo do método
  }
}

```

Neste exemplo, a ordem de execução seria:

```
Decorator Y executado!
Decorator X com parâmetro algumParam executado!
```

## Acessor Decorator

Os acessor decorators são usados para decorar métodos de acesso em uma classe TypeScript, especificamente os métodos get e set de uma propriedade. 

Eles fornecem uma maneira de modificar o comportamento dos acessores (getter e setter) de uma propriedade. 

### Decorator em um Acessor (Getter):

```
function DecoratorDeGetter(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Decorator de Getter executado para a propriedade ${key}`);
}

class MinhaClasse {
  private _minhaProp: string = "Valor Inicial";

  @DecoratorDeGetter
  get minhaProp() {
    return this._minhaProp;
  }
}

const instancia = new MinhaClasse();
console.log(instancia.minhaProp); // O decorator de getter será executado ao acessar a propriedade.
```

Neste exemplo, o decorator DecoratorDeGetter é aplicado ao getter da propriedade minhaProp. Quando você acessa minhaProp, o decorator é executado.

### Decorator em um Acessor (Setter):

```
function DecoratorDeSetter(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Decorator de Setter executado para a propriedade ${key}`);
}

class MinhaClasse {
  private _minhaProp: string = "";

  @DecoratorDeSetter
  set minhaProp(value: string) {
    this._minhaProp = value;
  }
}

const instancia = new MinhaClasse();
instancia.minhaProp = "Novo Valor"; // O decorator de setter será executado ao definir a propriedade.
```

Aqui, o decorator DecoratorDeSetter é aplicado ao setter da propriedade minhaProp. Quando você atribui um valor a minhaProp, o decorator é executado.

### Combinando Decoradores em Acessores:

Você também pode combinar múltiplos decorators, incluindo decorators de métodos de acesso, em uma única propriedade:

```
function DecoratorDeGetter(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Decorator de Getter executado para a propriedade ${key}`);
}

function DecoratorDeSetter(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Decorator de Setter executado para a propriedade ${key}`);
}

class MinhaClasse {
  private _minhaProp: string = "Valor Inicial";

  @DecoratorDeGetter
  @DecoratorDeSetter
  get minhaProp() {
    return this._minhaProp;
  }

  set minhaProp(value: string) {
    this._minhaProp = value;
  }
}

const instancia = new MinhaClasse();
console.log(instancia.minhaProp); // Decorator de getter será executado ao acessar a propriedade.
instancia.minhaProp = "Novo Valor"; // Decorator de setter será executado ao definir a propriedade.
```

Lembre-se de que a ordem de execução dos decorators segue da última para a primeira, como mencionado em exemplos anteriores.

## Property Decorator

Os property decorators no TypeScript são utilizados para decorar propriedades de uma classe. 

Esses decorators são aplicados diretamente a uma propriedade e têm a capacidade de modificar ou adicionar metadados a ela. 

```
function DecoratorDePropriedade(target: any, key: string) {
  console.log(`Decorator de Propriedade executado para a propriedade ${key}`);
}

class MinhaClasse {
  @DecoratorDePropriedade
  minhaProp: string = "Valor Inicial";
}

const instancia = new MinhaClasse();
// O decorator de propriedade será executado ao criar uma instância da classe.
```

este exemplo, o decorator DecoratorDePropriedade é aplicado à propriedade minhaProp. O console exibirá a mensagem quando você criar uma instância da classe.

