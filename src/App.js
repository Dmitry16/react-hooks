import React, { useState } from 'react';

const App = () => {

  const [{ count1, count2 }, setCount] = useState({count1: 10, count2: 20});

  return (
    <div>
      <button onClick={() => setCount( currentState => ({
          count1: currentState.count1 + 1,
          count2: currentState.count2
        }))
      }> + </button>
      <button onClick={() => setCount( currentState => ({
          count1: currentState.count1 - 1,
          count2: currentState.count2
        }))
      }> - </button>
      <div>count1 : { count1 }</div>
      <div>count2 : { count2 }</div>
    </div>
  )
}

export default App;
