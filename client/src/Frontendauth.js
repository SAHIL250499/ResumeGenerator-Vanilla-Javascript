const Authentication = async () => {
  try {
    document.querySelector("body").style.display = "none";
    const response = await fetch("http://localhost:3000/secret", {
      credentials: "include",
    });
    if (response.status === 200) {
      document.querySelector("body").style.display = "block";
    } else {
      window.location.replace("Login.html");
    }
  } catch (error) {
    console.log("User not authenticated ");
  }
};

Authentication();

const logout = async () => {
  try {
    const response = await fetch("http://localhost:3000/logout", {
      credentials: "include",
    });
    if (response.status === 400) {
      window.location.replace("Login.html");
    }
  } catch (error) {
    console.log(error);
  }
};
