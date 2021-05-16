import React from 'react';
import './App.css';
import { Counter } from './Components/Counter';
import { TextField } from './Components/TextField';

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div>
        <Counter>
          {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}> + </button>
          </div>)}
        </Counter>
    </div>
  );
};

export default App;
