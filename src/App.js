import React, { useReducer, useState } from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'add-todo':
      console.log('sdfds::::', action.text)
      return {
        todos: [...state.todos, { todo: action.text, completed: false }]
      };

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
        {
          todos.map((t,idx) => {
            return <div>{ t.todo }</div>;
          })
        }
      </div>
      <pre>
        { JSON.stringify(todos, null, 2) }
      </pre>
    </div>
  )
}

export default App;