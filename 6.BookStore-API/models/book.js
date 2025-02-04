const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title cannot be less than 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year of publication is required"],
    min: [1000, "Year must be atleast 1000"],
    max: [new Date().getFullYear(), "Year cannot be past current Date"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model('Book',BookSchema);

module.exports = Book;

