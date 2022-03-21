import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";

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
import Profile from "./components/user/Profile";
import EditProfile from "./components/user/EditProfile";

const MainRouter = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
      </Switch>
    </>
  );
};

export default MainRouter;
