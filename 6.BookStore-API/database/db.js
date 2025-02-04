const mongoose = require("mongoose");
// const bookSchema = require("./../models/book");

//-----------------------connect to database

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected successfully!!");
  } catch (error) {
    console.error("MongoDB connection failed : ", error);
    process.exit(1); // terminate a running process with an exit code of 1
  }
};


//-----------------------exporting the function 
module.exports = connectToDB;
