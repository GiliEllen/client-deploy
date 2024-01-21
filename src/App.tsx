import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import axios from "axios";
import { useState } from "react";
import "./App.css";

//This belongs to env
let enviorment = "PROD"
let SERVER_URL: string;

enviorment === "DEV" ? SERVER_URL = "http://localhost:8000" : SERVER_URL = "https://july-deploy-example-backend.onrender.com"
//This stays here:
disableReactDevTools()
//redux disable:
//?

function App() {
  const [check, setCheck] = useState("");

  const handleClickM = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/api/check/mongoose`);
      if (!data.ok) {
        throw new Error(data.message);
      }
      console.log(data)
      setCheck(data.check);
    } catch (error) {
      // toast
      // error handling function
      // mui error handling
      console.error(error);
    }
  };
  const handleClickSQL = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/api/check/sql`);
      if (!data.ok) {
        throw new Error(data.message);
      }
      console.log(data)
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
      <button onClick={handleClickM}>Click to Check mongoose</button>
      <button onClick={handleClickSQL}>Click to Check mySql</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
