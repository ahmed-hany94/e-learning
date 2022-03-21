import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth from "../auth/auth-utils";

const Menu = withRouter(({ history }) => (
  <header>
    <h1>
      <Link to="/">E-learning</Link>
    </h1>
    <ul>
      {!auth.isauthenticated() && (
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      )}
      {auth.isauthenticated() && (
        <nav className="nav-links">
          <ul>
            <li>
              <a to={"/user/" + auth.isauthenticated().user._id}>My Profile</a>
            </li>
            <li>
              <a
                to="/logout"
                onClick={() => {
                  auth.clearJWT(() => history.push("/"));
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      )}
    </ul>
  </header>
));

export default Menu;
