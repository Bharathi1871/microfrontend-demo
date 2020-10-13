import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const products = {
  porsche: { name: "Porsche-Diesel Master 419", img: "porsche.svg" },
  fendt: { name: "Fendt F20 Dieselroß", img: "fendt.svg" },
  eicher: { name: "Eicher Diesel 215/16", img: "eicher.svg" }
};

const App = () => (
  <Router>
    <Route path="/product/:sku" component={Product} />
  </Router>
);

const Product = ({ match }) => {
  const { name, img } = products[match.params.sku];
  return (
    <div>
      <Link to="/">&lt; home</Link>
      &nbsp;-&nbsp;
      <Link to="/checkout/cart">view cart &gt;</Link>
      <h1>{name}</h1>
      <img src={`https://mi-fr.org/img/${img}`} width="200" />
    </div>
  );
};

export default App;