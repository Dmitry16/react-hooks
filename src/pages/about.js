import React, { Fragment, useContext } from 'react';
import { UserContext } from '../UserContext';

export const About = () => {
  
  const { user, setUser } = useContext(UserContext);

  return (
    <Fragment>
      <h2>About</h2>
      <div>{ user }</div>
    </Fragment>
  )
}