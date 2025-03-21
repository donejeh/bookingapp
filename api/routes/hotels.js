import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, updateHotel, 
    deleteHotel, getSingleHotel, getAllHotel } from "../controllers/HotelControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);

//delete
router.delete("/:id",verifyAdmin, deleteHotel);

//Get
router.get("/:id",getSingleHotel);

//GET ALL
router.get("/", getAllHotel);

export default router;