import React from 'react';
import './App.css';
import { TextField } from './Components/TextField'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yo!
        </p>
        <TextField text="Hello world." />
      </header>
    </div>
  );
}

export default App;
