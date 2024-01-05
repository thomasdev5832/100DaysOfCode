// 1 -> number
let x = 10;
console.log(x); // 10
console.log(typeof x); // number
x = 20;
console.log(x); // 20
const y = 14.333333;
console.log(y); // 14.333333
console.log(typeof y); // number
console.log(y.toPrecision(3)); // 14.3
let w;
let x1 = 100;
let y1 = 0;
console.log(w); // undefined
console.log(x1); // 100
console.log(y1); // 0
// 2 -> string
const firstName = "Satoshi";
console.log(firstName.toUpperCase()); // SATOSHI
let fullName;
console.log(fullName); // undefined
const lastName = 'Nakamoto';
fullName = firstName + " " + lastName;
console.log(fullName); // Satoshi Nakamoto
console.log(typeof fullName); // string
let firstName1 = "Rafael";
let sentence = `My name is ${firstName1}.
    I am coding TypeScript.`;
console.log(sentence);
// 3 -> boolean
let a = false;
console.log(a); // false
console.log(typeof a); // boolean
a = true;
console.log(a); // true
// 4 - Inference e annotation
const ann = "teste";
let inf = "teste";
console.log(ann); // teste
console.log(inf); // teste
console.log(typeof ann); // string
console.log(typeof inf); // string
