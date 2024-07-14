import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    let response = await axios.get("/names");
    console.log(response);
    // response = await response.json();
    setUsername(response.data);
  };
  return (
    <div className="App">
      <h2>Hey learning the CI-CD with github actions.</h2>
      <h1>{username}</h1>
    </div>
  );
}

export default App;
