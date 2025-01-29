const express = require("express");
const app = express();

const requestTimeStamp = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} of ${req.url} route`);
  next();
};

app.use(requestTimeStamp);

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
