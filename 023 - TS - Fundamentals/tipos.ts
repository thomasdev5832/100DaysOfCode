// 1 -> number

let x: number = 10;

console.log(x); // 10
console.log(typeof x); // number

x = 20;
console.log(x); // 20

const y:number = 14.333333;
console.log(y); // 14.333333
console.log(typeof y); // number
console.log(y.toPrecision(3)); // 14.3

let w: number;
let x1: number = 100;
let y1 = 0;

console.log(w); // undefined
console.log(x1); // 100
console.log(y1); // 0


// 2 -> string
const firstName:string = "Satoshi";
console.log(firstName.toUpperCase()); // SATOSHI

let fullName: string;
console.log(fullName); // undefined
const lastName:string = 'Nakamoto';
fullName = firstName + " " + lastName;
console.log(fullName); // Satoshi Nakamoto
console.log(typeof fullName); // string

let firstName1: string = "Rafael";
let sentence: string = `My name is ${firstName1}.
    I am coding TypeScript.`;
console.log(sentence);

// 3 -> boolean

let a:boolean = false;
console.log(a); // false
console.log(typeof a); // boolean
a = true;
console.log(a); // true

// 4 - Inference e annotation
const ann:string = "teste";
let inf = "teste";

console.log(ann); // teste
console.log(inf); // teste
console.log(typeof ann); // string
console.log(typeof inf); // string

