import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
