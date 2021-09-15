import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth from "../auth/auth-utils";

const Menu = withRouter(({ history }) => (
  <header>
    <nav>
      <Link to="/">E-learning</Link>
    </nav>
    <nav>
      {!auth.isauthenticated() && (
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
      {auth.isauthenticated() && (
        <ul>
          <li>
            <Link to={"/user/" + auth.isauthenticated().user._id}>
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              onClick={() => {
                auth.clearJWT(() => history.push("/"));
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      )}
    </nav>
  </header>
));

export default Menu;
