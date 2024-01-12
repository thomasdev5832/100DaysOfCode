# Módulos com TS

## Intro aos Módulos


Em TypeScript, os módulos são uma maneira de organizar o código em arquivos separados e reutilizáveis. 

Eles ajudam a dividir o código em partes menores e mais gerenciáveis, o que é especialmente útil em projetos grandes.

- Podemos exportar código com `export default`

- Utilizamos `import`Para importar

- Isso nos dá mais flexibilidade, podendo separar as responsabilidades em arquivos

## Exportando e Importando arquivos

Exportando:
```
export default function importGreet() {
    console.log("Olá, está função foi exportada!");
}
```

Importando arquivo e executando função do arquivo importado:

```
import importGreet from "./greet.js";

importGreet();
```

## Exportando e Importando variáveis

A sintaxe é mais simples, vamos utiulizar apenas `export`.

No arquivo de importação vamos importar os valores com `destrucring`.

Exportando uma variável: `export const x = 'variavel de importação!'`

Importando uma variável: `import {x} from "./variable"`

## Múltiplas importações

- Podemos exportar múltiplas variáveis e funções.

- Isso pode ser realizado no mesmo arquivo.

- Utilizamos `export` para todos os dados.

- Todos devem ser importados com `destructuring`.

Exemplo exportando variáveis e funções:

```
export const a:number = 10;
export const b:string = "teste";

export function myFunction():void {
    console.log("Hello!")
}
```

Fazendo múltiplas importações:

```
import {a,b,myFunction} from "./multiple.js"

console.log(a)
console.log(b)
myFunction()
```

## Alias para importações

Podemos criar um **alias** para importações. Ou seja, mudar o nome do que foi importado.

Exemplo utilizando **as** para definir o alias *name*: 

`import { someName as name } from "./changename.js";`

## Importando tudo

- Podemos importar tudo que está em um arquivo.

- Para importar tudo utilizamos **(*)**.

- Os dados virão em um objeto.

Exemplo: 

```
import * as  myNumbers from './numbers.js'
```

## Importando Tipos

Também é possível importar Tipos ou Interfaces.

- Vamos exportar como se fossem variáveis e no arquivo que os recebe, utilizamos `destructuring`

Exportando interface:
```
export interface Human {
    name:string;
    age:number;
}
```
Importando e utilizando interface:
```
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
```