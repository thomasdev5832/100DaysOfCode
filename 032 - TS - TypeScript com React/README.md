# TypeScript com React

O TypeScript oferece uma tipagem estática que pode ser especialmente útil em projetos React, fornecendo melhor suporte para desenvolvimento e evitando erros comuns.

## Instalando Ract com TypeScript


```npx create-react-app meu-app --template typescript```

Este comando usa o Create React App (CRA) com o `template` TypeScript para criar um novo projeto React chamado "meu-app".

O `npx` é usado para executar a versão mais recente do CRA sem a necessidade de instalação global.

## Estrutura de React com TypeScript

1. 📁`src/`:   Este é o diretório principal onde você irá escrever o código-fonte da sua aplicação React. Ele contém os componentes, estilos, imagens e outros recursos relacionados ao código da aplicação.
    

    📁`index.tsx`: Ponto de entrada para a aplicação React. Renderiza o componente principal no elemento com id "root" no arquivo HTML público.

    📁`App.tsx`: Este é o componente principal da sua aplicação. Aqui, você pode definir a estrutura geral da sua aplicação e incorporar outros componentes conforme necessário.

    📁`components`: Este diretório geralmente contém componentes reutilizáveis que são usados em diferentes partes da sua aplicação.

2. 📁`public/`: Contém arquivos estáticos que serão copiados para a raiz do diretório de saída durante a compilação. O arquivo HTML principal (index.html) também está localizado aqui.
    📁`index.html`: O ponto de entrada HTML da sua aplicação React. É neste arquivo que você pode adicionar meta tags, links para folhas de estilo, scripts e outros recursos estáticos.

3. 📁`node_modules/`: Diretório onde as dependências do projeto são instaladas pelo npm ou yarn.
4. 📄`package.json`: O arquivo que descreve as configurações e dependências do seu projeto. Você pode adicionar scripts personalizados, configurar dependências e muito mais.

5. 📄`tsconfig.json`: O arquivo de configuração do TypeScript. Ele especifica as configurações do compilador TypeScript para o seu projeto.

6. 📄`yarn.lock` ou `package-lock.json`: Estes arquivos registram as versões exatas das dependências instaladas para garantir consistência entre diferentes ambientes de desenvolvimento.

7. 📄`README.md`: Este arquivo geralmente contém informações sobre o projeto, incluindo instruções sobre como instalá-lo, executá-lo e contribuir para ele.

8. ⭐`public/favicon.ico`: O ícone da sua aplicação, exibido na barra de título do navegador ou na guia da página.

## Criação de variáveis em componentes

Em TypeScript, você pode criar variáveis dentro de um componente React da mesma forma que faria em JavaScript, mas com a adição de tipos estáticos. 

Os tipos ajudam a definir a forma da variável, proporcionando benefícios como autocompletar e detecção de erros durante o desenvolvimento.

```
function App() {
  const name: string = "Rafael";
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>React com TypeScript</h1>
      <h2>Nome: {name}</h2>
      {isWorking && (
        <div>
          <p>It's working!</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

- *name* é uma variável local que armazena uma string
- *isWorking é uma variável boolean. Podemos fazer a verificação da variável


## Funções em Componentes

Podemos criar funções em componentes. Estas funções recebem parÂmetros que podem ser tipados, assim como seu retorno.

Exemplo:
```
function App() {
  const name: string = "Rafael";
  const isWorking: boolean = true;

  const userGreeting = (name:string): string => {
    return `Hello, ${name}!`;
  };

  return (
    <div className="App">
      <h1>React com TypeScript</h1>
      <h2>Nome: {name}</h2>
      {isWorking && (
        <div>
          <p>It's working!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
```

Neste exemplo, a função `userGreeting` está sendo executada dentro do jsx

## Extensão para criar componente no React 

- Nome: TypeScript React code snippets
- `tsrfce` ou `tsrfc`: Gera uma estrutura básica de um componente React com TypeScript

## Importando Componentes

A inportação de componentes funciona da mesma forma no TypeScript

Porém temos que nos atentar aos valores e tipos das props de cada componente.

Exemplo importando um componente:
`import FirstComponent from './components/FirstComponent';

Utilizando o componente importado:
`<FirstComponent />`

## Desestruturando props

O Destructuring é um recurso de ES6 que permite separar um array ou objeto em várias variáveis.

Aplicamos esta técnica nas props para não precisar repetir o nome do objeto sempre.

Exemplo:

```
interface Props {
    title: string
    content: string
    commentsQt: number
    tags: string[]
}

const Destructuring = ({ title, content, commentsQt, tags } : Props) => {
  return (
    <div>
        <h2>Destructuring</h2>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Quantidade de comentários:{commentsQt}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default Destructuring
```

Utilizando:

```
<Destructuring 
        title='First post'
        content='Some content!'
        commentsQt={10}
        tags={["ts","js","solidity"]}  
/>
```

## Hook useState

O useState é um dos Hooks mais fundamentais em React e é usado para adicionar estado a componentes funcionais.

 Antes da introdução de Hooks, os componentes funcionais não tinham a capacidade de armazenar ou atualizar estados. 
 
 Com o useState, você pode agora ter estados em componentes funcionais sem a necessidade de criar classes.


### 1. Importando o Hook useState:
```
import React, { useState } from 'react';
```

### 2. Declarando uma Variável de Estado:

```
const MeuComponente: React.FC = () => {
  // Declaração de uma variável de estado chamada "contador" com valor inicial 0
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      {/* Botão para incrementar o contador */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default MeuComponente;

```

### Entendendo useState:
- **contador** é a variável de estado.
- **setContador** é a função que permite atualizar o valor da variável de estado.
- **useState(0)** define o valor inicial da variável de estado como 0.
- **{contador}** exibe o valor atual da variável de estado no JSX.

### Atualizando o Estado:
Para atualizar o estado, você utiliza a função setContador (ou o nome que você escolher para sua função de atualização). Essa função aceita um novo valor e re-renderiza o componente com o novo estado.

## Enum

Em React com TypeScript, você pode utilizar enums para definir conjuntos nomeados de valores constantes e fornecer mais contexto semântico para suas variáveis.

 Aqui está um exemplo de como usar enums em um componente React com TypeScript:

 ### 1. Definindo um Enum:
```
// Enum definido fora do componente
enum DiasDaSemana {
  DOMINGO = 'Domingo',
  SEGUNDA = 'Segunda',
  TERCA = 'Terça',
  QUARTA = 'Quarta',
  QUINTA = 'Quinta',
  SEXTA = 'Sexta',
  SABADO = 'Sábado',
}

const MeuComponente: React.FC = () => {
  // ...

  const diaAtual: DiasDaSemana = DiasDaSemana.QUARTA;

  // ...

  return (
    <div>
      <p>{`Hoje é ${diaAtual}`}</p>
    </div>
  );
};

export default MeuComponente;
```

### 2. Utilizando o Enum:

No exemplo acima, um enum chamado DiasDaSemana é definido fora do componente. O enum mapeia strings amigáveis para os dias da semana. Dentro do componente, a variável diaAtual é declarada como do tipo DiasDaSemana e é inicializada com o valor DiasDaSemana.QUARTA.

### 3. Enum com Valores Numéricos:

```
enum Status {
  ATIVO = 1,
  INATIVO = 0,
}

const MeuComponente: React.FC = () => {
  // ...

  const statusUsuario: Status = Status.ATIVO;

  // ...

  return (
    <div>
      <p>{`Status do usuário: ${statusUsuario === Status.ATIVO ? 'Ativo' : 'Inativo'}`}</p>
    </div>
  );
};

export default MeuComponente;
```

Neste exemplo, o enum Status tem valores numéricos e é utilizado para representar o status de um usuário.

### Observações Importantes:
- Enums são uma maneira de criar conjuntos nomeados de valores constantes.
- Eles podem ser especialmente úteis quando você deseja ter um conjunto limitado de opções com significados específicos.
- Certifique-se de escolher nomes significativos para seus enums para tornar seu código mais legível.

## Types

Dentro do contexto do React com TypeScript, a utilização de tipos (ou interfaces) é uma prática comum para garantir que os diferentes elementos da sua aplicação estejam sendo usados de acordo com o esperado. 

### Props (Propriedades) com Tipos:
Ao criar componentes funcionais, você frequentemente precisa definir as propriedades (props) que o componente pode receber. Usar tipos ajuda a documentar e validar as propriedades.
```
import React from 'react';

interface MeuComponenteProps {
  nome: string;
  idade: number;
}

const MeuComponente: React.FC<MeuComponenteProps> = ({ nome, idade }) => {
  return (
    <div>
      <p>{`Nome: ${nome}, Idade: ${idade}`}</p>
    </div>
  );
};

// Uso do componente
const App: React.FC = () => {
  return <MeuComponente nome="João" idade={30} />;
};
```

### 2. Estado (State) com Tipos:
Quando você utiliza o hook useState, é possível definir o tipo do estado inicial.

```
import React, { useState } from 'react';

interface ContadorProps {
  valorInicial: number;
}

const Contador: React.FC<ContadorProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState<number>(valorInicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

// Uso do componente
const App: React.FC = () => {
  return <Contador valorInicial={0} />;
};

```

## ContextAPI

A Context API é uma ferramenta do React que permite compartilhar dados entre componentes sem precisar passar props manualmente por todos os níveis da árvore de componentes. Isso é particularmente útil quando você tem dados que são necessários por muitos componentes em diferentes níveis da sua hierarquia de componentes.

A Context API consiste em três partes principais:

1. React.createContext: Cria um novo contexto. Este método retorna um objeto com dois componentes: Provider e Consumer.

2. <Context.Provider>: Este componente permite que você compartilhe dados com todos os componentes que estão dentro do seu escopo.

3. <Context.Consumer>: Este componente permite que você acesse os dados do contexto em componentes de função.

Vamos criar um exemplo simples para entender melhor como usar a Context API:

### 1. Criando o Context
```
// MeuContexto.js
import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const MeuContexto = createContext();

// Componente provedor (Provider)
export const MeuContextoProvider = ({ children }) => {
  const [dados, setDados] = useState("Dados Iniciais");

  return (
    <MeuContexto.Provider value={{ dados, setDados }}>
      {children}
    </MeuContexto.Provider>
  );
};

// Hook para acessar o contexto
export const useMeuContexto = () => {
  const context = useContext(MeuContexto);
  if (!context) {
    throw new Error('useMeuContexto deve ser usado dentro de um MeuContextoProvider');
  }
  return context;
};
```

### 2. Utilizando o Contexto em Componentes:

Agora, podemos utilizar o contexto em qualquer componente dentro do escopo do MeuContextoProvider.

```
// ComponenteA.js
import React from 'react';
import { useMeuContexto } from './MeuContexto';

const ComponenteA = () => {
  const { dados, setDados } = useMeuContexto();

  const handleClick = () => {
    setDados("Novos Dados");
  };

  return (
    <div>
      <h2>Componente A</h2>
      <p>Dados: {dados}</p>
      <button onClick={handleClick}>Atualizar Dados</button>
    </div>
  );
};

export default ComponenteA;

```
```
// ComponenteB.js
import React from 'react';
import { useMeuContexto } from './MeuContexto';

const ComponenteB = () => {
  const { dados } = useMeuContexto();

  return (
    <div>
      <h2>Componente B</h2>
      <p>Dados: {dados}</p>
    </div>
  );
};

export default ComponenteB;
```

### 3. Envolvendo Componentes com o Provider:

Agora, envolvemos os componentes que precisam acessar o contexto com o MeuContextoProvider:

```
// App.js
import React from 'react';
import ComponenteA from './ComponenteA';
import ComponenteB from './ComponenteB';
import { MeuContextoProvider } from './MeuContexto';

const App = () => {
  return (
    <MeuContextoProvider>
      <div>
        <h1>App</h1>
        <ComponenteA />
        <ComponenteB />
      </div>
    </MeuContextoProvider>
  );
};

export default App;
```

Agora, os componentes ComponenteA e ComponenteB têm acesso ao contexto compartilhado, e quando clicamos no botão em ComponenteA, o estado é atualizado e reflete em ComponenteB.

