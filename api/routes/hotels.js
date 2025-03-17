import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {

  const newHotel = new Hotel(req.body);
  try {

    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
    
  } catch (error) {
    res.status(400).json(error);
  }

  res.send("Hello, this is hotels route");
});
//UPDATE
//GET
//GET ALL
export default router;