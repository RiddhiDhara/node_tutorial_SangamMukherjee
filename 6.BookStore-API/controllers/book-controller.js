const Book = require("./../models/book");

// ---------------------------------------/get route controller
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(201).json({
        success: true,
        message: "List of books fetched successfully!!",
        data: allBooks,
      });
      console.log("all books fetched successfully!! -> route : /get");
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in database!!",
      });
      console.log("no books fetched!! -> route : /get");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!",
      error: error,
    });
    console.log("error occured!! -> route : /get", error);
  }
};

// --------------------------------------/get/:id route controller
const getSingleBooksById = async (req, res) => {
  try {
    const getBookId = req.params.id;
    const singleBook = await Book.findById(getBookId);
    if (!singleBook) {
      res.status(404).json({
        success: false,
        message: "Book with provided Id not found!!",
      });
      console.log("book of provided Id not found :-> route ./get/:id");
    } else {
      res.status(200).json({
        success: true,
        message: "Book with provided Id found successfully!!",
        data: singleBook,
      });
      console.log(`book with id ${getBookId} found successfully!!`);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!",
      error: error,
    });
    console.log("error occured!! -> route : /get/:id", error);
  }
};

// --------------------------------------/add route controller
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "A new Book added successfully!!",
        data: newlyCreatedBook,
      });
      console.log("book added successfully!! -> /add : ", newlyCreatedBook);
    }
  } catch (error) {
    console.log(" Error occured on route : /add :-> ", error);
    res.status(404).json({ message: "Something went wrong!!", error: error });
  }
};

// -------------------------------------/update/:id route controller
const updateBook = async (req, res) => {
  try {
    const getUpdateBookId = req.params.id;
    const getUpdatedVal = req.body;
    const updateBookId = await Book.findByIdAndUpdate(
      getUpdateBookId,
      getUpdatedVal,
      { new: true }
    );
    if (!updateBookId) {
      res.status(404).json({
        success: false,
        message: "Book with provide Id not found!!",
      });
      console.log(`Book with provided Id not found :-> route ./update/:id`);
    } else {
      res.status(201).json({
        success: true,
        message: "Book with provided Id updated successfully!!",
        data: updateBookId,
      });
      console.log(`Book with Id ${getUpdateBookId} updated successfully!!`);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!",
      error: error,
    });
    console.log("error occured!! -> route : /update/:id", error);
  }
};

// -------------------------------------/delete/:id route controller
const deleteBook = async (req, res) => {
  try {
    const getDeleteBookId = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(getDeleteBookId);
    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: "Book with provide Id not found!!",
      });
      console.log(`Book with provided Id not found :-> route ./delete/:id`);
    } else {
      res.status(201).json({
        success: true,
        message: "Book with provided Id deleted successfully!!",
        data: deleteBook,
      });
      console.log(`Book with Id ${getDeleteBookId} deleted successfully!!`);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!",
      error: error,
    });
    console.log("error occured!! -> route : /delete/:id", error);
  }
};

module.exports = {
  getAllBooks,
  getSingleBooksById,
  addNewBook,
  updateBook,
  deleteBook,
};
