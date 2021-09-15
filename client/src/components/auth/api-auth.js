const login = async (user) => {
  try {
    let response = await fetch("http://localhost:6969/api/auth", {
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

export { login };
