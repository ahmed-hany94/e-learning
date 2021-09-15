import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

// our modules
import MainRouter from "./MainRouter";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
