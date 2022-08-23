import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

router.get("/", UserController.getAllUser);
router.post("/", UserController.userRegistration);
router.get("/:id", UserController.getSingleUserById);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

export default router;
