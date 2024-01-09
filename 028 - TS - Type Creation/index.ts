function identity<T>(arg: T): T {
    return arg;
}

// Uso do generics
let result = identity<string>("Hello, generics!");
console.log(result); // Saída: Hello, generics!