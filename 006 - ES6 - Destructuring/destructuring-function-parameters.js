const person = {
    name: 'Satoshi Nakamoto',
    age: 30,
    city: 'Lisboa'
  };

function printPersonInfo({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  }
  
  printPersonInfo(person);