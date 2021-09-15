import React from "react";
import { Route, Switch } from "react-router-dom";

// our modules
import "./App.css";

// Components
//    core
import Home from "./components/core/Home";
import Menu from "./components/core/Menu";

//    auth
import Login from "./components/auth/Login";

//    user
import Register from "./components/user/Register";

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default MainRouter;
