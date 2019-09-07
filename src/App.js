import React, { useEffect, useState } from 'react';
import useForm from './useForm';
import Hello from './Hello';

const App = () => {

  const [values, handleChange] = useForm({ 
    email: 'qweeee@rty.ui',
    firstname: 'bobbie',
    password: 'q'
  });

  const onMouseMove = e => {
    console.log(e);
  }
  
  useEffect(() => {
    console.log('renderrrrr!');
    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }

  }, []);

  const [ showHello, setHello ] = useState(true);

  return (
    <div>
      {/* <button onClick={ () => setHello(!showHello) }>toggle hello</button> */}
      {/* { showHello && <Hello /> } */}
      <input name='email' value={values.email}
        onChange={ handleChange }>
      </input>
      <input name='firstname' value={values.firstname}
        onChange={ handleChange }>
      </input>
      <input name='password' type='password' value={values.password}
        onChange={ handleChange }>
      </input>
    </div>
  )
}

export default App;
