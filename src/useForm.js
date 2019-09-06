import { useState } from 'react';

const useForm = (initialValues) => {

  const [values, setValues] = useState(initialValues);

  const onChange = e => {
    
    // console.log('zzzzzz::', e.target, values)

    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return [
    values,
    onChange
  ]
}

export default useForm;