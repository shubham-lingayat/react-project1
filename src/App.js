import "./App.css";
import React from "react";
import Products from "./components/Products";

const App = () => {
  const products = [
    {
      id: "p1",
      title: "First",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      title: "Second",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "p3",
      title: "Third",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: "p4",
      title: "Fourth",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  return (
    <div className="App">
      <Products items={products} />
    </div>
  );
}

export default App;
