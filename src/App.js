// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const products = [
    { name: "photoshop", price: "$1245" },
    { name: "illustrator", price: "$145" },
    { name: "lightroom", price: "$124" },
  ];
  const productNames = products.map((product) => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <li>{products[0].name}</li>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
        <p>i am a react person</p>
        <Person name="David Abraham" age="34"></Person>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {users.map((info) => (
          <li>
            {info.name} <strong>{info.phone}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadious: "5px",
    backgroundColor: "lightgreen",
    height: "300px",
    width: "600px",
    color: "black",
  };

  return (
    <div style={productStyle}>
      <h2>Name:{props.name}</h2>
      <h1>Price: {props.price}</h1>
      <button>Buy now</button>
    </div>
  );
}
function Person(prop) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
    backgroundColor: "cyan",
  };
  return (
    <div style={personStyle}>
      <h1>Name: {prop.name}</h1>
      <h3>Name: {prop.age}</h3>
    </div>
  );
}

export default App;
