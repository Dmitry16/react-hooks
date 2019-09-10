import React, { Fragment, useContext } from 'react';
import { UserContext } from '../UserContext';

export const Index = () => {
  
  const { user, setUser } = useContext(UserContext);

  return (
    <Fragment>
      <h2>Home</h2>
      <h3>{ user }</h3>
    </Fragment>
  )
}