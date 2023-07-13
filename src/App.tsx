import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

let enviorment = "DEV"
let SERVER_URL: string;

enviorment === "DEV" ? SERVER_URL = "http://localhost:8000" : SERVER_URL = ""
disableReactDevTools()

function App() {
  const [check, setCheck] = useState("");

  const handleClick = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/api/check`);
      if (!data.ok) {
        throw new Error(data.message);
      }
      setCheck(data.check);
    } catch (error) {
      // toast
      // error handling function
      // mui error handling
      console.error(error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click to Check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
