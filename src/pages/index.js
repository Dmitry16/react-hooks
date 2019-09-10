import React, { Fragment, useContext } from 'react';
import { UserContext } from '../UserContext';

export const Index = () => {
  
  const msg = useContext(UserContext);

  return (
    <Fragment>
      <h2>Home</h2>
      <h3>{ msg }</h3>
    </Fragment>
  )
}