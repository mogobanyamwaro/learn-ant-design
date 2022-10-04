import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Button } from "antd";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* <Button type="primary">Button clicked</Button>
         */}
        <Dashboard />
      </div>
    </React.Fragment>
  );
}

export default App;
