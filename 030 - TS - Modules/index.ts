// 1 - importação de arquivos

import importGreet from "./greet.js";

importGreet();

// import variavel

import {x} from "./variable";

console.log(x);

// multiplas importações

import {a,b,myFunction} from "./multiple.js"

console.log(a)
console.log(b)
myFunction()

// alias 

import { someName as name } from "./changename.js";
console.log(name)

// import all 

import * as  myNumbers from './numbers.js'


console.log(myNumbers) // { n1: 10, n2: 20, n3: 30 }
console.log(myNumbers.n1) // 10

// importando tipos e interface

import { Human } from "./mytype.js";

class User implements Human {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

}

const rafa = new User("Rafael", 1);
console.log(rafa); // User { name: 'Rafael', age: 1 }