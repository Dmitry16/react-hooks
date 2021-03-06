import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/about';
import { UserContext } from './UserContext';

const AppRouter = () => {

  const [ user, setUser ] = useState('kuku!!!');
  
  // with useMemo we create a new object (providerValue) only when deps (value, setValue) change
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  )

}

export default AppRouter;