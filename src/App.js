import React from 'react';
import useForm from './useForm';

const App = () => {

  const [values, handleChange] = useForm({ email: 'qweeee@rty.ui', password: 'q' });

  return (
    <div>
      <input name='email' value={values.email}
        onChange={ handleChange }>
      </input>
      <input name='password' type='password' value={values.password}
        onChange={ handleChange }>
      </input>
    </div>
  )
}

export default App;
