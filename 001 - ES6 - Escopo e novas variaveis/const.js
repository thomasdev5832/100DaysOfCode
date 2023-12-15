const rafa = {
    name: "Rafael",
    age: 10
}

Object.freeze(rafa); // freeze (congela) -> objeto imutável
rafa.age = 13; // nao muda

console.log(rafa);