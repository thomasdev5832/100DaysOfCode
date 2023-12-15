const brazil = ['MG','SP', 'RJ', 'ES'];

const love = brazil.map(function(name) {
    return `I love ${name}!`;
});

const loveArrow = brazil.map((name) => {
    return `I love ${name}!`;
});

const loveArrowSingle = brazil.map(name => {
    return `I love ${name}!`;
});

const loveArrowOneLine = brazil.map(name => `I love ${name}!`);

const loveChain = brazil
    .filter(name => name === 'MG')
    .map(name => `I love ${name}!`);


console.log(love);
console.log(loveArrow);
console.log(loveArrowSingle);
console.log(loveArrowOneLine);
console.log(loveChain);