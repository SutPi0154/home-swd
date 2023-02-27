import React, { useState } from "react";
import Class from "./components/Class";
import About from "./pages/About";
import Content from "./pages/Content";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./style.css";
const App = () => {
  // const [count, setCount] = useState();
  // const [img, setImg] = useState(true);
  // const [add, setAdd] = useState(true);
  // const [lists, setList] = useState([
  //   { id: 1, name: "Mg Mg", password: "134344" },
  //   { id: 2, name: "Mg kyaw", password: "134344" },
  //   { id: 3, name: "Mg Hla", password: "134344" },
  // ]);
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // //function
  // const onSubmitHandeler = (e) => {
  //   e.preventDefault();
  //   console.log(name, password);
  //   const newList = { id: Date.now(), name, password };
  //   setList([...lists, newList]);

  return (
    // <div className="container">
    //   <Home />
    //   <About />
    //   <Content />
    // </div>
    <Routes>
      <Route path="/" element={"./pages/Home.jsx"} />
      <Route path="/about" element={"./pages/About.jsx"} />
      <Route path="/content" element={"./pages/Content.jsx"} />
    </Routes>
  );
};
export default App;
