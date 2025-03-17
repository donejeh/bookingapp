import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is auth route");
});


router.get("/register", (req, res) => {
  res.send("register, this is user route");
});


export default router;