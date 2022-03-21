import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../auth/auth-utils";
import { read } from "./api-user";

const EditProfile = ({ match }) => {
  const [userValues, setUserValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    redirectToProfile: false,
    educator: false,
  });

  const jwtCookie = auth.isauthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(
      { userId: match.params.userId },
      { token: jwtCookie.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setUserValues({ ...userValues, error: data.error });
      } else {
        setUserValues({
          ...userValues,
          username: data.username,
          email: data.email,
          educator: data.educator,
        });
      }
    });
    return () => {
      abortController.abort();
    };
  }, [match.params.userId]);

  const handleChange = () => {};

  const clickSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <form>
        <ul>
          <li>
            <label>email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              onChange={handleChange("email")}
            ></input>
          </li>
          <li>
            <label>password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={handleChange("password")}
            ></input>
          </li>
          <ul id="actions">
            <li>
              <a onClick={clickSubmit}>Login</a>
            </li>
            <li>
              <a to="#">Forgot password?</a>
            </li>
          </ul>
        </ul>
      </form>
    </main>
  );
};

export default EditProfile;
