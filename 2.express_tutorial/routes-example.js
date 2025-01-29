const express = require("express");

const app = express();

// =======================================
products = [
  {
    id: 1,
    label: "product1",
  },
  {
    id: 2,
    label: "product2",
  },
  {
    id: 3,
    label: "product3",
  },
  {
    id: 4,
    label: "product4",
  },
];

// =======================================

//  root route

app.get("/", (req, res) => {
  res.send("this is the home page");
});

app.get("/info", (req, res) => {
  res.status(200).send("this is the learning tutorial for express.js");
});

// static route
app.get("/products", (req, res) => {
  res.status(200).send(products);
});

// dynamic route
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const getSingleProduct = products.find((product) => product.id === productId);
  console.log("req.params : ", req.params);

  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("something went wrong");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log("the server is live at port 3000");
});
