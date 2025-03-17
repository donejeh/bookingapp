import express from "express";
import User from "../models/User.js";
import { createUser, updateUser, deleteUser, getSingleUser, getAllUser } from "../controllers/UserControllers.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in");
});

//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:id",updateUser);

//delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id",getSingleUser);

//GET ALL
router.get("/", getAllUser);

export default router;