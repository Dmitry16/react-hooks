import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/about';

const AppRouter = () => {

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

        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  )

}

export default AppRouter;