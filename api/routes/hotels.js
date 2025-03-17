import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotel } from "../controllers/HotelControllers.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id",updateHotel);

//delete
router.delete("/:id", deleteHotel);

//Get
router.get("/:id",getSingleHotel);

//GET ALL
router.get("/", getAllHotel);

export default router;