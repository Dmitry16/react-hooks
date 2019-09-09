import React, { useReducer, useState } from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'increment':
      return ++state;
    case 'decrement':
      return --state;

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
      <form>
        <input type="text" value={text} onChange={ e => e.target.value }/>
      </form>
      <pre>
        { JSON.stringify(todos, null, 2) }
      </pre>
    </div>
  )
}

export default App;