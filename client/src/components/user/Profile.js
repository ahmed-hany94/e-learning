import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../auth/auth-utils";
import { read } from "./api-user";

export default function Profile({ match }) {
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
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
        setRedirectToSignin(true);
      } else {
        setUser(data);
      }
    });
    return () => {
      abortController.abort();
    };
  }, [match.params.userId]);

  if (redirectToSignin) {
    return <Redirect to="/signin" />;
  }

  return (
    <main>
      <h1>My Profile</h1>
      {auth.isauthenticated().user &&
        auth.isauthenticated().user._id == user._id && (
          <Link to={"/user/edit/" + user._id}>Edit Profile</Link>
        )}
    </main>
  );
}
