const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.status(200).send("Hello app");
})

app.post("/api/data", (req,res) => {
    res.json({
        message : 'data received',
        data : req.body
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(404).send("something went wrong");
})

const port = 3000;

app.listen(port,() => {
    console.log(`express running at port ${port}`);
})
