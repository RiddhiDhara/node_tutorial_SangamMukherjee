const mongoose = require("mongoose");

// mongoDB connection from mongodb atlas

mongoose
  .connect(
    "mongodb+srv://riddhidhara2003:riddhidhara2004@cluster0.gxx91.mongodb.net/"
  )
  .then(() => console.log("MongoDB database connected successfully!!"))
  .catch((error) => console.log(error));

// creating schema

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// converting mongoose schema into mongoose model in the database server

const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    //-----------------------------------------------create user

    // -----------another way

    const newUser = await User.create({
      name: "updated user",
      email: "updated@example.com",
      age: 100,
      isActive: false,
      tags: ["alive"],
    });
    console.log("created a new user!! ", newUser);

    //-----------------------------------------------fetch all users

    // get all users from the database

    // const allUsers = await User.find({});
    // console.log("fetching all users : ",allUsers);

    //-----------------------------------------------fetch users on criteria

    // const selectiveUser_isActive = await User.find({isActive : false});
    // console.log("selected users based on isActive criteria : ",selectiveUser_isActive);

    //-----------------------------------------------fetch the first on criteria

    // const getFirstOne = await User.findOne({name : "Uchiha Sasuke"});
    // console.log("the first one on criteria : ",getFirstOne);

    //-----------------------------------------------fetch last created user by Id

    // const getLastById = await User.findById(newUser._id);
    // console.log("the last user by Id : ",getLastById);

    //-----------------------------------------------fetch user with selected fields

    // const getBySelectedFields = await User.find().select("name email -_id");
    // console.log("the users with selected fields : ",getBySelectedFields);

    //-----------------------------------------------fetch limited users

    // const getLimitedUsers = await User.find().limit(5).skip(1);
    // console.log("first 5 users skipping 1 user from first : ",getLimitedUsers);

    //-----------------------------------------------fetch sorted user list on criteria

    // const getSortedUser_age = await User.find().sort({age : 1}); // 1 for asc / -1 for desc
    // console.log("sorted list of users on age in asc/desc : ",getSortedUser_age);

    //-----------------------------------------------fetch no. of users on criteria

    // const getCountUsers_isActive = await User.countDocuments({isActive : true});
    // console.log("count of users with isActive as true : ",getCountUsers_isActive);

    //-----------------------------------------------delete user on criteria

    // const deleteUser_id = await User.findByIdAndDelete(newUser._id);
    // console.log("user deleted : ",deleteUser_id);

    //-----------------------------------------------update user on criteria

    const updateUser_id = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 150 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("user updated : ", updateUser_id);
    
  } catch (error) {
    console.log("Error : ", error);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection is closed!!");
  }
}

runQueryExample();

// ---------------------another way :

// const newUser = new User({
//   name: "Riddhi Dhara",
//   email: "riddhi@example.com",
//   age: 22,
//   isActive: true,
//   tags: ["developer", "artist"]
// });
// await newUser.save();
