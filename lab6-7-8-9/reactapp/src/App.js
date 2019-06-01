import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListOfCgames from './components/ListOfCGames';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
        <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Computer Games</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Route exact path="/" component={ListOfCgames} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;