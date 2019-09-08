import React, { useReducer } from 'react';

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

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>counter: { counter }</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default App;