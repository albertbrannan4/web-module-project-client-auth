import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/logout" />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
