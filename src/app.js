import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./router/route";
import userRouter from "./router/user";
import authRouter from "./router/auth";
import categoryRouter from "./router/category";

const app = express();

// connnect database
mongoose
  .connect("mongodb://localhost:27017/ASM-TS")
  .then(() => console.log("Kết nối db thành công"))
  .catch((error) => console.log(error));

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(router);
app.use(userRouter);
app.use(authRouter);
app.use(categoryRouter);

// connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
