import React, { useReducer, useState } from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { todo: action.text, completed: false }]
      };
    case 'toggle-todo':
      return {
          todos: state.todos.map((t,idx) => {
            return idx === action.idx ? {...t, completed: !t.completed} : t
          })
        }
    default:
      return state;
  }
}

const App = () => {

  const [{ todos }, dispatch] = useReducer( reducer, {todos: []} );
  const [text, setText] = useState("");

  console.log('todos::', todos)

  return (
    <div>
      <div>Todos counter: { }</div>
      <form onSubmit={ e => {
        e.preventDefault();
        dispatch({type: 'add-todo', text});
        setText('');
      } }>
        <input type="text" value={text} onChange={ e => setText(e.target.value) }/>
      </form>
      <div>
        {todos.map((t,idx) => (
          <div onClick={() => dispatch({type:'toggle-todo', idx})}
            style={{textDecoration:'line-through'}}
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