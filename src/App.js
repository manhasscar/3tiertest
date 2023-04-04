import logo from "./logo.svg";
import { useEffect, ReactDOM, React, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [hi, setHi] = useState(0);
  useEffect(() => {
    axios.get("http://118.67.155.184:8080/api/test").then((res) => {
      setHi(res.data);
    });
  });
  return <div className="App">{hi}</div>;
}

export default App;
