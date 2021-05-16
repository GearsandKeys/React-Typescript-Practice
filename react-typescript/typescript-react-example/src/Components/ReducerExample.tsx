import React, { useReducer } from 'react';

type Actions = //two different actions
 | { type: "add"; text: string; }
 | { type: "remove"; idx: number; }

interface Todo {
    text: string;
    complete: boolean;
}

type State = Todo[]; //state is an array of Todos
// Another way to declare it: Array<Todo>

const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
};

export const ReducerExample: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, []); //reducer fn, and initial state, no types needed
  
    return (
      <div>
        {JSON.stringify(todos)}
        <button
          onClick={() => {
            dispatch({ type: "add", text: "..." });
          }}
        >
          +
        </button>
      </div>
    );
  };