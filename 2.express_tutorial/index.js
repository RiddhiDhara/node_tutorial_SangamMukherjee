const express = require("express");


// --------------------------------------

const app = express();

// --------------------------------------Routes

app.get("/",(req,res) => {
    res.send("Hello World");
})

// --------------------------------------Port

const port = 3000;

// --------------------------------------listening port

app.listen(port,() => {
    console.log(`express running at port ${port}`);
})
