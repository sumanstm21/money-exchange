import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Currency from "./pages/Currency";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div class="container">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <Link to="/" class="navbar-brand" >Home</Link>
            <Link to="/about" class="navbar-brand" >About</Link>
            <Link to="/Currency" class="navbar-brand" >Currency</Link>
          </a>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/currency" component={Currency} />
      </Switch>
    </Router>
  );
}

export default App;
