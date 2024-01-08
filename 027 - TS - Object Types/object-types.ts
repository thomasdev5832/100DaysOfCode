// 1 -> tipo de objeto para funçao com interface

interface Person {
    name: string;
    age: number;
}

function greet(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

// Exemplo de uso da função
const myPerson: Person = {
    name: "Rafael",
    age: 10
};

greet(myPerson);

// propriedade opcional em interface

interface Person1 {
    name: string;
    age?: number; // A propriedade age é opcional
}

function greet1(person: Person1): void {
    console.log(`Hello, ${person.name}!`);
    
    if (person.age !== undefined) {
        console.log(`You are ${person.age} years old.`);
    } else {
        console.log(`Age not provided.`);
    }
}

// Exemplo de uso com idade opcional
const personWithAge: Person1 = {
    name: "Rafael",
    age: 30
};

// Exemplo de uso sem idade
const personWithoutAge: Person1 = {
    name: "Satoshi"
};

greet1(personWithAge);
// Hello, Rafael!
// You are 30 years old.
greet1(personWithoutAge);
// Hello, Satoshi!
// Age not provided.

// readonly

interface Person2 {
    readonly name: string;
    readonly age: number;
}

let person: Person2 = {
    name: "Satoshi",
    age: 55
};
//person.name = "Gabriel"; // Error: Cannot assign to 'name' because it is a read-only property.

console.log(person); // {name: 'Satoshi', age: 55}



// index signature

interface Dictionary {
    [key: string]: number;
}

// Exemplo de uso
let myDictionary: Dictionary = {
    "one": 1,
    "two": 2,
    "three": 3
};

console.log(myDictionary); // {one: 1, two: 2, three: 3}
console.log(myDictionary["one"]); // Saída: 1
console.log(myDictionary["three"]); // Saída: 3
console.log(myDictionary["two"]); // Saída: 2
console.log(myDictionary["four"]); // Saída: undefined

// herança em interfaces

// Interface base
interface Animal {
    name: string;
    makeSound(): void;
}

// Interface derivada que herda da interface Animal
interface Dog extends Animal {
    breed: string;
}

// Objeto que implementa a interface Dog
let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    makeSound: () => {
        console.log("Woof woof!");
    }
};

console.log(myDog.name);      // Saída: Buddy
console.log(myDog.breed);     // Saída: Golden Retriever
myDog.makeSound();            // Saída: Woof woof!

// intersection types

interface Person3 {
    name: string;
    age: number;
}

interface Employee {
    jobTitle: string;
    salary: number;
}

// Intersection type: Combinação de Person e Employee
type PersonWithJob = Person3 & Employee;

// Exemplo de uso
const employee: PersonWithJob = {
    name: "Rafael",
    age: 20,
    jobTitle: "Software Engineer",
    salary: 80000
};

console.log(employee.name);      // Saída: Rafael
console.log(employee.age);       // Saída: 20
console.log(employee.jobTitle);  // Saída: Software Engineer
console.log(employee.salary);    // Saída: 80000


// readonly array

