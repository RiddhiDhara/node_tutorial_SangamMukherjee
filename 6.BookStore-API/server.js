require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");

//------------------------creating express instance
const app = express();

//------------------------connecting to database
connectToDB();

//------------------------creating a middleware
app.use(express.json());

//-----------------------creating routes for book
app.use("/api/books", bookRoutes);

//-----------------------setting port no.
const PORT = process.env.PORT || 3000;

//-----------------------listening to port
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
