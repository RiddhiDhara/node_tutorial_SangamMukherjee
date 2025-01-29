const express = require("express");
const path = require("path");

const app = express();

//  set the view engine as ejs

app.set("view engine", "ejs");

// set the directory for the views

app.set("views", path.join(__dirname, "views"));

// global object

const product = [
  {
    id: 1,
    label: "product 1",
  },
  {
    id: 2,
    label: "product 2",
  },
  {
    id: 3,
    label: "product 3",
  },
  {
    id: 4,
    label: "product 4",
  }
];

// routes

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: product });
});

app.get("/about", (req, res) => {
  res.render("About", { title: "About"});
});

const port = 3000;

app.listen(port, (req,res) => {
    console.log(`app listening at port ${port}`);
})