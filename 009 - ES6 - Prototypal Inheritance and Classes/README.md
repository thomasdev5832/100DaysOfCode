## Herança Prototipal (Prototypes) & Classes

No ECMAScript 6 (ES6), a sintaxe de classes foi introduzida para fornecer uma maneira mais declarativa de criar objetos e lidar com herança. No entanto, por baixo dos panos, o sistema de herança prototipal continua a ser a base.

#### Sintaxe de Classes em ES6:
Aqui está um exemplo básico usando classes em ES6:
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} faz um som.`);
  }
}

const animal = new Animal('Animal');
animal.speak(); // Saída: "Animal faz um som."
```

Agora, vamos estender essa classe usando a herança prototipal:

```
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Chama o construtor da classe pai (Animal)
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} late.`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Saída: "Buddy faz um som."
dog.bark();  // Saída: "Buddy late."
```

Neste exemplo:

Animal é a classe pai.
Dog é a classe filha que estende Animal usando extends.
super(name) chama o construtor da classe pai para garantir que a propriedade name seja inicializada corretamente.

#### Verificação de Herança:
Para verificar a herança prototipal:

```
console.log(Object.getPrototypeOf(dog)); // Dog {}
console.log(Object.getPrototypeOf(Dog)); // [Function: Animal]
```
 Podemos ver que o protótipo de dog é a classe Dog, e o protótipo da classe Dog é a classe Animal.

#### Métodos Estáticos:
Podemos usar métodos estáticos em classes:
```
class MathOperations {
  static square(x) {
    return x * x;
  }
}

console.log(MathOperations.square(5)); // Saída: 25
```
Os **métodos estáticos** são chamados **diretamente na classe**, sem a necessidade de criar uma instância.