import React, {useState, useEffect} from "react";
// import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage"

function App() {

  const [user, setUser] = useState(null)

  //auto login if user matches
  useEffect(() => {
    fetch ("/create route for get request").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <LoginPage setUser={setUser}/> 

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
