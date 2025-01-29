const express = require("express");
const app = express();

// define middleware function

const myFirstMiddleware = (req, res, next) => {
  console.log("This 1st middleware will run on every request");

  next(); // passing the control to the next middleware
};

app.use(myFirstMiddleware);

// declearing routes

app.get("/", (req, res) => {
  console.log("in / route");
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  console.log("in /about route");
  res.send("about Page");
});
app.get("/project", (req, res) => {
  console.log("in /project route");
  res.send("project Page");
});

//  port listener

const port = 3000;

app.listen(port, () => {
  console.log("listening to port 3000");
});
