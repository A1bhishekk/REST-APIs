import User from "../models/User.js";

class UserController {
  //create a new user
  static userRegistration = async (req, res) => {
    try {
      const user = new User(req.body);
      const result = await user.save();
      res
        .status(201)
        .json({
          message: `${user.name} registered successfully`,
          data: result,
        });
    } catch (error) {
      res.send(error);
    }
  };

  //get all users
  static getAllUser = async (req, res) => {
    try {
      const result = await User.find();
      res.send(result);
    } catch (error) {
      res.send(error.message);
    }
  };

  //get single user by id
  static getSingleUserById = async (req, res) => {
    try {
      const result = await User.findById(req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error.message);
    }
  };

  //update user by id
  static updateUserById = async (req, res) => {
    try {
      const result = await User.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: ` updated user successfully`, data: result });
    } catch (error) {
      res.send(error.message);
    }
  };

  //delete user by id
  static deleteUserById = async (req, res) => {
    try {
      const result = await User.findByIdAndDelete(req.params.id);
      res
        .status(204)
        .json({ message: ` deleted user successfully`, data: result });
    } catch (error) {
      res.send(error.message);
    }
  };
}

export default UserController;
