import React from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';

import SecondComponent from './components/SecondComponent';

import Destructuring from './components/Destructuring';

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
      <FirstComponent />
      <SecondComponent name="Second component" />
      <Destructuring 
        title='First post'
        content='Some content!'
        commentsQt={10}
        tags={["ts","js","solidity"]}  
        />
    </div>
  );
}

export default App;
