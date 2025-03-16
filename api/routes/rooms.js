import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is room route");
});

export default router;