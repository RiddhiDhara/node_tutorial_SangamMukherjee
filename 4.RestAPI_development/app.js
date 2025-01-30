const express = require("express");
const app = express();

// setting the middleware :

app.use(express.json());

// global book array :

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
  {
    id: 4,
    title: "Book 4",
  },
];

//  intro route

app.get("/", (req, res) => {
  res.json({
    message: "welcome to our book store API. ",
  });
});

// get all books

app.get("/get", (req, res) => {
  res.json(books);
});

// get books by id

app.get("/get/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const getbookId = books.find((bookItem) => bookItem.id === bookId);
  console.log("req.params : ", req.params);

  if (getbookId) {
    res.status(200).json(getbookId);
  } else {
    res.status(404).json({ message: "book not found" });
  }
});

// add book to the store

app.post("/add", (req, res) => {
  let newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };

  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "new book added!",
  });
});

// update a book by id

app.put("/update/:id", (req, res) => {
  const response = req.body;
  console.log(response);
  if (!response || Object.keys(response).length === 0) {
    res.json({ message: "data is not received!!" });
  } else {
    const bookId = parseInt(req.params.id);
    const findBook = books.find((bookItem) => bookItem.id === bookId);
    if (findBook) {
      findBook.title = response.title;
      res.status(200).json({
        message: `Book with id ${bookId} has been updated successfully !!`,
        data: findBook,
      });
    } else {
      res.status(404).json({
        message: "Book not found! Please try again.",
      });
    }
  }
});

// delete a book by id

app.delete("/delete/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const findBook = books.findIndex((bookItem) => bookItem.id === bookId);
  if (findBook !== -1) {
    const deletedBook = books.splice(findBook, 1);
    res.status(200).json({
      message: `Book with id ${bookId} has been deleted successfully !!`,
    });
  } else {
    res.status(404).json({
      message: "Book not found! Please try again.",
    });
  }
}); 

// listening to server

const port = 3000;

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
