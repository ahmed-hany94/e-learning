import React, { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "./api-user";

export default function Register() {
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

  return (
    <main>
      <form>
        <section>
          {/* <fieldset></fieldset> */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange("username")}
          ></input>
        </section>

        <section>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter you email"
            onChange={handleChange("email")}
          ></input>
        </section>

        <section>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange("password")}
          ></input>
        </section>

        {/* <div class="submitsAndHiddens"></div> */}
        <section>
          <button onClick={clickSubmit}>Register</button>
        </section>
      </form>
    </main>
  );
}
