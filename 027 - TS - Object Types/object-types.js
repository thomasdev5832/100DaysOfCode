// 1 -> tipo de objeto para funçao com interface
function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
// Exemplo de uso da função
var myPerson = {
    name: "Rafael",
    age: 10
};
greet(myPerson);
function greet1(person) {
    console.log("Hello, ".concat(person.name, "!"));
    if (person.age !== undefined) {
        console.log("You are ".concat(person.age, " years old."));
    }
    else {
        console.log("Age not provided.");
    }
}
// Exemplo de uso com idade opcional
var personWithAge = {
    name: "Rafael",
    age: 30
};
// Exemplo de uso sem idade
var personWithoutAge = {
    name: "Satoshi"
};
greet1(personWithAge);
// Hello, Rafael!
// You are 30 years old.
greet1(personWithoutAge);
var person = {
    name: "Satoshi",
    age: 55
};
//person.name = "Gabriel"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(person); // {name: 'Satoshi', age: 55}
// Exemplo de uso
var myDictionary = {
    "one": 1,
    "two": 2,
    "three": 3
};
console.log(myDictionary); // {one: 1, two: 2, three: 3}
console.log(myDictionary["one"]); // Saída: 1
console.log(myDictionary["three"]); // Saída: 3
console.log(myDictionary["two"]); // Saída: 2
console.log(myDictionary["four"]); // Saída: undefined
// Objeto que implementa a interface Dog
var myDog = {
    name: "Buddy",
    breed: "Golden Retriever",
    makeSound: function () {
        console.log("Woof woof!");
    }
};
console.log(myDog.name); // Saída: Buddy
console.log(myDog.breed); // Saída: Golden Retriever
myDog.makeSound(); // Saída: Woof woof!
// Exemplo de uso
var employee = {
    name: "Rafael",
    age: 20,
    jobTitle: "Software Engineer",
    salary: 80000
};
console.log(employee.name); // Saída: Rafael
console.log(employee.age); // Saída: 20
console.log(employee.jobTitle); // Saída: Software Engineer
console.log(employee.salary); // Saída: 80000
// readonly array
