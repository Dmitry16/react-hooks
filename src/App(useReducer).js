import React, { useReducer, useState } from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { todo: action.payload, completed: false }],
        todoCount: state.todoCount + 1
      };
    case 'toggle-todo':
      return {
        ...state,
        todos: state.todos.map((t,idx) => {
          return idx === action.payload ? {...t, completed: !t.completed} : t
        })
      }
    default:
      return state;
  }
}

const App = () => {

  const initialState = { todos: [], todoCount: 0 }; 
  const [{ todos, todoCount }, dispatch] = useReducer( reducer, initialState );
  const [text, setText] = useState("");

  console.log('todos::', todos)

  return (
    <div>
      <div>Todos counter: { todoCount }</div>
      <form onSubmit={ e => {
        e.preventDefault();
        dispatch({type: 'add-todo', payload: text});
        setText('');
      } }>
        <input type="text" value={text} onChange={ e => setText(e.target.value) }/>
      </form>
      <div>
        {todos.map((t,idx) => (
          <div onClick={() => dispatch({type: 'toggle-todo', payload: idx})}
            style={{textDecoration: t.completed ? 'line-through' : ''}}
          >
            { t.todo }
          </div>
        ))}
      </div>
      <pre>
        { JSON.stringify(todos, null, 2) }
      </pre>
    </div>
  )
}

export default App;