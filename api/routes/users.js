import express from "express";
import User from "../models/User.js";
import {updateUser, deleteUser, getSingleUser, getAllUser } from "../controllers/UserControllers.js";
import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in");
});


router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello admin, you are logged in and you can delete all accounts");
});

//UPDATE
router.put("/:id",updateUser);

//delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id",getSingleUser);

//GET ALL
router.get("/", getAllUser);

export default router;