// exemplo decorator

function myDecorator() {
    console.log("Iniciando o decorator!")
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("myDecorator(): executado");
      console.log(target)
      console.log(propertyKey)
      console.log(descriptor)
    };
  }
  
  
  class MyClass {
  
    @myDecorator()
    testing() {
      console.log("Terminando execução do método")
    }
  }
  
  const myObj = new MyClass()
  
  myObj.testing()


  // multoplos decorators

  function Decorator1(constructor: Function) {
    console.log("Decorator 1 executado!");
  }
  
  function Decorator2(constructor: Function) {
    console.log("Decorator 2 executado!");
  }
  
  @Decorator1
  @Decorator2
  class MinhaClasse {
    // conteúdo da classe
  }