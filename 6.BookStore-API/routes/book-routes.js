const express = require("express");
const {
  getAllBooks,
  getSingleBooksById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("./../controllers/book-controller");

// creating express router

const router = express.Router();

//  all the routes that are related to books only

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBooksById);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
 

// exporting the routing 

module.exports = router;

// note that : while using express.Router() in place of app = express() we need to export router to the main app/server.js file