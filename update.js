import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Sell from './components/Sell';
import Buy from './components/Buy';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sell" component={Sell} />
        <Route path="/buy" render={(props) => <Buy {...props} addToCart={addToCart} />} />
        <Route path="/cart" render={(props) => <Cart {...props} cart={cart} />} />
      </Switch>
    </Router>
  );
}

export default App;
