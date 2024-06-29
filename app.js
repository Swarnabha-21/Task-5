import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Sell from './components/Sell';
import Buy from './components/Buy';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sell" component={Sell} />
        <Route path="/buy" component={Buy} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
