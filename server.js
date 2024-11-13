import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {router as authRouter} from "./Router/auth.router.js";
import { router as formRouter } from "./Router/contact.router.js";
import {router as serviceRouter} from "./Router/service.router.js";
import connectDB from "./utils/connectDB.js";
import errorMiddleware from "./middlewares/error.middleware.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/data",serviceRouter)
app.use("/api/auth", authRouter);
app.use("/api/form", formRouter);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("welcome world");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("database connection failed", err);
  });