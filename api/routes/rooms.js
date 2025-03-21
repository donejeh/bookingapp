import express from "express";
import { createRoom, deleteRoom, getAllRoom, getSingleRoom, updateRoom } from "../controllers/RoomControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelid",verifyAdmin,  deleteRoom);

//Get
router.get("/:id",getSingleRoom);

//GET ALL
router.get("/", getAllRoom);

export default router;