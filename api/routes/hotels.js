import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is hos route");
});

export default router;