import React from "react";

const products = [
  { brand: 'porsche', name: "Porsche-Diesel Master 419", img: "porsche.svg" },
  { brand: 'fendt', name: "Fendt F20 Dieselroß", img: "fendt.svg" },
  { brand: 'eicher', name: "Eicher Diesel 215/16", img: "eicher.svg" }
];

const App = () => {
  return (
    <>
      <h1>Welcome Home!</h1>
      <strong>Here are three tractors:</strong>
      <ul>
        {products && products.map((p, index) => {
          return (
            <li key={`product-key-${index}`}>
              <a href={`/product/${p.brand}`}>{p.brand}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
};

export default App;