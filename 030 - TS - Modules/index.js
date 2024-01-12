"use strict";
// 1 - importação de arquivos
Object.defineProperty(exports, "__esModule", { value: true });
var greet_js_1 = require("./greet.js");
(0, greet_js_1.default)();
// import variavel
var variable_1 = require("./variable");
console.log(variable_1.x);
// multiplas importações
var multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a);
console.log(multiple_js_1.b);
(0, multiple_js_1.myFunction)();
// alias 
var changename_js_1 = require("./changename.js");
console.log(changename_js_1.someName);
// import all 
var myNumbers = require("./numbers.js");
console.log(myNumbers); // { n1: 10, n2: 20, n3: 30 }
console.log(myNumbers.n1); // 10
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var rafa = new User("Rafael", 1);
console.log(rafa); // User { name: 'Rafael', age: 1 }
