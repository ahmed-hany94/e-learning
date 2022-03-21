import React, { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "./api-user";

export default function Register(props) {
  const [userValues, setUserValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (name) => (event) => {
    setUserValues({ ...userValues, [name]: event.target.value });
  };

  const clickSubmit = () => {
    const user = {
      username: userValues.username || undefined,
      email: userValues.email || undefined,
      password: userValues.password || undefined,
    };

    create(user).then((data) => {
      if (data.error) {
        setUserValues({ ...userValues, error: data.error });
      } else {
        setUserValues({ ...userValues, error: "" });
      }
    });
  };

  const { from } = props.location.state || {
    from: {
      pathname: "/login",
    },
  };

  const { redirectToReferrer } = userValues;
  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <main>
      <form method="post">
        <fieldset>
          <label>
            Username
            <br />
            <input
              name="username"
              placeholder="Enter you username"
              onChange={handleChange("username")}
              required
            />
            <br />
          </label>
          <label>
            E-mail
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              onChange={handleChange("email")}
              required
            />
            <br />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter you password"
              onChange={handleChange("password")}
              required
            />
            <br />
          </label>
        </fieldset>
        <footer>
          <Link onClick={clickSubmit} to="/login">
            Register
          </Link>
        </footer>
      </form>
    </main>
  );
}
