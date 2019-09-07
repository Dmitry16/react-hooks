import React, { useEffect } from 'react';
import useForm from './useForm';

const App = () => {

  const [values, handleChange] = useForm({ 
    email: 'qweeee@rty.ui',
    firstname: 'bobbie',
    password: 'q'
  });

  useEffect(() => {
    console.log('renderrrrr!');
  }, [values.email, values.password]);

  return (
    <div>
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
