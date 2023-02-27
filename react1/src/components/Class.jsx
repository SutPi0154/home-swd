import React, { useState, useEffect } from "react";
import "../style.css";

const Class = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("h1");
  //   }, [count]);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchItem();
  }, [count]);

  const fetchItem = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setItems(data);
    console.log(data);
  };
  return (
    <div>
      {/* <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CLick
      </button> */}
      {items.map((item) => {
        return (
          <div>
            <img src="" alt="" />
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Class;
