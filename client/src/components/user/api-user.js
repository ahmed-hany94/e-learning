const create = async (user) => {
  try {
    let response = await fetch("http://localhost:6969/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (params, tokenParam, signal) => {
  try {
    let response = await fetch(
      "http://localhost:6969/api/users/" + params.userId,
      {
        method: "GET",
        signal: signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenParam.token,
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, read };
