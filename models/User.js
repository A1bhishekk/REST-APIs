import mongoose from "mongoose";

//Defining Schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "Please enter your age"],
  },
  mobile: {
    type: String,
    required: [true, "Please enter your mobile number"],
  },
  skills: {
    type: String,
    required: true,
  },
});

//Model
const User = mongoose.model("User", schema);
export default User;
