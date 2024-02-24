import express from "express";
import dotenv from "dotenv";

dotenv.config({});
const app = express();
const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Application Test is OK!",
  });
});

app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON PORT : ${PORT}`);
});
