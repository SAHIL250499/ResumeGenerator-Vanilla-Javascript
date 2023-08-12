require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

require("./db/conn");

const Register = require("./models/register");

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.get("/secret", auth, (req, res) => {
  // console.log(`cookie stored in browser is ${req.cookies.jwt}`);
  res.status(200).send();
});

app.get("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((currElement) => {
      return currElement.token !== req.token;
    });
    res.clearCookie("jwt");
    console.log("Logout Successfully");
    await req.user.save();
    res.status(400).send("logout");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const registerEmployee = new Register({
        email: req.body.email,
        name: req.body.name,
        password: password,
        confirmpassword: cpassword,
      });

      const token = await registerEmployee.generateAuthToken();
      console.log("the token part" + token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      const registered = await registerEmployee.save();
      console.log("the token part" + token);
      res.status(201).send("User successfully created");
    } else {
      res.send("password are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Register.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, useremail.password);

    const token = await useremail.generateAuthToken();
    // console.log(token);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    if (isMatch) {
      res.status(201).send("Login successfully");
    } else {
      res.send("invalid Details");
    }
  } catch (error) {
    res.status(400).send("invalid Details");
  }
});

app.listen(port, () => {
  console.log(`server  is running at port no ${port}`);
});
