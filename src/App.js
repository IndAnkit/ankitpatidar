import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./screens/LogIn";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/login"} component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
