import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Database from "./components/Database";
import DutyPage from "./components/Doctors";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Link to="/home">HOME</Link>
        <Link to="/doctors">Doctor Schedule</Link>
        <Link to="/signup">Patient Signup</Link>
        <Link to="/database">Patient Database</Link>
      </nav>
      <Switch>
        <Route path="/" exact={true} component={Home} />}
        <Route path="/home" exact={true} component={Home} />}
        <Route path="/doctors" exact={true} component={DutyPage} />
        <Route path="/signup" exact={true} component={SignUp} />}
        <Route path="/database" exact={true} component={Database} />
      </Switch>
    </div>
  );
}

export default App;
