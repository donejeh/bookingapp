import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hostelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database: ", error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("database is disconnected ");
});


// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hostels", hostelsRoute);
app.use("/api/rooms", roomsRoute);



app.listen(3000, () => {
  connect();
  console.log("Server is running on port 3000");
});
